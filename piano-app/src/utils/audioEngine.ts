import { noteToFreq } from './keyboard';

type CtxWithRecDest = AudioContext & { _recDest?: MediaStreamAudioDestinationNode };

export interface ScheduledNote {
  cancelEarly: () => void;
}

let ctx: CtxWithRecDest | null = null;
const activeNodes = new Map<string, { gain: GainNode; oscs: OscillatorNode[] }>();

export function getAudioContext(): CtxWithRecDest {
  if (!ctx) ctx = new AudioContext() as CtxWithRecDest;
  return ctx;
}

export function startNote(note: string, audioCtx: CtxWithRecDest): void {
  if (activeNodes.has(note)) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const freq = noteToFreq(note);
  const now = audioCtx.currentTime;

  const masterGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 5500;
  filter.Q.value = 0.3;

  masterGain.connect(filter);
  filter.connect(audioCtx.destination);
  // Also route to recording destination if active
  if (audioCtx._recDest) filter.connect(audioCtx._recDest);

  masterGain.gain.setValueAtTime(0, now);
  masterGain.gain.linearRampToValueAtTime(0.65, now + 0.012);
  masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.18);

  const specs: [number, OscillatorType, number][] = [
    [1, 'triangle', 1.0],
    [2, 'sine', 0.45],
    [3, 'sine', 0.18],
    [4, 'sine', 0.07],
  ];

  const oscs: OscillatorNode[] = [];
  specs.forEach(([mult, type, gain]) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq * mult;
    g.gain.value = gain;
    osc.connect(g);
    g.connect(masterGain);
    osc.start(now);
    oscs.push(osc);
  });

  activeNodes.set(note, { gain: masterGain, oscs });
}

const SPECS: [number, OscillatorType, number][] = [
  [1, 'triangle', 1.0],
  [2, 'sine', 0.45],
  [3, 'sine', 0.18],
  [4, 'sine', 0.07],
];

export function scheduleNote(
  note: string,
  audioCtx: CtxWithRecDest,
  startWhen: number,
  stopWhen: number,
): ScheduledNote {
  const freq = noteToFreq(note);
  const masterGain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 5500;
  filter.Q.value = 0.3;
  masterGain.connect(filter);
  filter.connect(audioCtx.destination);
  if (audioCtx._recDest) filter.connect(audioCtx._recDest);

  masterGain.gain.setValueAtTime(0, startWhen);
  masterGain.gain.linearRampToValueAtTime(0.65, startWhen + 0.012);
  masterGain.gain.exponentialRampToValueAtTime(0.35, startWhen + 0.18);
  masterGain.gain.setValueAtTime(0.35, stopWhen);
  masterGain.gain.exponentialRampToValueAtTime(0.001, stopWhen + 0.4);

  const oscs: OscillatorNode[] = [];
  SPECS.forEach(([mult, type, gain]) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq * mult;
    g.gain.value = gain;
    osc.connect(g);
    g.connect(masterGain);
    osc.start(startWhen);
    osc.stop(stopWhen + 0.45);
    oscs.push(osc);
  });

  return {
    cancelEarly: () => {
      const now = audioCtx.currentTime;
      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(masterGain.gain.value, now);
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      oscs.forEach(osc => { try { osc.stop(now + 0.05); } catch { /* already stopped */ } });
    },
  };
}

export function stopNote(note: string, audioCtx: AudioContext): void {
  const node = activeNodes.get(note);
  if (!node) return;
  const now = audioCtx.currentTime;
  node.gain.gain.cancelScheduledValues(now);
  node.gain.gain.setValueAtTime(node.gain.gain.value, now);
  node.gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
  node.oscs.forEach(osc => osc.stop(now + 0.45));
  activeNodes.delete(note);
}

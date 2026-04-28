import { noteToFreq } from './keyboard';

let ctx: AudioContext | null = null;
const activeNodes = new Map<string, { gain: GainNode; oscs: OscillatorNode[] }>();

export function getAudioContext(): AudioContext {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

export function startNote(note: string, audioCtx: AudioContext): void {
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

  // Attack + decay to sustain
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

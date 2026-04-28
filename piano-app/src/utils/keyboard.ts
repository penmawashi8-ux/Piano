import type { KeyDef } from '../types';

const CHROMATIC = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const BLACK_SET = new Set(['C#', 'D#', 'F#', 'G#', 'A#']);

// F3 (MIDI 53) to C6 (MIDI 84)
const START_MIDI = 53;
const END_MIDI = 84;

export function noteToMidi(note: string): number {
  const m = note.match(/^([A-G]#?)(\d+)$/);
  if (!m) throw new Error(`Invalid note: ${note}`);
  const idx = CHROMATIC.indexOf(m[1]);
  return (parseInt(m[2]) + 1) * 12 + idx;
}

export function midiToFreq(midi: number): number {
  return 440 * 2 ** ((midi - 69) / 12);
}

export function noteToFreq(note: string): number {
  return midiToFreq(noteToMidi(note));
}

export const ALL_KEYS: KeyDef[] = [];
for (let midi = START_MIDI; midi <= END_MIDI; midi++) {
  const octave = Math.floor(midi / 12) - 1;
  const noteIdx = midi % 12;
  const noteName = CHROMATIC[noteIdx];
  ALL_KEYS.push({
    note: `${noteName}${octave}`,
    noteName,
    octave,
    isBlack: BLACK_SET.has(noteName),
    midiNote: midi,
  });
}

export const WHITE_KEYS = ALL_KEYS.filter(k => !k.isBlack);
export const BLACK_KEYS = ALL_KEYS.filter(k => k.isBlack);

export const KEY_MAP = new Map(ALL_KEYS.map(k => [k.note, k]));

export function getKeyXPercent(note: string): number {
  const key = KEY_MAP.get(note);
  if (!key) return 50;
  const n = WHITE_KEYS.length;
  if (!key.isBlack) {
    const idx = WHITE_KEYS.findIndex(k => k.note === note);
    return (idx + 0.5) / n * 100;
  }
  const leftIdx = WHITE_KEYS.findIndex(k => k.midiNote === key.midiNote - 1);
  return (leftIdx + 0.9) / n * 100;
}

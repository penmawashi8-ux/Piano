import { Midi } from '@tonejs/midi';
import type { NoteEvent } from '../types';

const NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

function midiToNote(n: number): string {
  return `${NAMES[n % 12]}${Math.floor(n / 12) - 1}`;
}

export async function loadMidi(file: File): Promise<NoteEvent[]> {
  const midi = new Midi(await file.arrayBuffer());
  const track = midi.tracks.reduce((a, b) => a.notes.length >= b.notes.length ? a : b);
  if (!track.notes.length) return [];

  const sorted = [...track.notes].sort((a, b) => a.time - b.time);

  // Group notes that start within 20ms of each other as simultaneous (chords)
  const groups: { time: number; notes: typeof sorted }[] = [];
  for (const n of sorted) {
    const last = groups[groups.length - 1];
    if (last && n.time - last.time < 0.02) {
      last.notes.push(n);
    } else {
      groups.push({ time: n.time, notes: [n] });
    }
  }

  return groups.map((group, i) => {
    const nextTime = groups[i + 1]?.time;
    const maxDuration = Math.max(...group.notes.map(n => n.duration));
    return {
      notes: group.notes.map(n => midiToNote(n.midi)),
      duration: Math.max(0.05, nextTime != null ? nextTime - group.time : maxDuration),
    };
  });
}

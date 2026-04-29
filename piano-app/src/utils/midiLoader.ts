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

  const notes = [...track.notes].sort((a, b) => a.time - b.time);
  return notes.map((n, i) => ({
    note: midiToNote(n.midi),
    duration: Math.max(0.05, notes[i + 1] ? notes[i + 1].time - n.time : n.duration),
  }));
}

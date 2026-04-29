export interface NoteEvent {
  notes: string[];
  duration: number;
  noteDuration?: number; // actual hold time; falls back to duration * 0.82
}

export interface VisualNote {
  id: string;
  note: string;
  isBlack: boolean;
  x: number;
}

export interface KeyDef {
  note: string;
  noteName: string;
  octave: number;
  isBlack: boolean;
  midiNote: number;
}

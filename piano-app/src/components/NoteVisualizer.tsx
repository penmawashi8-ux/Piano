import type { VisualNote } from '../types';

const SOLFEGE: Record<string, string> = {
  'C': 'ド', 'C#': 'ド♯',
  'D': 'レ', 'D#': 'レ♯',
  'E': 'ミ',
  'F': 'ファ', 'F#': 'ファ♯',
  'G': 'ソ', 'G#': 'ソ♯',
  'A': 'ラ', 'A#': 'ラ♯',
  'B': 'シ',
};

function toSolfege(note: string): string {
  const m = note.match(/^([A-G]#?)/);
  return m ? (SOLFEGE[m[1]] ?? note) : note;
}

interface Props {
  notes: VisualNote[];
}

export function NoteVisualizer({ notes }: Props) {
  return (
    <div className="visualizer">
      {notes.map(n => (
        <div
          key={n.id}
          className={`vnote vnote--${n.isBlack ? 'black' : 'white'}`}
          style={{ left: `${n.x}%` }}
        >
          <span className="vnote__solfege">{toSolfege(n.note)}</span>
          <span className="vnote__name">{n.note}</span>
        </div>
      ))}
    </div>
  );
}

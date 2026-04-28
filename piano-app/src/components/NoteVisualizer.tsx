import type { VisualNote } from '../types';

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
          {n.note}
        </div>
      ))}
    </div>
  );
}

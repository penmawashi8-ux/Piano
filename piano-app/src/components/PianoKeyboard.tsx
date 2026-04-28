import { WHITE_KEYS, BLACK_KEYS } from '../utils/keyboard';

interface Props {
  activeKeys: Set<string>;
  onNoteOn: (note: string) => void;
  onNoteOff: (note: string) => void;
}

const N = WHITE_KEYS.length;
const WHITE_W = 100 / N;

const OCTAVE_COLORS: Record<number, string> = {
  3: '#4ade80',
  4: '#c084fc',
  5: '#22d3ee',
  6: '#fb923c',
};

function Key({ note, isBlack, isActive, style, onNoteOn, onNoteOff, octave }: {
  note: string;
  isBlack: boolean;
  isActive: boolean;
  style: React.CSSProperties;
  onNoteOn: (n: string) => void;
  onNoteOff: (n: string) => void;
  octave: number;
}) {
  return (
    <div
      className={`key${isBlack ? ' key--black' : ' key--white'}${isActive ? ' key--active' : ''}`}
      style={style}
      onPointerDown={(e) => { e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); onNoteOn(note); }}
      onPointerUp={() => onNoteOff(note)}
      onPointerCancel={() => onNoteOff(note)}
    >
      {!isBlack && (
        <span className="key-label" style={{ color: OCTAVE_COLORS[octave] ?? '#aaa' }}>
          {note}
        </span>
      )}
    </div>
  );
}

export function PianoKeyboard({ activeKeys, onNoteOn, onNoteOff }: Props) {
  return (
    <div className="keyboard">
      {WHITE_KEYS.map((k, idx) => (
        <Key
          key={k.note}
          note={k.note}
          isBlack={false}
          isActive={activeKeys.has(k.note)}
          octave={k.octave}
          style={{ left: `${idx * WHITE_W}%`, width: `${WHITE_W}%` }}
          onNoteOn={onNoteOn}
          onNoteOff={onNoteOff}
        />
      ))}
      {BLACK_KEYS.map((k) => {
        const leftIdx = WHITE_KEYS.findIndex(w => w.midiNote === k.midiNote - 1);
        if (leftIdx < 0) return null;
        const left = (leftIdx + 0.57) / N * 100;
        const width = 0.65 / N * 100;
        return (
          <Key
            key={k.note}
            note={k.note}
            isBlack={true}
            isActive={activeKeys.has(k.note)}
            octave={k.octave}
            style={{ left: `${left}%`, width: `${width}%` }}
            onNoteOn={onNoteOn}
            onNoteOff={onNoteOff}
          />
        );
      })}
    </div>
  );
}

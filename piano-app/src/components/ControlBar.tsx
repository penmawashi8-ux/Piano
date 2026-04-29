import type { Fanfare } from '../utils/fanfare';

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
  isRecording: boolean;
  onToggleRecord: () => void;
  elapsed: number;
  fanfares: Fanfare[];
  selectedId: string;
  onSelectFanfare: (id: string) => void;
  onMidiLoad: (file: File) => void;
}

function fmtTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

export function ControlBar({
  isPlaying, onTogglePlay,
  isRecording, onToggleRecord, elapsed,
  fanfares, selectedId, onSelectFanfare, onMidiLoad,
}: Props) {
  const selected = fanfares.find(f => f.id === selectedId) ?? fanfares[0];

  return (
    <div className="ctrl">
      <div className="ctrl__side">
        <div className="fanfare-picker">
          <select
            className="fanfare-select"
            value={selectedId}
            onChange={e => onSelectFanfare(e.target.value)}
            disabled={isPlaying}
          >
            {fanfares.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
          <span className="fanfare-composer">{selected.composer}</span>
        </div>
      </div>

      <div className="ctrl__center">
        <button
          className={`play-btn${isPlaying ? ' play-btn--on' : ''}`}
          onClick={onTogglePlay}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          )}
          {isPlaying ? '停止' : '自動演奏'}
        </button>
      </div>

      <div className="ctrl__side ctrl__side--right">
        <label className="midi-btn" title="MIDIファイルを読み込む">
          <input
            type="file"
            accept=".mid,.midi"
            style={{ display: 'none' }}
            onChange={e => { const f = e.target.files?.[0]; if (f) onMidiLoad(f); e.target.value = ''; }}
            disabled={isPlaying}
          />
          MIDI
        </label>
        <button
          className={`rec-btn${isRecording ? ' rec-btn--on' : ''}`}
          onClick={onToggleRecord}
        >
          <span className="rec-dot" />
          {isRecording ? fmtTime(elapsed) : 'REC'}
        </button>
      </div>
    </div>
  );
}

import type { FanfareItem } from '../utils/fanfare';

interface Props {
  isPlaying: boolean;
  onTogglePlay: () => void;
  isRecording: boolean;
  onToggleRecord: () => void;
  elapsed: number;
  fanfares: FanfareItem[];
  selectedId: string;
  onSelectFanfare: (id: string) => void;
}

function fmtTime(s: number) {
  return `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
}

export function ControlBar({
  isPlaying, onTogglePlay,
  isRecording, onToggleRecord, elapsed,
  fanfares, selectedId, onSelectFanfare,
}: Props) {
  return (
    <div className="ctrl">
      <div className="ctrl__side">
        <button className="ctrl__icon-btn" title="設定">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      <div className="ctrl__center">
        <button
          className={`play-btn${isPlaying ? ' play-btn--on' : ''}`}
          onClick={onTogglePlay}
        >
          {isPlaying
            ? <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            : <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          }
          {isPlaying ? '停止' : '自動演奏'}
        </button>
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
      </div>

      <div className="ctrl__side ctrl__side--right">
        <button
          className={`rec-btn${isRecording ? ' rec-btn--on' : ''}`}
          onClick={isRecording ? onToggleRecord : onToggleRecord}
        >
          <span className="rec-dot" />
          {isRecording ? fmtTime(elapsed) : 'REC'}
        </button>
      </div>
    </div>
  );
}

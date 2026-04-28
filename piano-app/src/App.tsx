import { useCallback, useState } from 'react';
import { NoteVisualizer } from './components/NoteVisualizer';
import { ControlBar } from './components/ControlBar';
import { PianoKeyboard } from './components/PianoKeyboard';
import { getAudioContext, startNote, stopNote } from './utils/audioEngine';
import { KEY_MAP, getKeyXPercent } from './utils/keyboard';
import { FANFARES } from './utils/fanfare';
import { useAutoPlay } from './hooks/useAutoPlay';
import { useRecorder } from './hooks/useRecorder';
import type { VisualNote } from './types';

export function App() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [visualNotes, setVisualNotes] = useState<VisualNote[]>([]);
  const [selectedFanfareId, setSelectedFanfareId] = useState(FANFARES[0].id);

  const selectedFanfare = FANFARES.find(f => f.id === selectedFanfareId) ?? FANFARES[0];

  const addVisualNote = useCallback((note: string) => {
    const key = KEY_MAP.get(note);
    const id = `${note}-${Date.now()}-${Math.random()}`;
    setVisualNotes(prev => [
      ...prev.slice(-40),
      { id, note, isBlack: key?.isBlack ?? false, x: getKeyXPercent(note) },
    ]);
    setTimeout(() => setVisualNotes(prev => prev.filter(n => n.id !== id)), 3000);
  }, []);

  const handleNoteOn = useCallback((note: string) => {
    const ctx = getAudioContext();
    startNote(note, ctx);
    setActiveKeys(prev => new Set(prev).add(note));
    addVisualNote(note);
  }, [addVisualNote]);

  const handleNoteOff = useCallback((note: string) => {
    const ctx = getAudioContext();
    stopNote(note, ctx);
    setActiveKeys(prev => {
      const next = new Set(prev);
      next.delete(note);
      return next;
    });
  }, []);

  const { isPlaying, start, stop } = useAutoPlay(handleNoteOn, handleNoteOff);
  const { isRecording, elapsed, startRecording, stopRecording } = useRecorder();

  return (
    <div className="app">
      <NoteVisualizer notes={visualNotes} />
      <ControlBar
        isPlaying={isPlaying}
        onTogglePlay={isPlaying ? () => stop(selectedFanfare.notes) : () => start(selectedFanfare.notes)}
        isRecording={isRecording}
        onToggleRecord={isRecording ? stopRecording : startRecording}
        elapsed={elapsed}
        fanfares={FANFARES}
        selectedId={selectedFanfareId}
        onSelectFanfare={setSelectedFanfareId}
      />
      <PianoKeyboard
        activeKeys={activeKeys}
        onNoteOn={handleNoteOn}
        onNoteOff={handleNoteOff}
      />
    </div>
  );
}

import { useCallback, useState } from 'react';
import { NoteVisualizer } from './components/NoteVisualizer';
import { ControlBar } from './components/ControlBar';
import { PianoKeyboard } from './components/PianoKeyboard';
import { getAudioContext, startNote, stopNote } from './utils/audioEngine';
import { KEY_MAP, getKeyXPercent } from './utils/keyboard';
import { useAutoPlay } from './hooks/useAutoPlay';
import { useRecorder } from './hooks/useRecorder';
import { FANFARES } from './utils/fanfare';
import { loadMidi } from './utils/midiLoader';
import type { VisualNote, NoteEvent } from './types';

const MIDI_ID = 'midi-upload';

export function App() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [visualNotes, setVisualNotes] = useState<VisualNote[]>([]);
  const [selectedId, setSelectedId] = useState(FANFARES[0].id);
  const [midiNotes, setMidiNotes] = useState<NoteEvent[] | null>(null);
  const [midiName, setMidiName] = useState('');

  const allFanfares = midiNotes
    ? [...FANFARES, { id: MIDI_ID, name: midiName, composer: 'MIDI', notes: midiNotes }]
    : FANFARES;

  const selectedFanfare = allFanfares.find(f => f.id === selectedId) ?? allFanfares[0];

  const handleMidiLoad = useCallback(async (file: File) => {
    const notes = await loadMidi(file);
    if (!notes.length) return;
    setMidiNotes(notes);
    setMidiName(file.name.replace(/\.mid(i)?$/i, ''));
    setSelectedId(MIDI_ID);
  }, []);

  const addVisualNote = useCallback((note: string) => {
    const key = KEY_MAP.get(note);
    const id = `${note}-${Date.now()}-${Math.random()}`;
    const vn: VisualNote = {
      id,
      note,
      isBlack: key?.isBlack ?? false,
      x: getKeyXPercent(note),
    };
    setVisualNotes(prev => [...prev.slice(-40), vn]);
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

  // Visual-only variants for auto-play (audio is scheduled precisely inside useAutoPlay)
  const handleVisualNoteOn = useCallback((note: string) => {
    setActiveKeys(prev => new Set(prev).add(note));
    addVisualNote(note);
  }, [addVisualNote]);

  const handleVisualNoteOff = useCallback((note: string) => {
    setActiveKeys(prev => {
      const next = new Set(prev);
      next.delete(note);
      return next;
    });
  }, []);

  const { isPlaying, start, stop } = useAutoPlay(handleVisualNoteOn, handleVisualNoteOff);
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
        fanfares={allFanfares}
        selectedId={selectedId}
        onSelectFanfare={setSelectedId}
        onMidiLoad={handleMidiLoad}
      />
      <PianoKeyboard
        activeKeys={activeKeys}
        onNoteOn={handleNoteOn}
        onNoteOff={handleNoteOff}
      />
    </div>
  );
}

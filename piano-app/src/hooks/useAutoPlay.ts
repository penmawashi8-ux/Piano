import { useCallback, useRef, useState } from 'react';
import type { NoteEvent } from '../types';
import { getAudioContext, scheduleNote } from '../utils/audioEngine';
import type { ScheduledNote } from '../utils/audioEngine';

// Schedule audio this many seconds ahead of playback position
const LOOKAHEAD_S = 0.25;
// How often (ms) to refill the schedule buffer
const TICK_MS = 50;

export function useAutoPlay(
  onNoteOn: (note: string) => void,
  onNoteOff: (note: string) => void,
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scheduled = useRef<ScheduledNote[]>([]);
  const tickRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef(false);

  const start = useCallback((events: NoteEvent[]) => {
    if (playingRef.current) return;
    playingRef.current = true;
    setIsPlaying(true);

    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();

    // Small offset so all scheduling happens before the first note fires
    const audioStart = ctx.currentTime + 0.05;
    let nextIdx = 0;
    let logicalTime = 0; // seconds into the piece for next unscheduled event

    const tick = () => {
      const now = ctx.currentTime;
      const horizon = (now - audioStart) + LOOKAHEAD_S;

      while (nextIdx < events.length && logicalTime <= horizon) {
        const { notes, duration, noteDuration } = events[nextIdx];
        const offDelay = noteDuration ?? duration * 0.82;
        const when = audioStart + logicalTime;
        const msFromNow = Math.max(0, (when - now) * 1000);

        notes.forEach(note => {
          // Audio: precise AudioContext scheduling
          scheduled.current.push(
            scheduleNote(note, ctx, when, when + offDelay),
          );
          // Visuals: setTimeout is approximate but acceptable for UI
          timers.current.push(
            setTimeout(() => onNoteOn(note), msFromNow),
            setTimeout(() => onNoteOff(note), msFromNow + offDelay * 1000),
          );
        });

        logicalTime += duration;
        nextIdx++;
      }

      if (nextIdx < events.length) {
        tickRef.current = setTimeout(tick, TICK_MS);
      } else {
        const endMs = Math.max(0, (audioStart + logicalTime - ctx.currentTime) * 1000);
        timers.current.push(
          setTimeout(() => {
            playingRef.current = false;
            setIsPlaying(false);
            scheduled.current = [];
          }, endMs),
        );
      }
    };

    tick();
  }, [onNoteOn, onNoteOff]);

  const stop = useCallback((events: NoteEvent[]) => {
    if (tickRef.current) { clearTimeout(tickRef.current); tickRef.current = null; }
    timers.current.forEach(clearTimeout);
    timers.current = [];
    scheduled.current.forEach(sn => sn.cancelEarly());
    scheduled.current = [];
    events.forEach(({ notes }) => notes.forEach(note => onNoteOff(note)));
    playingRef.current = false;
    setIsPlaying(false);
  }, [onNoteOff]);

  return { isPlaying, start, stop };
}

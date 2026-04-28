import { useCallback, useRef, useState } from 'react';
import { getAudioContext } from '../utils/audioEngine';

export function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef(0);

  const startRecording = useCallback(async () => {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') await ctx.resume();

    let stream: MediaStream;
    let mimeType: string;
    let ext: string;

    // Desktop: try screen+audio capture; mobile falls back to audio-only
    const canScreen = !!navigator.mediaDevices.getDisplayMedia;
    if (canScreen) {
      try {
        stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        mimeType = 'video/webm';
        ext = 'webm';
      } catch {
        // User cancelled screen picker — try audio-only
        try {
          const dest = ctx.createMediaStreamDestination();
          // Re-route future audio to the destination by temporarily connecting
          // the audio context destination node to the stream destination
          (ctx as AudioContext & { _recDest?: MediaStreamAudioDestinationNode })._recDest = dest;
          stream = dest.stream;
          mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
          ext = 'webm';
        } catch {
          return;
        }
      }
    } else {
      // Mobile: audio-only via AudioContext destination
      try {
        const dest = ctx.createMediaStreamDestination();
        (ctx as AudioContext & { _recDest?: MediaStreamAudioDestinationNode })._recDest = dest;
        stream = dest.stream;
        mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
        ext = mimeType.includes('ogg') ? 'ogg' : 'webm';
      } catch {
        return;
      }
    }

    chunksRef.current = [];
    const recorder = new MediaRecorder(stream, { mimeType });

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `piano-${Date.now()}.${ext}`;
      a.click();
      URL.revokeObjectURL(url);
      stream.getTracks().forEach(t => t.stop());
      delete (ctx as AudioContext & { _recDest?: MediaStreamAudioDestinationNode })._recDest;
    };

    recorder.start(200);
    recorderRef.current = recorder;
    startRef.current = Date.now();
    setIsRecording(true);
    setElapsed(0);
    timerRef.current = setInterval(
      () => setElapsed(Math.floor((Date.now() - startRef.current) / 1000)),
      1000,
    );

    if (stream.getVideoTracks().length > 0) {
      stream.getVideoTracks()[0].onended = () => stopRecording();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const stopRecording = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    recorderRef.current?.stop();
    recorderRef.current = null;
    setIsRecording(false);
    setElapsed(0);
  }, []);

  return { isRecording, elapsed, startRecording, stopRecording };
}

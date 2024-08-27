"use client";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#8954F6",
  progressColor: "white",
  cursorColor: "white",
  barWidth: 6,
  barRadius: 24,
  responsive: true,
  height: 60,
  normalize: true,
  partialRender: true,
});

export default function AudioPlayer() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const initializeWaveSurfer = async () => {
      if (!waveformRef.current || wavesurfer.current) return;

      wavesurfer.current = WaveSurfer.create(
        formWaveSurferOptions(waveformRef.current)
      );

      wavesurfer.current.load("/audio/sample-9s.mp3");
      let dur;

      wavesurfer.current.on("ready", () => {
        setCurrentTime(wavesurfer.current.getDuration());
        dur = wavesurfer.current.getDuration();
      });

      wavesurfer.current.on("audioprocess", () => {
        const time = wavesurfer.current.getCurrentTime();
        setCurrentTime(dur - time);
      });

      wavesurfer.current.on("finish", () => {
        setPlaying(false);
        setCurrentTime(0);
      });

      return () => {
        if (wavesurfer.current) {
          try {
            wavesurfer.current.destroy();
            wavesurfer.current = null;
          } catch (error) {
            console.error(
              "Error during WaveSurfer instance destruction:",
              error
            );
          }
        }
      };
    };

    initializeWaveSurfer();
  }, []);

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      setPlaying(!playing);
      wavesurfer.current.playPause();
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "00:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="bg-[#251E3E] px-4 py-2 rounded-2xl border border-[#8954F6]/20 w-full flex items-center justify-between gap-3">
      <div className="controls">
        <div onClick={handlePlayPause}>
          {!playing ? (
            <img src="/icons-dark/play-icon.png" className="w-full" />
          ) : (
            <img src="/icons-dark/pause-icon.png" className="w-full" />
          )}
        </div>
      </div>
      <div id="waveform" ref={waveformRef} className="w-full" />
      <div className="text-white">{formatTime(currentTime)}</div>
    </div>
  );
}

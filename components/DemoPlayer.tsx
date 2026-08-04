"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { WaveBars } from "./vignettes";

/**
 * Demo recording player. Drop audio files into public/audio/ with the
 * paths below; the players activate automatically. Fires
 * demo_audio_played once per recording per page view.
 */
export default function DemoPlayer({
  src,
  title,
  language,
}: {
  src: string;
  title: string;
  language: string;
}) {
  const fired = useRef(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="card card-lift p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        <span className="label text-faint">{language}</span>
      </div>
      <div className="mt-4 flex items-center justify-center rounded-xl border border-hairline bg-paper/70 py-4">
        <WaveBars playing={playing} />
      </div>
      <audio
        controls
        preload="none"
        className="mt-4 w-full"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onPlay={() => {
          setPlaying(true);
          if (fired.current) return;
          fired.current = true;
          track("demo_audio_played", { recording: language });
        }}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
    </div>
  );
}

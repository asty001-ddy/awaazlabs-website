"use client";

import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";
import { track } from "@/lib/analytics";
import { WaveBars } from "./vignettes";

/**
 * Demo recording player. Presence of the audio file is the switch
 * (public/audio/README.md): a HEAD probe decides between the live
 * player and a clean "coming soon" state. Never a broken control.
 * Fires demo_audio_played once per recording per page view.
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
  const [state, setState] = useState<"checking" | "ready" | "missing">(
    "checking",
  );

  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        const type = res.headers.get("content-type") ?? "";
        setState(res.ok && type.startsWith("audio") ? "ready" : "missing");
      })
      .catch(() => {
        if (!cancelled) setState("missing");
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className="card card-lift p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        <span className="label text-faint">{language}</span>
      </div>

      {state === "missing" ? (
        <div className="mt-4 flex min-h-[120px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-hairline bg-paper/70 py-6 text-center">
          <Clock size={18} className="text-faint" aria-hidden />
          <p className="text-sm font-medium text-ink">Recording coming soon</p>
          <p className="max-w-[36ch] text-[13px] leading-relaxed text-faint">
            This sample call is being prepared. The live demo line is on its
            way too.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-4 flex items-center justify-center rounded-xl border border-hairline bg-paper/70 py-4">
            <WaveBars playing={playing} />
          </div>
          <audio
            controls
            preload="none"
            className="mt-4 w-full"
            aria-disabled={state === "checking"}
            onError={() => setState("missing")}
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
        </>
      )}
    </div>
  );
}

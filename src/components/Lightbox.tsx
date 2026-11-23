import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Clip } from "@/data/site";
import { useBodyLock } from "@/lib/hooks";
import { IconClose, IconPlay } from "./Icons";

type Ctx = { open: (clip: Clip) => void };
const LightboxContext = createContext<Ctx>({ open: () => {} });

export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [clip, setClip] = useState<Clip | null>(null);
  useBodyLock(!!clip);

  const open = useCallback((c: Clip) => setClip(c), []);
  const close = useCallback(() => setClip(null), []);

  useEffect(() => {
    if (!clip) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clip, close]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {clip && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 px-4 py-8 backdrop-blur-sm md:px-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${clip.title} — video`}
          onClick={close}
        >
          <div className="fade-in relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <span className="label-xs text-gold">{clip.chapter}</span>
                <h3 className="mt-2 text-2xl md:text-[2rem]">{clip.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ash">{clip.summary}</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close video"
                className="group mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-line text-ash transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <IconClose className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[4px] border border-line bg-black">
              <video
                key={clip.id}
                src={clip.src}
                poster={clip.poster}
                controls
                autoPlay
                loop
                playsInline
                preload="auto"
                className="aspect-video w-full bg-black object-cover"
              />
              <div className="grain-layer pointer-events-none absolute inset-0" aria-hidden="true" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.6875rem] uppercase tracking-[0.2em] text-ash-dim">
              <span className="inline-flex items-center gap-2 text-gold">
                <IconPlay className="h-3 w-3" /> Now playing
              </span>
              <span>{clip.seconds}s loop</span>
              <span>{clip.hd ? "1080p" : "4K source"}</span>
              <span className="hidden sm:inline">Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

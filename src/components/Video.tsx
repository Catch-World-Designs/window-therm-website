import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import type { Clip } from "@/data/site";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";
import { IconPlay } from "./Icons";
import { useLightbox } from "./Lightbox";

type CineProps = {
  clip?: Clip;
  src?: string;
  poster?: string;
  className?: string;
  mediaClassName?: string;
  /** slow push-in, cinematic */
  zoom?: boolean;
  overlay?: "none" | "soft" | "deep" | "left" | "bottom";
  grain?: boolean;
  /** render a poster still instead of autoplaying (mobile default) */
  still?: boolean;
  /** keep the source attached — set false to release memory when off-stage */
  active?: boolean;
  /** play while true, pause while false */
  playing?: boolean;
  priority?: boolean;
  onClick?: () => void;
};

const overlays: Record<string, string> = {
  none: "",
  soft: "bg-ink/45",
  deep: "bg-gradient-to-b from-ink/85 via-ink/55 to-ink/90",
  left: "bg-gradient-to-r from-ink via-ink/70 to-ink/25",
  bottom: "bg-gradient-to-t from-ink via-ink/35 to-transparent",
};

/**
 * Ambient background video.
 * Lazy: preload="none" until near the viewport, plays only while visible and
 * on stage, and hands off to a poster still on phones and reduced motion.
 */
export function CineVideo({
  clip,
  src,
  poster,
  className,
  mediaClassName,
  zoom = false,
  overlay = "soft",
  grain = true,
  still,
  active = true,
  playing = true,
  priority = false,
  onClick,
}: CineProps) {
  const videoSrc = src ?? clip?.src;
  const posterSrc = poster ?? clip?.poster;
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [near, setNear] = useState(priority);
  const useStill = still ?? (isMobile || reduced);
  const loaded = priority || (near && active);

  useEffect(() => {
    if (priority || useStill) return;
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setNear(true);
            io.disconnect();
          }
        }),
      { rootMargin: "500px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [priority, useStill]);

  useEffect(() => {
    if (useStill || !loaded) return;
    const v = videoRef.current;
    const el = wrapRef.current;
    if (!v) return;
    const play = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    if (!playing) {
      if (!v.paused) v.pause();
      return;
    }
    if (!el || typeof IntersectionObserver === "undefined") {
      play();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) play();
          else if (!v.paused) v.pause();
        });
      },
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [useStill, loaded, playing]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative overflow-hidden bg-ink", className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {useStill ? (
        <img
          src={posterSrc}
          alt={clip?.summary ?? ""}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover", zoom && "ken-burns", mediaClassName)}
        />
      ) : (
        <video
          ref={videoRef}
          src={loaded ? videoSrc : undefined}
          poster={posterSrc}
          muted
          loop
          autoPlay
          playsInline
          preload={priority ? "auto" : "none"}
          aria-label={clip ? `${clip.title}: ${clip.summary}` : undefined}
          className={cn("h-full w-full object-cover", zoom && "ken-burns", mediaClassName)}
        />
      )}

      {overlay !== "none" && (
        <div className={cn("pointer-events-none absolute inset-0", overlays[overlay])} aria-hidden="true" />
      )}
      {grain && <div className="grain-layer absolute inset-0" aria-hidden="true" />}
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden="true" />
    </div>
  );
}

/* ------------------------- poster card w/ play ------------------------ */

export function VideoCard({
  clip,
  index,
  className,
  aspect = "aspect-[16/10]",
}: {
  clip: Clip;
  index?: number;
  className?: string;
  aspect?: string;
}) {
  const { open } = useLightbox();
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-[4px] border border-line bg-char transition-colors duration-500 hover:border-gold/45",
        className,
      )}
      onClick={() => open(clip)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(clip);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${clip.title}`}
    >
      <div className={cn("relative w-full overflow-hidden", aspect)}>
        <img
          src={clip.poster}
          alt={clip.summary}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-[1.06]",
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
        <div className="grain-layer absolute inset-0" aria-hidden="true" />

        <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/0 transition-all duration-500 group-hover:border-gold/80" />
        <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/0 transition-all duration-500 group-hover:border-gold/80" />

        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 bg-ink/35 backdrop-blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/15">
          <IconPlay className="ml-0.5 h-4 w-4 text-bone transition-colors duration-500 group-hover:text-gold" />
        </span>

        {typeof index === "number" && (
          <span className="num-xl absolute right-4 top-4 text-2xl">{String(index).padStart(2, "0")}</span>
        )}

        <span className="label-xs absolute bottom-4 left-4 inline-flex items-center gap-2 text-gold/90">
          <span className="rec-dot h-1.5 w-1.5 rounded-full bg-gold" />
          {clip.chapter}
        </span>
        <span className="label-xs absolute bottom-4 right-4 text-ash-dim">{clip.seconds}s</span>
      </div>

      <figcaption className="border-t border-line px-5 py-5">
        <h3 className="text-xl transition-colors duration-500 group-hover:text-gold">{clip.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ash">{clip.summary}</p>
      </figcaption>
    </figure>
  );
}

import { useCallback, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { images } from "@/data/site";
import { IconDrag } from "./Icons";
import { Reveal } from "./Primitives";

/**
 * Before / after: the same window, without and with a thermal insert.
 * Cold side carries an icy cast, warm side a soft interior light.
 */
export function BeforeAfter({ className }: { className?: string }) {
  const [pos, setPos] = useState(52);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const fromClientX = useCallback((clientX: number) => {
    const box = boxRef.current;
    if (!box) return;
    const r = box.getBoundingClientRect();
    setPos(Math.min(98, Math.max(2, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={boxRef}
        className="group relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-[4px] border border-line bg-black md:aspect-[16/9]"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          fromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && fromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* AFTER — warm interior light */}
        <img
          src={images.windowWithoutInsertLarge}
          alt="Window fitted with a Window Therm thermal insert"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(1.05) contrast(1.05) brightness(1.06) sepia(0.16)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(75% 65% at 62% 45%, rgba(201,169,110,0.22), transparent 70%), linear-gradient(to top, rgba(10,10,11,0.7), transparent 55%)",
          }}
          aria-hidden="true"
        />

        {/* BEFORE — cold, frost cast */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img
            src={images.windowWithoutInsertLarge}
            alt="A window without thermal inserts"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "saturate(0.42) contrast(1.12) brightness(0.72) hue-rotate(-12deg)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 80% at 30% 40%, rgba(143,184,216,0.28), transparent 62%), linear-gradient(to top, rgba(10,10,11,0.86), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="grain-layer absolute inset-0" aria-hidden="true" />
        </div>

        {/* handle */}
        <div
          className="absolute inset-y-0 z-20 w-px bg-gold/85"
          style={{ left: `${pos}%` }}
          role="slider"
          aria-label="Compare window without and with a thermal insert"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
            if (e.key === "Home") setPos(2);
            if (e.key === "End") setPos(98);
          }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink/80 text-gold transition-transform duration-300 group-hover:scale-110">
            <IconDrag className="h-4 w-4" />
          </span>
        </div>

        {/* labels */}
        <Reveal className="absolute left-3 top-3 z-10 sm:left-5 sm:top-5">
          <span className="label-xs inline-flex items-center gap-2 border border-frost/40 bg-ink/70 px-2 py-1.5 text-[0.6rem] text-frost sm:px-3 sm:py-2 sm:text-[length:inherit] backdrop-blur-[2px]">
            Without insert
          </span>
        </Reveal>
        <Reveal delay={80} className="absolute right-3 top-3 z-10 sm:right-5 sm:top-5">
          <span className="label-xs inline-flex items-center gap-2 border border-gold/40 bg-ink/70 px-2 py-1.5 text-[0.6rem] text-gold sm:px-3 sm:py-2 sm:text-[length:inherit] backdrop-blur-[2px]">
            <span className="sm:hidden">With insert</span>
            <span className="hidden sm:inline">With Window Therm</span>
          </span>
        </Reveal>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ash-dim">
        Drag the gold line to compare. Left: a window without thermal inserts. Right: the same window with a
        Window Therm insert in place.
      </p>
    </div>
  );
}

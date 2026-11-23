import { cn } from "@/utils/cn";
import type { Clip } from "@/data/site";
import { useIsMobile, useScrollProgress } from "@/lib/hooks";
import { CineVideo } from "./Video";
import { Eyebrow, Reveal } from "./Primitives";

export type Chapter = {
  clip: Clip;
  label: string;
  title: string;
  body: string;
  side?: "left" | "right";
};

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/**
 * Scroll driven film: chapters cross-fade as the visitor scrolls, each clip
 * pushing in slowly while its line of copy holds the frame. Only the chapter
 * on stage (and its neighbours) keep a video source attached.
 */
export function ScrollStory({
  chapters,
  className,
  height = "360vh",
}: {
  chapters: Chapter[];
  className?: string;
  height?: string;
}) {
  const isMobile = useIsMobile();
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const n = chapters.length;
  const stage = Math.min(n - 1, Math.max(0, Math.floor(progress * n)));

  if (isMobile) {
    return (
      <div className={cn("space-y-16", className)}>
        {chapters.map((c, i) => (
          <Reveal key={c.clip.id}>
            <span className="num-xl mb-6 block text-[3.5rem]">{String(i + 1).padStart(2, "0")}</span>
            <CineVideo
              clip={c.clip}
              className="aspect-[4/3] w-full rounded-[4px] border border-line"
              overlay="bottom"
            />
            <div className="mt-6">
              <Eyebrow>{c.label}</Eyebrow>
              <h3 className="mt-4 text-[1.7rem] leading-tight">{c.title}</h3>
              <p className="mt-4 max-w-lg text-[0.95rem] leading-[1.85] text-ash">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)} style={{ height }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {chapters.map((c, i) => {
          const center = (i + 0.5) / n;
          const d = Math.abs(progress - center) / (0.5 / n);
          const opacity = clamp01((1.45 - d) / 0.85);
          const local = clamp01((progress - i / n) * n);
          const scale = 1.04 + local * 0.13;
          const onStage = d < 0.9;
          const near = Math.abs(i - stage) <= 1;
          const textOpacity = clamp01((1.1 - d) / 0.6);

          return (
            <div
              key={c.clip.id}
              className="absolute inset-0"
              style={{ opacity, visibility: opacity < 0.01 ? "hidden" : "visible" }}
              aria-hidden={!onStage}
            >
              <CineVideo
                clip={c.clip}
                overlay="deep"
                priority={i === 0}
                active={near}
                playing={onStage}
                zoom={false}
                className="h-full w-full"
                mediaClassName="transition-transform duration-[900ms] ease-out"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ transform: `scale(${scale})` }}
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_45%,rgba(10,10,11,0.55)_100%)]" />
              </div>

              <div
                className={cn(
                  "absolute inset-0 flex items-center",
                  c.side === "right" ? "justify-end" : "justify-start",
                )}
              >
                <div className={cn("shell w-full", c.side === "right" && "text-right")}>
                  <div
                    className={cn("max-w-xl", c.side === "right" && "ml-auto")}
                    style={{
                      opacity: textOpacity,
                      transform: `translateY(${(1 - textOpacity) * 28}px)`,
                    }}
                  >
                    <span className="label-xs inline-flex items-center gap-3 text-gold">
                      <span className="rec-dot h-1.5 w-1.5 rounded-full bg-gold" />
                      {String(i + 1).padStart(2, "0")} — {c.label}
                    </span>
                    <h3 className="mt-5 text-[2.3rem] leading-[1.08] text-balance text-bone drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] lg:text-[3.5rem]">
                      {c.title}
                    </h3>
                    <p className="mt-5 max-w-md text-[1rem] leading-[1.85] text-bone/78 drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                      {c.body}
                    </p>
                    <div className={cn("mt-8 h-px w-40 bg-gold/45", c.side === "right" && "ml-auto")} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* chapter rail */}
        <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {chapters.map((c, i) => (
            <span
              key={c.clip.id}
              className={cn(
                "h-px transition-all duration-500",
                stage === i ? "w-14 bg-gold" : "w-6 bg-bone/25",
              )}
            />
          ))}
        </div>
        <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-4 lg:flex">
          <span className="label-xs text-ash-dim">{chapters[stage].label}</span>
          <span className="relative block h-px w-20 overflow-hidden bg-bone/20">
            <span
              className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </span>
          <span className="label-xs text-bone/60">
            {String(stage + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

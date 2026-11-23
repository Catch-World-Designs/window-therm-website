import { useMemo, useState } from "react";
import { clipById, clips, type Clip } from "@/data/site";
import { VideoCard } from "@/components/Video";
import { PageHero } from "@/components/Layout";
import { Btn, Eyebrow, Reveal, SectionHead } from "@/components/Primitives";
import { IconPlay } from "@/components/Icons";
import { cn } from "@/utils/cn";

const filters = ["All", "The Problem", "The Solution"] as const;

export default function Videos() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [current, setCurrent] = useState<Clip>(clipById("frost-glass"));

  const list = useMemo(
    () => (filter === "All" ? clips : clips.filter((c) => c.chapter === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        num="04"
        eyebrow="Videos"
        title="Cold glass, warm rooms."
        lede="Films of the season outside and the room inside. Each one carries a written summary, so the story reads with the sound off."
        clip={clipById("hearth")}
      />

      {/* ------------------------------ player ------------------------------ */}
      <section className="border-b border-line bg-ink py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="relative overflow-hidden rounded-[4px] border border-line bg-black">
                  <video
                    key={current.id}
                    src={current.src}
                    poster={current.poster}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full bg-black object-cover"
                    aria-label={`${current.title}: ${current.summary}`}
                  />
                  <div className="grain-layer pointer-events-none absolute inset-0" aria-hidden="true" />
                </div>
              </Reveal>
              <Reveal delay={90}>
                <div className="mt-6 flex flex-wrap items-start justify-between gap-6 border-t border-line pt-6">
                  <div>
                    <Eyebrow>{current.chapter}</Eyebrow>
                    <h2 className="mt-4 text-[1.9rem] leading-tight md:text-[2.4rem]">{current.title}</h2>
                    <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.85] text-ash">{current.summary}</p>
                  </div>
                  <div className="text-right">
                    <span className="label-xs text-ash-dim">Loop</span>
                    <p className="mt-2 font-display text-2xl font-light text-gold">
                      00:{String(current.seconds).padStart(2, "0")}
                    </p>
                    <p className="label-xs mt-2 text-ash-dim">{current.hd ? "1080p" : "4K source"}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={120}>
                <span className="label-xs text-gold">Playlist</span>
                <ul className="mt-5 max-h-[30rem] space-y-px overflow-y-auto border border-line bg-char lg:max-h-[34rem]">
                  {clips.map((c, i) => {
                    const active = c.id === current.id;
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => setCurrent(c)}
                          className={cn(
                            "group flex w-full items-center gap-4 border-b border-line-soft px-4 py-3.5 text-left transition-colors duration-400 last:border-0",
                            active ? "bg-char2" : "hover:bg-char2/70",
                          )}
                          aria-current={active}
                        >
                          <span className={cn("num-xl text-base", active && "text-gold")}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <img
                            src={c.poster}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="h-11 w-16 shrink-0 rounded-[2px] border border-line object-cover opacity-80 transition-opacity group-hover:opacity-100"
                          />
                          <span className="min-w-0 flex-1">
                            <span
                              className={cn(
                                "block truncate text-sm transition-colors",
                                active ? "text-gold" : "text-bone group-hover:text-gold",
                              )}
                            >
                              {c.title}
                            </span>
                            <span className="label-xs mt-1 block text-ash-dim">{c.chapter}</span>
                          </span>
                          {active && <span className="rec-dot h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-ash-dim">
                  On phones we load a still frame first and start the film when you press play, to keep the page
                  light.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ gallery ----------------------------- */}
      <section className="border-b border-line bg-char py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead num="02" eyebrow="Gallery" title="Every film, side by side." className="max-w-xl" />
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={cn(
                      "label-xs min-h-11 rounded-[4px] border px-4 py-3 transition-all duration-400",
                      filter === f
                        ? "border-gold bg-gold text-ink"
                        : "border-line text-ash hover:border-gold/60 hover:text-gold",
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 90}>
                <VideoCard clip={c} index={i + 1} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-14 flex flex-col items-start gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
              <p className="max-w-lg text-[0.95rem] leading-[1.85] text-ash">
                Press any tile to open the film full screen in a dark viewer.
                <span className="mt-2 flex items-center gap-2 text-gold">
                  <IconPlay className="h-3 w-3" /> {list.length} films in this view
                </span>
              </p>
              <Btn to="/contact" variant="solid" arrow>
                Start Free Quote
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

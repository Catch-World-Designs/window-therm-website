import { business, clipById, services, steps } from "@/data/site";
import { CineVideo } from "@/components/Video";
import { useLightbox } from "@/components/Lightbox";
import { PageHero } from "@/components/Layout";
import { Btn, Eyebrow, GoldRule, Reveal, SectionHead } from "@/components/Primitives";
import { IconArrow, IconPlay } from "@/components/Icons";
import { cn } from "@/utils/cn";

const stepClips = ["the-fit", "seal", "warm-room"];

export default function HowItWorks() {
  const { open } = useLightbox();
  const mainClip = clipById("the-fit");

  return (
    <>
      <PageHero
        num="02"
        eyebrow="How It Works"
        title="Three steps, from measurement to a sealed frame."
        lede="We measure your window frame precisely, build the insert on our patented double-sided frame system, and leave you with an insert that is built to last."
        clip={clipById("snow-roof")}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn onClick={() => open(mainClip)} className="sweep">
            <IconPlay className="relative z-10 h-3 w-3" />
            Watch Video
          </Btn>
          <Btn to="/contact" variant="ghost" arrow>
            Start Free Quote
          </Btn>
        </div>
      </PageHero>

      {/* --------------------------- steps + film --------------------------- */}
      <section className="border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="group relative overflow-hidden rounded-[4px] border border-line">
                    <CineVideo
                      clip={mainClip}
                      className="aspect-[4/5] w-full cursor-pointer lg:aspect-[3/4]"
                      overlay="bottom"
                      onClick={() => open(mainClip)}
                    />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 bg-ink/40 backdrop-blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:border-gold">
                      <IconPlay className="ml-0.5 h-4 w-4 text-bone" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line/50 bg-ink/75 px-5 py-4 backdrop-blur-[2px]">
                      <span className="label-xs text-gold">{mainClip.title}</span>
                      <span className="label-xs text-ash-dim">00:{String(mainClip.seconds).padStart(2, "0")}</span>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-6 text-sm leading-relaxed text-ash">
                    {mainClip.summary} Filmed in close detail — the moment a window is seated and closed tight.
                  </p>
                  <Btn to="/videos" variant="ghost" size="sm" className="mt-6" arrow>
                    All videos
                  </Btn>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHead num="01" eyebrow="The Process" title="Installation, simplified." />
              <ol className="mt-14 space-y-16">
                {steps.map((s, i) => {
                  const clip = clipById(stepClips[i]);
                  return (
                    <Reveal as="li" key={s.n} delay={i * 80}>
                      <div className="group grid gap-8 md:grid-cols-12 md:items-center">
                        <div className="md:col-span-7">
                          <div className="flex items-baseline gap-5">
                            <span className="num-xl text-[3.2rem] transition-all duration-500 group-hover:text-gold">
                              0{i + 1}
                            </span>
                            <span className="label-xs text-gold">{s.n}</span>
                          </div>
                          <h3 className="mt-4 text-[1.8rem] leading-snug md:text-[2.2rem]">{s.title}</h3>
                          <p className="mt-5 max-w-xl text-[0.97rem] leading-[1.9] text-ash">{s.body}</p>
                          <div className="mt-7 h-px w-full bg-line transition-colors duration-500 group-hover:bg-gold/40" />
                        </div>
                        <div className="md:col-span-5">
                          <div
                            className="relative cursor-pointer overflow-hidden rounded-[4px] border border-line"
                            onClick={() => open(clip)}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(clip)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Play video: ${clip.title}`}
                          >
                            <img
                              src={clip.poster}
                              alt={clip.summary}
                              loading="lazy"
                              decoding="async"
                              className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 label-xs text-gold">
                              <IconPlay className="h-3 w-3" />
                              {clip.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- patented frame -------------------------- */}
      <section className="relative overflow-hidden border-b border-line bg-char">
        <CineVideo clip={clipById("frost-glass")} overlay="deep" zoom className="absolute inset-0 h-full w-full" />
        <div className="relative shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>The Detail That Matters</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 text-[2.2rem] leading-[1.06] text-balance text-bone md:text-[3.4rem]">
                  A double-sided frame, cut to your opening.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-[1rem] leading-[1.9] text-bone/75">
                  Every insert is precision-cut to fit your existing window frame perfectly, eliminating gaps and
                  ensuring a flush, high-performance thermal barrier. The double-sided frame provides a superior
                  seal, preventing air infiltration and maximizing the thermal efficiency of your building envelope.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
                  {[
                    { k: "Sizing", v: "100% custom" },
                    { k: "Frame", v: "Double-sided, patented" },
                    { k: "Build", v: "High-grade materials" },
                  ].map((item) => (
                    <div key={item.k} className="bg-ink/80 p-7 backdrop-blur-[2px]">
                      <span className="label-xs text-gold">{item.k}</span>
                      <p className="mt-4 font-display text-[1.35rem] font-light leading-snug text-bone">{item.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- who does what --------------------------- */}
      <section className="border-b border-line bg-ink py-20 md:py-28">
        <div className="shell">
          <SectionHead
            num="03"
            eyebrow="Expert Services"
            title="What our team handles for you."
            lede="From custom sizing to full installation, our team provides the technical precision and artisanal care your home deserves."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group flex h-full flex-col bg-char p-8 transition-colors duration-500 hover:bg-char2">
                  <span className="num-xl text-[2.4rem]">{s.n}</span>
                  <h3 className="mt-6 text-xl transition-colors duration-500 group-hover:text-gold">{s.title}</h3>
                  <p className="mt-4 flex-1 text-[0.92rem] leading-[1.85] text-ash">{s.body}</p>
                  <a
                    href="#/services"
                    className="mt-7 inline-flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold"
                  >
                    Service detail
                    <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col gap-6 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
              <div>
                <GoldRule className="mb-6 max-w-xs" />
                <p className={cn("max-w-md text-[0.95rem] leading-[1.85] text-ash")}>
                  Ready to begin? Send your window details and we will take it from measurement onward.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Btn href={business.phoneHref} variant="ghost">
                  Call {business.phone}
                </Btn>
                <Btn to="/contact" variant="solid" arrow>
                  Start Free Quote
                </Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

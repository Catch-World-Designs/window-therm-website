import { clipById, business, edge, edgeIndex, faq, hero, services, servicesIntro, steps, valueProps } from "@/data/site";
import { CineVideo, VideoCard } from "@/components/Video";
import { useLightbox } from "@/components/Lightbox";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ScrollStory, type Chapter } from "@/components/ScrollStory";
import { Btn, Eyebrow, GoldRule, Reveal, SectionHead } from "@/components/Primitives";
import { IconArrow, IconPhone, IconPlay, valueIcons } from "@/components/Icons";
import { cn } from "@/utils/cn";

const story: Chapter[] = [
  {
    clip: clipById("snow-storm"),
    label: "The Cold",
    title: "Winter presses on the glass all season.",
    body: "Heat loss begins at the window. Cold air moves through every gap it can find in the frame.",
    side: "left",
  },
  {
    clip: clipById("frost-glass"),
    label: "The Gap",
    title: "Frost forms where the seal gives way.",
    body: "Air infiltration is where comfort leaves a room, and where heating bills quietly grow.",
    side: "right",
  },
  {
    clip: clipById("the-fit"),
    label: "The Measure",
    title: "Every insert is cut to your frame.",
    body: "We measure your window frame precisely, so the insert fits the opening it was made for.",
    side: "left",
  },
  {
    clip: clipById("summer-light"),
    label: "The Result",
    title: "Warm in winter. Cool in summer.",
    body: "The same window now holds its temperature, and the room stays comfortable through the year.",
    side: "right",
  },
];

export default function Home() {
  const { open } = useLightbox();
  const heroClip = clipById("snow-arch");
  const filmClip = clipById("the-fit");

  return (
    <>
      {/* ------------------------------ hero ------------------------------ */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <CineVideo clip={heroClip} overlay="deep" priority zoom className="absolute inset-0 h-full w-full" />

        <div className="relative shell flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="label-xs inline-flex items-center gap-3 text-gold">
                  <span className="rec-dot h-1.5 w-1.5 rounded-full bg-gold" />
                  {hero.eyebrow} — <span className="whitespace-nowrap">{business.area}</span>
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-7 max-w-4xl text-[3.1rem] leading-[0.98] text-balance text-bone md:text-[5.6rem] lg:text-[6.6rem]">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 max-w-xl text-[1.02rem] leading-[1.85] text-bone/72 md:text-[1.1rem]">
                  {hero.sub}
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-11 flex flex-wrap items-center gap-4">
                  <Btn onClick={() => open(filmClip)} size="lg" className="sweep">
                    <IconPlay className="relative z-10 h-3 w-3" />
                    Watch Video
                  </Btn>
                  <Btn to="/contact" variant="ghost" size="lg" arrow>
                    {hero.ctaPrimary}
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={340}>
                <div className="border-l border-line pl-6 lg:pl-8">
                  <a
                    href={business.phoneHref}
                    className="group flex items-center gap-3 text-bone transition-colors hover:text-gold"
                  >
                    <IconPhone className="h-4 w-4 text-gold" />
                    <span className="font-display text-2xl font-light tracking-wide">{business.phone}</span>
                  </a>
                  <p className="mt-4 text-sm leading-relaxed text-ash">
                    {business.street}, {business.city}, {business.state} {business.zip}
                  </p>
                  <div className="mt-6 h-px w-full bg-line" />
                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-ash-dim">
                    Custom sizing · Patented frame · Full installation
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={420}>
            <div className="mt-14 hidden items-center gap-6 md:flex">
              <span className="label-xs text-ash-dim">Scroll</span>
              <span className="relative block h-px w-24 overflow-hidden bg-bone/20">
                <span className="absolute inset-y-0 left-0 w-1/3 bg-gold drift" />
              </span>
              <span className="label-xs text-ash-dim">The story</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- ticker strip -------------------------- */}
      <div className="relative overflow-hidden border-b border-line bg-char py-4">
        <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-10">
              {[
                "Thermal Window Inserts",
                "Patented Double-Sided Frame",
                "100% Custom Sizing",
                business.area,
                "Superior Durability",
                "Installation Simplified",
              ].map((t) => (
                <span key={t + k} className="label-xs flex items-center gap-10 text-ash-dim">
                  {t}
                  <span className="h-1 w-1 rotate-45 bg-gold/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------- value props --------------------------- */}
      <section className="relative border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead
                num="01"
                eyebrow="The Approach"
                title="Four reasons to keep the window you have."
                lede="Replacement is not the only way to fix a cold window. An insert is built around the frame already in your wall."
              />
            </div>

            <div className="lg:col-span-8">
              <ul>
                {valueProps.map((v, i) => {
                  const Icon = valueIcons[v.icon];
                  return (
                    <Reveal as="li" key={v.id} delay={i * 90}>
                      <div className="group grid grid-cols-[auto_1fr] items-start gap-6 border-b border-line py-8 transition-colors duration-500 hover:border-gold/45 md:grid-cols-[5rem_auto_1fr] md:gap-8">
                        <span className="num-xl hidden text-2xl md:block">0{i + 1}</span>
                        <span className="flex h-14 w-14 items-center justify-center rounded-[4px] border border-line text-gold transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/8">
                          <Icon className="h-6 w-6 transition-transform duration-700 group-hover:scale-110" />
                        </span>
                        <div>
                          <h3 className="text-[1.45rem] leading-snug transition-colors duration-500 group-hover:text-gold md:text-[1.7rem]">
                            {v.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.85] text-ash">{v.body}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- scroll story -------------------------- */}
      <section className="relative bg-ink">
        <ScrollStory chapters={story} />
      </section>

      {/* ------------------------------ the edge --------------------------- */}
      <section className="relative border-y border-line bg-char py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHead
            num="02"
            eyebrow="Our Technology"
            title="The Window Therm Edge"
            lede="Four pillars behind every insert we build. Three of them, in detail."
          />

          <Reveal delay={120}>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:grid-cols-4">
              {edgeIndex.map((e) => (
                <div
                  key={e.n}
                  className="group relative bg-char px-6 py-8 transition-colors duration-500 hover:bg-char2"
                >
                  <span className="num-xl block text-[2.6rem] transition-all duration-500 group-hover:text-gold">
                    {e.n}
                  </span>
                  <h3 className="mt-5 text-lg transition-colors duration-500 group-hover:text-gold">{e.title}</h3>
                  <span className="mt-5 block h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-16" />
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-20 space-y-20 md:space-y-28">
            {edge.map((e, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={e.n} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <Reveal className={cn("lg:col-span-6", flip && "lg:order-2")}>
                    <div className="group relative overflow-hidden rounded-[4px] border border-line">
                      <img
                        src={e.image}
                        alt={`${e.title} — Window Therm thermal window insert`}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05] lg:aspect-[5/4]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                      <div className="grain-layer absolute inset-0" aria-hidden="true" />
                      <span className="num-xl absolute left-5 top-5 text-[2.4rem]">{e.n}</span>
                    </div>
                  </Reveal>
                  <div className={cn("lg:col-span-6", flip && "lg:order-1")}>
                    <Reveal delay={100}>
                      <Eyebrow>The Window Therm Edge</Eyebrow>
                      <h3 className="mt-5 text-[2rem] leading-tight md:text-[2.8rem]">{e.title}</h3>
                      <p className="mt-6 max-w-lg text-[0.98rem] leading-[1.9] text-ash">{e.body}</p>
                      <div className="mt-8 h-px w-24 bg-gold/50" />
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------- how it works -------------------------- */}
      <section className="relative border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHead num="03" eyebrow="How It Works" title="Measured, framed, built to last." />
                <Reveal delay={140}>
                  <div className="group relative mt-10 overflow-hidden rounded-[4px] border border-line">
                    <CineVideo
                      clip={clipById("the-fit")}
                      className="aspect-[4/5] w-full cursor-pointer lg:aspect-[3/4]"
                      overlay="bottom"
                      onClick={() => open(clipById("the-fit"))}
                    />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 bg-ink/40 backdrop-blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:border-gold">
                      <IconPlay className="ml-0.5 h-4 w-4 text-bone" />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 border-t border-line/60 bg-ink/70 px-5 py-4 backdrop-blur-[2px]">
                      <span className="label-xs text-gold">The Frame, Up Close</span>
                      <span className="label-xs text-ash-dim">00:24</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-px">
                {steps.map((s, i) => (
                  <Reveal as="li" key={s.n} delay={i * 110}>
                    <div className="group relative border border-line bg-char p-7 transition-colors duration-500 hover:border-gold/45 md:p-10">
                      <div className="flex items-start gap-6">
                        <span className="num-xl text-[3rem] transition-all duration-500 group-hover:text-gold">
                          0{i + 1}
                        </span>
                        <div>
                          <span className="label-xs text-gold">{s.n}</span>
                          <h3 className="mt-3 text-[1.6rem] leading-snug md:text-[2rem]">{s.title}</h3>
                          <p className="mt-4 max-w-xl text-[0.96rem] leading-[1.9] text-ash">{s.body}</p>
                        </div>
                      </div>
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={120}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Btn to="/how-it-works" arrow>
                    See the full process
                  </Btn>
                  <Btn to="/contact" variant="ghost">
                    Start Free Quote
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- before / after ------------------------ */}
      <section className="relative border-b border-line bg-char2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHead
                num="04"
                eyebrow="See the Difference"
                title="The same window, before and after."
                lede="A window without thermal inserts lets the season in. An insert sits inside the existing frame and closes that gap."
              />
              <Reveal delay={160}>
                <Btn to="/benefits" className="mt-10" arrow>
                  Read the benefits
                </Btn>
              </Reveal>
            </div>
            <Reveal delay={100} className="lg:col-span-8">
              <BeforeAfter />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- expert services ----------------------- */}
      <section className="relative border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHead num="05" eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} lede={servicesIntro.body} />

          <div className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <article className="group relative flex h-full flex-col bg-char transition-colors duration-500 hover:bg-char2">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover grayscale-[0.35] transition-all duration-[1400ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-char via-char/20 to-transparent" />
                    <span className="num-xl absolute right-5 top-5 text-[2.2rem]">{s.n}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[1.4rem] leading-snug transition-colors duration-500 group-hover:text-gold">
                      {s.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.92rem] leading-[1.85] text-ash">{s.body}</p>
                    <span className="mt-7 inline-flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold">
                      Enquire
                      <IconArrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                  <a href="#/contact" className="absolute inset-0" aria-label={`Enquire about ${s.title}`} />
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Btn to="/services" arrow>
                All services
              </Btn>
              <span className="text-sm text-ash">
                or call{" "}
                <a href={business.phoneHref} className="text-bone underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold">
                  {business.phone}
                </a>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- gallery ---------------------------- */}
      <section className="relative border-b border-line bg-char py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead
              num="06"
              eyebrow="Video Gallery"
              title="Cold glass, warm rooms."
              className="max-w-2xl"
            />
            <Reveal delay={120}>
              <Btn to="/videos" variant="ghost" arrow>
                Full gallery
              </Btn>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {["frost-glass", "the-fit", "warm-room"].map((id, i) => (
              <Reveal key={id} delay={i * 110}>
                <VideoCard clip={clipById(id)} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- faq preview --------------------------- */}
      <section className="relative border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHead
                num="07"
                eyebrow="Questions"
                title="Answered before you have to ask."
                lede="Sizing, the patented frame, how long an insert lasts and what we handle for you."
              />
              <Reveal delay={120}>
                <Btn to="/faq" className="mt-10" arrow>
                  All questions
                </Btn>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="border-t border-line">
                {faq.slice(0, 4).map((item, i) => (
                  <Reveal as="li" key={item.q} delay={i * 80}>
                    <div className="group grid gap-4 border-b border-line py-7 transition-colors duration-500 hover:border-gold/45 md:grid-cols-[3rem_1fr] md:gap-8">
                      <span className="num-xl text-lg">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-[1.25rem] leading-snug transition-colors duration-500 group-hover:text-gold md:text-[1.5rem]">
                          {item.q}
                        </h3>
                        <p className="mt-3 max-w-2xl text-[0.94rem] leading-[1.9] text-ash">{item.a}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- CTA ------------------------------- */}
      <section className="relative overflow-hidden bg-ink">
        <CineVideo clip={clipById("quiet-night")} overlay="deep" zoom className="absolute inset-0 h-full w-full" />
        <div className="relative shell py-24 md:py-36">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Next Step</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 text-[2.4rem] leading-[1.04] text-balance text-bone md:text-[4rem]">
                  Tell us about your windows. We will take it from there.
                </h2>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-7 max-w-lg text-[1rem] leading-[1.85] text-bone/72">
                  Start a free quote or book a consultation. Measurement, custom sizing and installation are all
                  handled by our team.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={220}>
                <div className="border border-line bg-ink/70 p-8 backdrop-blur-[3px]">
                  <GoldRule className="mb-8" />
                  <div className="space-y-6">
                    <a href={business.phoneHref} className="group block">
                      <span className="label-xs text-ash-dim">Call</span>
                      <span className="mt-2 block font-display text-[1.9rem] font-light text-bone transition-colors group-hover:text-gold">
                        {business.phone}
                      </span>
                    </a>
                    <a href={`mailto:${business.email}`} className="group block">
                      <span className="label-xs text-ash-dim">Email</span>
                      <span className="mt-2 block text-lg text-bone transition-colors group-hover:text-gold">
                        {business.email}
                      </span>
                    </a>
                    <div>
                      <span className="label-xs text-ash-dim">Visit Us</span>
                      <p className="mt-2 text-lg leading-relaxed text-bone">
                        {business.street}
                        <br />
                        {business.city}, {business.state} {business.zip}
                      </p>
                    </div>
                  </div>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Btn to="/contact" variant="solid" arrow>
                      Start Free Quote
                    </Btn>
                    <Btn to="/contact">{hero.ctaPrimary}</Btn>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

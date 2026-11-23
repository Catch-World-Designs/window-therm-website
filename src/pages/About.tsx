import { business, clipById, edge, edgeIndex, hero, images, services, servicesIntro, valueProps } from "@/data/site";
import { CineVideo } from "@/components/Video";
import { useLightbox } from "@/components/Lightbox";
import { PageHero } from "@/components/Layout";
import { Btn, GoldRule, Reveal, SectionHead } from "@/components/Primitives";
import { IconMail, IconPhone, IconPin, IconPlay, valueIcons } from "@/components/Icons";
import { cn } from "@/utils/cn";

export default function About() {
  const { open } = useLightbox();

  return (
    <>
      <PageHero
        num="06"
        eyebrow="About"
        title={business.name}
        lede={`${hero.headline} ${hero.sub} Custom thermal window inserts, built to your window's dimensions and installed by our own team across ${business.area}.`}
        clip={clipById("summer-light")}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn to="/contact" variant="solid" arrow>
            Get a Consultation
          </Btn>
          <Btn href={business.phoneHref} variant="ghost">
            <IconPhone className="relative z-10 h-3.5 w-3.5" />
            {business.phone}
          </Btn>
        </div>
      </PageHero>

      {/* --------------------------- the approach -------------------------- */}
      <section className="border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHead
                num="01"
                eyebrow="The Approach"
                title="A tailored panel for a window that already exists."
                lede="Our belief in a tailored approach means every panel is precisely engineered to your window's dimensions, without compromising on aesthetics."
              />
              <Reveal delay={140}>
                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line">
                  <div className="bg-char p-6">
                    <span className="label-xs text-gold">Frame</span>
                    <p className="mt-3 font-display text-[1.2rem] font-light leading-snug text-bone">
                      Double-sided, patented
                    </p>
                  </div>
                  <div className="bg-char p-6">
                    <span className="label-xs text-gold">Sizing</span>
                    <p className="mt-3 font-display text-[1.2rem] font-light leading-snug text-bone">
                      100% custom
                    </p>
                  </div>
                  <div className="bg-char p-6">
                    <span className="label-xs text-gold">Service area</span>
                    <p className="mt-3 font-display text-[1.2rem] font-light leading-snug text-bone">
                      {business.area}
                    </p>
                  </div>
                  <div className="bg-char p-6">
                    <span className="label-xs text-gold">Installation</span>
                    <p className="mt-3 font-display text-[1.2rem] font-light leading-snug text-bone">
                      Quick, minimal disruption
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <div className="group relative overflow-hidden rounded-[4px] border border-line">
                  <CineVideo
                    clip={clipById("hearth")}
                    className="aspect-[16/10] w-full cursor-pointer"
                    overlay="bottom"
                    onClick={() => open(clipById("hearth"))}
                  />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 bg-ink/40 backdrop-blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:border-gold">
                    <IconPlay className="ml-0.5 h-4 w-4 text-bone" />
                  </span>
                </div>
              </Reveal>

              <ul className="mt-12">
                {valueProps.map((v, i) => {
                  const Icon = valueIcons[v.icon];
                  return (
                    <Reveal as="li" key={v.id} delay={i * 80}>
                      <div className="group flex items-start gap-6 border-b border-line py-6 transition-colors hover:border-gold/45">
                        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border border-line text-gold transition-colors duration-500 group-hover:border-gold/60">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-[1.25rem] leading-snug transition-colors duration-500 group-hover:text-gold">
                            {v.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-[0.93rem] leading-[1.85] text-ash">{v.body}</p>
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

      {/* ---------------------------- technology --------------------------- */}
      <section className="border-b border-line bg-char py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHead
            num="02"
            eyebrow="Our Technology"
            title="The Window Therm Edge"
            lede="Extreme durability, precision sizing, a patented frame and thermal guard."
          />

          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-6">
              {edgeIndex.map((e) => (
                <span key={e.n} className="label-xs flex items-center gap-3 text-ash">
                  <span className="num-xl text-base">{e.n}</span>
                  {e.title}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
            {edge.map((e, i) => (
              <Reveal key={e.n} delay={i * 110}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-ink transition-colors duration-500 hover:border-gold/45">
                  <div className="relative overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <span className="num-xl absolute left-5 top-5 text-[2.4rem]">{e.n}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[1.4rem] transition-colors duration-500 group-hover:text-gold">{e.title}</h3>
                    <p className="mt-4 flex-1 text-[0.92rem] leading-[1.85] text-ash">{e.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- services ---------------------------- */}
      <section className="border-b border-line bg-ink py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHead num="03" eyebrow={servicesIntro.eyebrow} title="What we do for you." lede={servicesIntro.body} />
              <Reveal delay={120}>
                <Btn to="/services" className="mt-10" arrow>
                  Explore our services
                </Btn>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-px">
                {services.map((s) => (
                  <Reveal as="li" key={s.n} delay={60}>
                    <div className="group grid grid-cols-[auto_1fr] gap-6 border border-line bg-char p-7 transition-colors duration-500 hover:bg-char2 md:gap-8 md:p-9">
                      <span className="num-xl text-[2.4rem]">{s.n}</span>
                      <div>
                        <h3 className="text-[1.35rem] leading-snug transition-colors duration-500 group-hover:text-gold">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-[0.93rem] leading-[1.85] text-ash">{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ studio ----------------------------- */}
      <section className="relative overflow-hidden border-b border-line bg-char2">
        <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHead num="04" eyebrow="Where We Are" title="Hoosick Falls, New York." />
            <Reveal delay={120}>
              <div className="mt-10 space-y-px">
                <a
                  href={business.phoneHref}
                  className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:border-gold/45"
                >
                  <IconPhone className="h-5 w-5 text-gold" />
                  <span className="label-xs w-20 text-ash-dim">Phone</span>
                  <span className="font-display text-[1.5rem] font-light text-bone transition-colors group-hover:text-gold">
                    {business.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:border-gold/45"
                >
                  <IconMail className="h-5 w-5 text-gold" />
                  <span className="label-xs w-20 text-ash-dim">Email</span>
                  <span className="text-lg text-bone transition-colors group-hover:text-gold">{business.email}</span>
                </a>
                <div className="flex items-start gap-5 border-b border-line py-5">
                  <IconPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span className="label-xs w-20 pt-1 text-ash-dim">Address</span>
                  <p className="text-lg leading-relaxed text-bone">
                    {business.street}
                    <br />
                    {business.city}, {business.state} {business.zip}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10">
                <GoldRule className="max-w-xs" />
                <p className={cn("mt-6 max-w-md text-[0.95rem] leading-[1.85] text-ash")}>
                  We work with homeowners across {business.area}. Send your window details and we will handle
                  measurement, custom sizing and installation.
                </p>
                <Btn to="/contact" className="mt-8" variant="solid" arrow>
                  Start Free Quote
                </Btn>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src={images.portraitB}
                  alt="Window Therm thermal window insert in a frame"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full rounded-[4px] border border-line object-cover transition-transform duration-[1400ms] hover:scale-[1.02]"
                />
                <div className="grid gap-4">
                  <img
                    src={images.portraitC}
                    alt="Custom sized thermal insert detail"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-[4px] border border-line object-cover"
                  />
                  <img
                    src={images.windowWithoutInsert}
                    alt="A window without thermal inserts"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-[4px] border border-line object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-xs leading-relaxed text-ash-dim">
                Left: an insert in its frame. Right: a window without thermal inserts — the opening we measure
                first.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

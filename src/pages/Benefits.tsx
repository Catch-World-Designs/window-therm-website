import { business, clipById, edgeIndex, images, valueProps } from "@/data/site";
import { CineVideo } from "@/components/Video";
import { useLightbox } from "@/components/Lightbox";
import { PageHero } from "@/components/Layout";
import { Btn, Eyebrow, Reveal, SectionHead } from "@/components/Primitives";
import { IconPhone, IconPlay, valueIcons } from "@/components/Icons";
import { cn } from "@/utils/cn";

const featureClips = ["snow-window", "quiet-night", "hearth", "summer-light"];
const stills = [images.portraitB, images.portraitA, images.portraitC, images.windowWithoutInsert];

export default function Benefits() {
  const { open } = useLightbox();

  return (
    <>
      <PageHero
        num="01"
        eyebrow="Benefits"
        title="Why an insert, not a replacement."
        lede="Bypass the substantial expense of window replacement. An insert is built around the frame you already have, and it works on every window it is cut for."
        clip={clipById("snow-window")}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn to="/contact" variant="solid" arrow>
            Start Free Quote
          </Btn>
          <Btn onClick={() => open(clipById("warm-room"))}>
            <IconPlay className="relative z-10 h-3 w-3" />
            Watch Video
          </Btn>
        </div>
      </PageHero>

      {/* benefit films */}
      <section className="border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHead
            num="02"
            eyebrow="What Changes"
            title="Four benefits, in order of how you feel them."
            lede="Comfort first, then the bill, then the house itself."
          />

          <div className="mt-16 space-y-20 md:space-y-28">
            {valueProps.map((v, i) => {
              const Icon = valueIcons[v.icon];
              const flip = i % 2 === 1;
              const clip = clipById(featureClips[i]);
              return (
                <article key={v.id} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <Reveal className={cn("lg:col-span-7", flip && "lg:order-2")}>
                    <div className="group relative overflow-hidden rounded-[4px] border border-line">
                      <CineVideo
                        clip={clip}
                        className="aspect-[16/10] w-full cursor-pointer"
                        overlay="bottom"
                        onClick={() => open(clip)}
                      />
                      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/35 bg-ink/40 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
                        <IconPlay className="ml-0.5 h-3.5 w-3.5 text-bone" />
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-line/50 bg-ink/70 px-5 py-3.5 backdrop-blur-[2px]">
                        <span className="label-xs text-gold">{clip.title}</span>
                        <span className="label-xs text-ash-dim">{clip.seconds}s</span>
                      </div>
                    </div>
                  </Reveal>

                  <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
                    <Reveal delay={100}>
                      <span className="num-xl block text-[3.4rem]">0{i + 1}</span>
                      <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-[4px] border border-line text-gold">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-7 text-[1.9rem] leading-tight md:text-[2.4rem]">{v.title}</h3>
                      <p className="mt-5 max-w-md text-[0.98rem] leading-[1.9] text-ash">{v.body}</p>
                      <div className="mt-8 h-px w-24 bg-gold/50" />
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* the edge index */}
      <section className="border-b border-line bg-char py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHead
                num="03"
                eyebrow="Our Technology"
                title="The Window Therm Edge"
                lede="Durability, custom sizing, a patented frame and thermal guard. The four things every insert carries."
              />
              <Reveal delay={140}>
                <Btn to="/how-it-works" className="mt-10" arrow>
                  How it works
                </Btn>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
                {edgeIndex.map((e, i) => (
                  <Reveal as="li" key={e.n} delay={i * 90}>
                    <div className="group h-full bg-char p-8 transition-colors duration-500 hover:bg-char2">
                      <div className="flex items-start justify-between gap-4">
                        <span className="num-xl text-[2.8rem]">{e.n}</span>
                        <img
                          src={stills[i]}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-14 w-14 rounded-[3px] border border-line object-cover opacity-70 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                        />
                      </div>
                      <h3 className="mt-7 text-xl transition-colors duration-500 group-hover:text-gold">{e.title}</h3>
                      <span className="mt-5 block h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-20" />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* comfort strip */}
      <section className="relative overflow-hidden border-b border-line bg-ink">
        <CineVideo clip={clipById("summer-light")} overlay="deep" zoom className="absolute inset-0 h-full w-full" />
        <div className="relative shell py-24 md:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Warm in Winter · Cool in Summer</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 text-[2.2rem] leading-[1.08] text-balance text-bone md:text-[3.4rem]">
                  One insert, both seasons.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-[1rem] leading-[1.9] text-bone/75">
                  Our double-sided frame system minimizes heat loss and maximizes energy efficiency, keeping your
                  home warm in winter and cool in summer.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={200}>
                <div className="border border-line bg-ink/70 p-8 backdrop-blur-[3px]">
                  <span className="label-xs text-ash-dim">Speak with us</span>
                  <a
                    href={business.phoneHref}
                    className="group mt-4 flex items-center gap-3 font-display text-[2rem] font-light text-bone transition-colors hover:text-gold"
                  >
                    <IconPhone className="h-5 w-5 text-gold" />
                    {business.phone}
                  </a>
                  <Btn to="/contact" className="mt-8 w-full" arrow>
                    Get a Consultation
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

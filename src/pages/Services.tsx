import { business, clipById, images, services, servicesIntro } from "@/data/site";
import { CineVideo } from "@/components/Video";
import { useLightbox } from "@/components/Lightbox";
import { PageHero } from "@/components/Layout";
import { Btn, Eyebrow, GoldRule, Reveal, SectionHead } from "@/components/Primitives";
import { IconArrow, IconMail, IconPhone, IconPin, IconPlay } from "@/components/Icons";
import { cn } from "@/utils/cn";

const serviceClips = ["the-fit", "seal", "summer-light"];
const extraStill = images.windowWithoutInsert;

export default function Services() {
  const { open } = useLightbox();

  return (
    <>
      <PageHero
        num="03"
        eyebrow={servicesIntro.eyebrow}
        title={servicesIntro.title}
        lede={servicesIntro.body}
        clip={clipById("quiet-night")}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Btn to="/contact" variant="solid" arrow>
            Start Free Quote
          </Btn>
          <Btn href={business.phoneHref} variant="ghost">
            <IconPhone className="relative z-10 h-3.5 w-3.5" />
            {business.phone}
          </Btn>
        </div>
      </PageHero>

      {/* ---------------------------- services ----------------------------- */}
      <section className="border-b border-line bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHead num="01" eyebrow="Our Services" title="Three ways we work on your windows." />

          <div className="mt-16 space-y-24 md:space-y-32">
            {services.map((s, i) => {
              const flip = i % 2 === 1;
              const clip = clipById(serviceClips[i]);
              return (
                <article key={s.n} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className={cn("lg:col-span-7", flip && "lg:order-2")}>
                    <Reveal>
                      <div className="group relative overflow-hidden rounded-[4px] border border-line">
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent" />
                        <div className="grain-layer absolute inset-0" aria-hidden="true" />
                        <span className="num-xl absolute left-6 top-6 text-[3rem]">{s.n}</span>
                        <button
                          type="button"
                          onClick={() => open(clip)}
                          className="absolute bottom-6 left-6 inline-flex items-center gap-3 rounded-[4px] border border-bone/30 bg-ink/60 px-5 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-bone backdrop-blur-[2px] transition-all duration-500 hover:border-gold hover:text-gold"
                        >
                          <IconPlay className="h-3 w-3" />
                          Watch — {clip.title}
                        </button>
                      </div>
                    </Reveal>
                  </div>

                  <div className={cn("lg:col-span-5 lg:pt-6", flip && "lg:order-1")}>
                    <Reveal delay={110}>
                      <Eyebrow>Service {s.n}</Eyebrow>
                      <h2 className="mt-5 text-[2rem] leading-[1.1] md:text-[2.7rem]">{s.title}</h2>
                      <p className="mt-6 text-[0.98rem] leading-[1.95] text-ash">{s.body}</p>
                      <GoldRule className="mt-9 max-w-xs" />
                      <div className="mt-9 flex flex-wrap gap-4">
                        <Btn to="/contact" arrow>
                          Enquire
                        </Btn>
                        <Btn to="/how-it-works" variant="ghost">
                          How it works
                        </Btn>
                      </div>
                    </Reveal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------- still + film -------------------------- */}
      <section className="border-b border-line bg-char py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="group relative h-full overflow-hidden rounded-[4px] border border-line">
                <img
                  src={extraStill}
                  alt="A window without thermal inserts"
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-[18rem] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char via-char/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="label-xs text-frost">Before</span>
                  <p className="mt-3 max-w-sm font-display text-[1.5rem] font-light leading-snug text-bone">
                    A window without thermal inserts.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-6">
              <SectionHead
                num="02"
                eyebrow="Where It Starts"
                title="Every project begins with a measurement."
                lede="Our trained technicians measure your existing window openings so your custom thermal inserts are manufactured to precise dimensions."
              />
              <Reveal delay={120}>
                <ul className="mt-10 space-y-px">
                  {[
                    "Window openings measured precisely",
                    "Inserts manufactured to those dimensions",
                    "Sealed with the patented double-sided frame",
                  ].map((line, i) => (
                    <li
                      key={line}
                      className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:border-gold/45"
                    >
                      <span className="num-xl text-xl">0{i + 1}</span>
                      <span className="text-[0.95rem] text-bone transition-colors group-hover:text-gold">{line}</span>
                      <IconArrow className="ml-auto h-4 w-4 text-gold opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2" />
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={180}>
                <Btn to="/contact" className="mt-10" variant="solid" arrow>
                  Book a measurement
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ contact ---------------------------- */}
      <section className="relative overflow-hidden bg-ink">
        <CineVideo clip={clipById("quiet-night")} overlay="deep" zoom className="absolute inset-0 h-full w-full" />
        <div className="relative shell py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Get in Touch</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-6 text-[2.2rem] leading-[1.06] text-balance text-bone md:text-[3.4rem]">
                  Tell us the window. We will build the insert.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-lg text-[1rem] leading-[1.9] text-bone/72">
                  Send the number of windows and their sizes, and we will come back to you. Serving{" "}
                  {business.area}.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
                  <a
                    href={business.phoneHref}
                    className="group bg-ink/80 p-8 backdrop-blur-[2px] transition-colors hover:bg-char"
                  >
                    <IconPhone className="h-5 w-5 text-gold" />
                    <span className="label-xs mt-6 block text-ash-dim">Call</span>
                    <span className="mt-2 block font-display text-[1.6rem] font-light text-bone transition-colors group-hover:text-gold">
                      {business.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="group bg-ink/80 p-8 backdrop-blur-[2px] transition-colors hover:bg-char"
                  >
                    <IconMail className="h-5 w-5 text-gold" />
                    <span className="label-xs mt-6 block text-ash-dim">Email</span>
                    <span className="mt-2 block break-all text-lg text-bone transition-colors group-hover:text-gold">
                      {business.email}
                    </span>
                  </a>
                  <div className="bg-ink/80 p-8 backdrop-blur-[2px] sm:col-span-2">
                    <IconPin className="h-5 w-5 text-gold" />
                    <span className="label-xs mt-6 block text-ash-dim">Address</span>
                    <p className="mt-2 text-lg leading-relaxed text-bone">
                      {business.street}, {business.city}, {business.state} {business.zip}
                    </p>
                  </div>
                </div>
                <Btn to="/contact" className="mt-8 w-full sm:w-auto" arrow>
                  Get a Consultation
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

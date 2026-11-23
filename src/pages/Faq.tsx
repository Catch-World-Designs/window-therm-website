import { useState } from "react";
import { business, clipById, faq } from "@/data/site";
import { PageHero } from "@/components/Layout";
import { Btn, Eyebrow, GoldRule, Reveal, SectionHead } from "@/components/Primitives";
import { IconMail, IconPhone, IconPin } from "@/components/Icons";
import { cn } from "@/utils/cn";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        num="05"
        eyebrow="FAQ"
        title="Questions we are asked about inserts."
        lede="Sizing, the patented frame, how long an insert lasts and what we handle for you. If your question is not here, call us."
        clip={clipById("snow-window")}
      />

      <section className="border-b border-line bg-ink py-16 md:py-24 lg:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <SectionHead num="01" eyebrow="Answers" title="Straight answers, no guesswork." />
                <Reveal delay={120}>
                  <div className="mt-10 border border-line bg-char p-7">
                    <Eyebrow>Still deciding?</Eyebrow>
                    <p className="mt-5 text-[0.95rem] leading-[1.85] text-ash">
                      Send the number of windows and their sizes. We will take it from measurement onward.
                    </p>
                    <GoldRule className="my-7" />
                    <div className="space-y-4 text-sm">
                      <a href={business.phoneHref} className="group flex items-center gap-3 text-bone hover:text-gold">
                        <IconPhone className="h-4 w-4 text-gold" />
                        {business.phone}
                      </a>
                      <a
                        href={`mailto:${business.email}`}
                        className="group flex items-center gap-3 break-all text-bone hover:text-gold"
                      >
                        <IconMail className="h-4 w-4 shrink-0 text-gold" />
                        {business.email}
                      </a>
                      <p className="flex items-start gap-3 text-ash">
                        <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {business.street}, {business.city}, {business.state} {business.zip}
                      </p>
                    </div>
                    <Btn to="/contact" className="mt-8 w-full" arrow>
                      Start Free Quote
                    </Btn>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-line">
                {faq.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
                      <div className={cn("border-b border-line transition-colors", isOpen && "bg-char/40")}>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="group flex w-full items-start gap-5 px-1 py-7 text-left md:gap-8 md:px-4"
                        >
                          <span className="num-xl mt-2 text-lg">{String(i + 1).padStart(2, "0")}</span>
                          <span
                            className={cn(
                              "flex-1 font-display text-[1.3rem] font-light leading-snug transition-colors duration-500 md:text-[1.75rem]",
                              isOpen ? "text-gold" : "text-bone group-hover:text-gold",
                            )}
                          >
                            {item.q}
                          </span>
                          <span className="relative mt-2.5 h-3.5 w-3.5 shrink-0">
                            <span className="absolute left-0 top-1/2 h-px w-full bg-gold" />
                            <span
                              className={cn(
                                "absolute left-1/2 top-0 h-full w-px bg-gold transition-all duration-500",
                                isOpen && "rotate-90 opacity-0",
                              )}
                            />
                          </span>
                        </button>
                        <div
                          className={cn(
                            "grid transition-all duration-500 ease-out",
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="max-w-2xl px-1 pb-8 text-[0.97rem] leading-[1.95] text-ash md:ml-[3.6rem] md:px-4">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={100}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Btn to="/how-it-works" arrow>
                    How it works
                  </Btn>
                  <Btn to="/services" variant="ghost">
                    Our services
                  </Btn>
                  <Btn href={business.phoneHref} variant="ghost">
                    <IconPhone className="relative z-10 h-3.5 w-3.5" />
                    {business.phone}
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

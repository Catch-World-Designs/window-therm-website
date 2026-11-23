import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { business, nav, services, social } from "@/data/site";
import { useBodyLock, useScrollY } from "@/lib/hooks";
import {
  IconArrow,
  IconClose,
  IconMail,
  IconMenu,
  IconPhone,
  IconPin,
  socialIcons,
} from "./Icons";
import { Btn, GoldRule, Logo, Reveal } from "./Primitives";
import { CineVideo } from "./Video";
import type { Clip } from "@/data/site";

/* ------------------------- scroll management ------------------------- */

/** Fixed atmosphere: faint column rhythm plus two very soft light pools. */
export function AmbientGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5]"
      aria-hidden="true"
      style={{
        backgroundImage: [
          "repeating-linear-gradient(90deg, rgba(245,245,245,0.03) 0 1px, transparent 1px 8.3333%)",
          "radial-gradient(58% 38% at 12% -4%, rgba(201,169,110,0.09), transparent 68%)",
          "radial-gradient(48% 36% at 92% 104%, rgba(143,184,216,0.07), transparent 70%)",
        ].join(","),
      }}
    />
  );
}

/** Returns to the top once the visitor is well into the page. */
export function BackToTop() {
  const y = useScrollY();
  const show = y > 900;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-8 right-8 z-[65] hidden h-12 w-12 items-center justify-center rounded-[4px] border border-line bg-ink/85 text-ash backdrop-blur-[2px] transition-all duration-500 hover:border-gold hover:text-gold md:flex",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <IconArrow className="h-4 w-4 -rotate-90" />
    </button>
  );
}

export function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export function ScrollProgressLine() {
  const y = useScrollY();
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    setPct(h > 0 ? Math.min(100, (y / h) * 100) : 0);
  }, [y]);
  return (
    <div className="absolute inset-x-0 top-0 z-50 h-px bg-transparent" aria-hidden="true">
      <div className="h-full bg-gold/80 transition-[width] duration-150 ease-out" style={{ width: `${pct}%` }} />
    </div>
  );
}

/* ------------------------------- header ------------------------------ */

export function Header() {
  const y = useScrollY();
  const solid = y > 40;
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  useBodyLock(menu);

  useEffect(() => setMenu(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-700",
          solid
            ? "border-b border-line bg-ink/96 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-ink/85 via-ink/25 to-transparent",
        )}
      >
        <ScrollProgressLine />
        <div className="shell">
          <div className={cn("flex items-center justify-between gap-6 transition-all duration-500", solid ? "py-3.5" : "py-5")}>
            <Logo size={solid ? "sm" : "md"} className="transition-all duration-500" />

            <nav className="hidden items-center gap-6 xl:flex xl:gap-7" aria-label="Main">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "group relative py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
                      isActive ? "text-gold" : "text-ash hover:text-bone",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500",
                          isActive ? "w-full" : "w-0 group-hover:w-full",
                        )}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-5">
              <a
                href={business.phoneHref}
                className="group hidden items-center gap-2.5 text-[0.8rem] font-medium tracking-wide text-bone transition-colors hover:text-gold md:flex"
              >
                <IconPhone className="h-4 w-4 text-gold transition-transform duration-500 group-hover:-rotate-12" />
                {business.phone}
              </a>
              <Btn to="/contact" size="sm" className="hidden sm:inline-flex">
                Start Free Quote
              </Btn>
              <button
                type="button"
                onClick={() => setMenu(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-bone transition-colors hover:border-gold hover:text-gold xl:hidden"
              >
                <IconMenu className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[80] transition-all duration-500 xl:hidden",
          menu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setMenu(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(92vw,26rem)] flex-col border-l border-line bg-char transition-transform duration-500 ease-out",
            menu ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setMenu(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-ash transition-colors hover:border-gold hover:text-gold"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "group flex items-baseline gap-4 border-b border-line-soft py-4 transition-colors",
                        isActive ? "text-gold" : "text-bone hover:text-gold",
                      )
                    }
                  >
                    <span className="num-xl text-base">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[1.6rem] font-light">{item.label}</span>
                    <IconArrow className="ml-auto h-4 w-4 self-center text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-9 space-y-3 text-sm">
              <a href={business.phoneHref} className="flex items-center gap-3 text-bone">
                <IconPhone className="h-4 w-4 text-gold" /> {business.phone}
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-bone">
                <IconMail className="h-4 w-4 text-gold" /> {business.email}
              </a>
              <p className="flex items-start gap-3 text-ash">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {business.addressFull}
              </p>
            </div>
            <Btn to="/contact" className="mt-8 w-full" arrow>
              Start Free Quote
            </Btn>
          </nav>
        </div>
      </div>
    </>
  );
}

/* --------------------------- mobile CTA bar --------------------------- */

export function MobileBar() {
  const y = useScrollY();
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[75] grid grid-cols-2 gap-px border-t border-line bg-line transition-transform duration-500 sm:hidden",
        y > 160 ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2.5 bg-ink py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-bone active:bg-char"
      >
        <IconPhone className="h-4 w-4 text-gold" /> Call
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2.5 bg-gold py-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink active:bg-gold-soft"
      >
        Start Free Quote
      </Link>
    </div>
  );
}

/* ------------------------------- footer ------------------------------- */

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-char">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="md" />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-[1.85] text-ash">
              Custom-built thermal window inserts on a patented double-sided frame system. Engineered for
              performance, serving {business.area}.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {social.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-ash transition-all duration-400 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="label-xs text-gold">Menu</h4>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-bone"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-400 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="label-xs text-gold">Services</h4>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.n}>
                  <Link
                    to="/services"
                    className="group inline-flex items-start gap-3 text-sm text-ash transition-colors hover:text-bone"
                  >
                    <span className="num-xl mt-0.5 text-xs">{s.n}</span>
                    <span className="group-hover:text-gold">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="label-xs text-gold">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href={business.phoneHref} className="group flex items-start gap-3 text-bone transition-colors hover:text-gold">
                  <IconPhone className="mt-0.5 h-4 w-4 text-gold" /> {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="group flex items-start gap-3 text-bone transition-colors hover:text-gold">
                  <IconMail className="mt-0.5 h-4 w-4 text-gold" /> {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ash">
                <IconPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>
                  {business.street}
                  <br />
                  {business.city}, {business.state} {business.zip}
                </span>
              </li>
            </ul>
            <Btn to="/contact" size="sm" className="mt-7" arrow>
              Get a Consultation
            </Btn>
          </div>
        </div>

        <div className="mt-16">
          <GoldRule />
        </div>

        <div className="mt-7 flex flex-col gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-ash-dim md:flex-row md:items-center md:justify-between">
          <p>{business.copyright}</p>
          <p className="text-gold/70">{business.credit}</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ page hero ----------------------------- */

export function PageHero({
  num,
  eyebrow,
  title,
  lede,
  clip,
  children,
}: {
  num: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  clip: Clip;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink">
      <CineVideo clip={clip} overlay="deep" className="absolute inset-0 h-full w-full" zoom />
      <div className="relative shell pb-16 pt-36 md:pb-24 md:pt-52">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="num-xl block text-[3rem] md:text-[4rem]">{num}</span>
            </Reveal>
            <Reveal delay={80}>
              <span className="label-xs mt-6 inline-flex items-center gap-3 text-gold">
                <span className="h-px w-10 bg-gold/60" />
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.02] text-balance md:text-[4.4rem]">{title}</h1>
            </Reveal>
            {lede && (
              <Reveal delay={220}>
                <p className="mt-7 max-w-xl text-[1rem] leading-[1.85] text-bone/70">{lede}</p>
              </Reveal>
            )}
            {children && <Reveal delay={280}>{children}</Reveal>}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- layout ------------------------------- */

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-ink">
      <AmbientGrid />
      <Header />
      <main className="relative">{children}</main>
      <Footer />
      <MobileBar />
      <BackToTop />
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}

import type { ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { useInView } from "@/lib/hooks";
import { IconArrow } from "./Icons";

/* ------------------------------ Reveal ------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  line = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  line?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(line ? "rv rv-line" : "rv", inView && "rv-in", className)}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------ Eyebrow ----------------------------- */

export function Eyebrow({
  children,
  className,
  dot = true,
}: {
  children: ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span className={cn("label-xs inline-flex items-center gap-3 text-gold", className)}>
      {dot && <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
      }
      {children}
    </span>
  );
}

/* ------------------------------ Buttons ----------------------------- */

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "outline" | "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  disabled?: boolean;
};

export function Btn({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "outline",
  size = "md",
  arrow = false,
  className,
  disabled,
}: BtnProps) {
  const sizes = {
    sm: "px-4 py-2.5 text-[0.6875rem] tracking-[0.2em]",
    md: "px-6 py-3.5 text-[0.6875rem] tracking-[0.22em]",
    lg: "px-8 py-4.5 text-[0.7rem] tracking-[0.24em]",
  }[size];

  const variants = {
    outline:
      "border border-gold/70 text-gold hover:bg-gold hover:text-ink hover:border-gold",
    solid: "border border-gold bg-gold text-ink hover:bg-transparent hover:text-gold",
    ghost: "border border-line text-bone hover:border-gold hover:text-gold",
  }[variant];

  const cls = cn(
    "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-[4px] font-sans font-semibold uppercase transition-all duration-500 ease-out",
    "active:translate-y-px disabled:cursor-not-allowed disabled:opacity-45",
    sizes,
    variants,
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <IconArrow className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {inner}
    </button>
  );
}

/* ------------------------------ Rules ------------------------------- */

export function GoldRule({ className }: { className?: string }) {
  return <div className={cn("hairline-gold h-px w-full", className)} aria-hidden="true" />;
}

export function BorderRule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-line", className)} aria-hidden="true" />;
}

/* --------------------------- Section head --------------------------- */

export function SectionHead({
  num,
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  titleClass,
}: {
  num?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClass?: string;
}) {
  return (
    <div
      className={cn(
        "relative",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-end gap-5 md:gap-7",
          align === "center" && "justify-center",
        )}
      >
        {num && (
          <Reveal>
            <span className="num-xl block text-[3.25rem] md:text-[4.5rem]" aria-hidden="true">
              {num}
            </span>
          </Reveal>
        )}
        <div className={cn("min-w-0", align === "center" && "text-center")}>
          {eyebrow && (
            <Reveal delay={60}>
              <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={120}>
            <h2
              className={cn(
                "mt-4 text-[2.1rem] leading-[1.06] text-balance md:text-[3.4rem]",
                titleClass,
              )}
            >
              {title}
            </h2>
          </Reveal>
        </div>
      </div>
      {lede && (
        <Reveal delay={200}>
          <p
            className={cn(
              "mt-7 max-w-2xl text-[0.975rem] leading-[1.85] text-ash",
              align === "center" && "mx-auto",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
      <Reveal delay={260} className="mt-9">
        <GoldRule />
      </Reveal>
    </div>
  );
}

/* ------------------------------- Logo ------------------------------- */

export function Logo({
  className,
  plateClass,
  href = "/",
  size = "md",
}: {
  className?: string;
  plateClass?: string;
  href?: string | null;
  size?: "sm" | "md" | "lg";
}) {
  const heights = { sm: "h-7", md: "h-9", lg: "h-12" }[size];
  const mark = (
    <span
      className={cn(
        "inline-flex items-center rounded-[3px] bg-bone px-2.5 py-1.5 transition-all duration-500",
        "shadow-[0_0_0_1px_rgba(201,169,110,0.35)]",
        className,
      )}
    >
      {/* Wix-hosted logo file no longer loads; text wordmark until the original logo file is supplied. */}
      <span
        className={cn("flex items-center gap-2 whitespace-nowrap font-display font-medium leading-none tracking-[0.14em] text-ink", heights)}
        aria-label="Window Therm"
      >
        <span className="h-[55%] aspect-square border-[1.5px] border-ink" aria-hidden="true" />
        <span className="text-[0.95em] uppercase">
          Window <span className="text-ink/55">Therm</span>
        </span>
      </span>
    </span>
  );
  if (!href) return <span className={cn(plateClass)}>{mark}</span>;
  return (
    <Link to={href} aria-label="Window Therm — home" className={cn("inline-block", plateClass)}>
      {mark}
    </Link>
  );
}

/* ---------------------------- Small parts --------------------------- */

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "label-xs inline-flex items-center border border-line bg-char px-3 py-1.5 text-ash",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function KeyValue({ k, v, href }: { k: string; v: ReactNode; href?: string }) {
  const inner = (
    <span className="group flex items-baseline justify-between gap-6 py-4 transition-colors">
      <span className="label-xs shrink-0 text-ash-dim">{k}</span>
      <span className="text-right font-sans text-sm text-bone transition-colors group-hover:text-gold">
        {v}
      </span>
    </span>
  );
  return href ? (
    <a href={href} className="block border-b border-line-soft last:border-0">
      {inner}
    </a>
  ) : (
    <div className="border-b border-line-soft last:border-0">{inner}</div>
  );
}

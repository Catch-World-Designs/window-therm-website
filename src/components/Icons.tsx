import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------------- product / benefit icons ---------------- */

export const IconRuler = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 15.5 15.5 3 21 8.5 8.5 21z" />
    <path d="M7 12.2 9 14.2M10 9.2 12 11.2M13 6.2 15 8.2" />
  </svg>
);

export const IconBill = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 3h14v18l-2.3-1.6-2.4 1.6-2.3-1.6L9.7 21 7.3 19.4 5 21z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);

export const IconLeaf = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20c0-8 5-14 16-15 0 10-5 15-12 15H4z" />
    <path d="M4.5 19.5C8 16 11.5 13 16 10.5" />
  </svg>
);

export const IconHand = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 11V5.6a1.3 1.3 0 0 1 2.6 0V11" />
    <path d="M11.6 10.6V4.9a1.3 1.3 0 0 1 2.6 0v5.7" />
    <path d="M14.2 10.8V6.9a1.3 1.3 0 0 1 2.6 0v7.6c0 3.4-2.2 6.1-5.5 6.1-2.9 0-4.4-1.5-5.6-4L4 13.2a1.4 1.4 0 0 1 2.3-1.6L9 14.4" />
  </svg>
);

export const IconSnow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M3.4 7l17.2 10M20.6 7 3.4 17" />
    <path d="M12 6.2 9.8 4.4M12 6.2l2.2-1.8M12 17.8l-2.2 1.8M12 17.8l2.2 1.8" />
  </svg>
);

export const IconWave = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 12h2.2M8 7.5v9M12 4.5v15M16 8.5v7M20 11h1" />
  </svg>
);

export const IconThermo = (p: P) => (
  <svg {...base} {...p}>
    <path d="M10 13.8V5.2a2 2 0 1 1 4 0v8.6a4.2 4.2 0 1 1-4 0z" />
    <path d="M12 9.5v5.6" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2.8 20 5.4v6.2c0 4.6-3.3 8.2-8 9.6-4.7-1.4-8-5-8-9.6V5.4z" />
    <path d="M8.8 12.1 11.2 14.5 15.6 9.9" />
  </svg>
);

export const IconFrame = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.2" y="3.2" width="17.6" height="17.6" />
    <rect x="7" y="7" width="10" height="10" />
    <path d="M3.2 3.2 7 7M20.8 3.2 17 7M3.2 20.8 7 17M20.8 20.8 17 17" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.2 21 8l-9 4.8L3 8z" />
    <path d="M3 12.4 12 17.2l9-4.8M3 16.6 12 21.4l9-4.8" />
  </svg>
);

/* ---------------- ui icons ---------------- */

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h15.5M14 6.6 19.8 12 14 17.4" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8.4 5.6 18.6 12 8.4 18.4z" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5.6 5.6 18.4 18.4M18.4 5.6 5.6 18.4" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 9.5 12 15l5.5-5.5" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.3 3.6h3l1.4 3.6-2 1.4a11 11 0 0 0 5.3 5.3l1.4-2 3.6 1.4v3c0 .9-.7 1.6-1.6 1.6C10.5 17.9 5.4 12.8 4.7 5.2c-.1-.9.7-1.6 1.6-1.6z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.4" width="18" height="13.2" />
    <path d="m3.6 6.2 8.4 6.6 8.4-6.6" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21.4s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 7.5h17M3.5 12.5h17M3.5 17.5h11" />
  </svg>
);

export const IconDrag = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9.4 7.4 5 12l4.4 4.6M14.6 7.4 19 12l-4.4 4.6" />
  </svg>
);

export const IconUpload = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 16.4V4.8M7.8 9 12 4.8 16.2 9" />
    <path d="M4 16v3.2h16V16" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m4.8 12.6 4.6 4.6L19.4 6.8" />
  </svg>
);

/* ---------------- social marks ---------------- */

export const IconFacebook = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.8 21V13h2.4l.5-3h-2.9V8.3c0-.9.3-1.5 1.6-1.5h1.4V4.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V10H9.4v3h2.5v8z" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.4" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="16.9" cy="7.1" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLinkedin = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1.4" />
    <path d="M8 10.6V16M8 7.9v.1M11.6 16v-3.1a1.9 1.9 0 0 1 3.8 0V16" />
  </svg>
);

export const IconTiktok = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 4.4v9.9a3.3 3.3 0 1 1-3.3-3.3" />
    <path d="M14 4.4c.4 2.3 1.9 3.7 4.2 3.9" />
  </svg>
);

export const IconX = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 5.2 18.6 18.8M18.6 5.2 5 18.8" />
  </svg>
);

export const IconYoutube = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.8" y="6" width="18.4" height="12" rx="3.4" />
    <path d="m10.4 9.4 4.6 2.6-4.6 2.6z" />
  </svg>
);

export const socialIcons: Record<string, (p: P) => React.JSX.Element> = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  LinkedIn: IconLinkedin,
  TikTok: IconTiktok,
  X: IconX,
  YouTube: IconYoutube,
};

export const valueIcons = {
  ruler: IconRuler,
  bill: IconBill,
  leaf: IconLeaf,
  hand: IconHand,
} as const;

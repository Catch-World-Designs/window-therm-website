/* ------------------------------------------------------------------
   Window Therm — site content.
   Business facts come from windowtherminsert.com. Imagery and video are
   licensed stock footage from Pexels (free to use), chosen for the topic.
-------------------------------------------------------------------*/

export const business = {
  name: "Window Therm",
  domain: "windowtherminsert.com",
  phone: "518-441-3992",
  phoneHref: "tel:518-441-3992",
  email: "jkc293@gmail.com",
  street: "204 Main St",
  city: "Hoosick Falls",
  state: "NY",
  zip: "12090",
  addressFull: "204 Main St, Hoosick Falls, NY 12090",
  area: "NY · MA · VT · NH",
  copyright: "© 2026 Window Therm. All rights reserved.",
  credit: "Designed by CatchWorld Dezigns",
  logo: "https://static.wixstatic.com/media/668d29_873722f6a14641229cacabb08c90678b~mv2.png",
};

export const social = [
  { label: "Facebook", href: "http://www.facebook.com" },
  { label: "Instagram", href: "http://www.instagram.com" },
  { label: "LinkedIn", href: "http://www.linkedin.com" },
  { label: "TikTok", href: "http://www.tiktok.com" },
  { label: "X", href: "http://www.x.com" },
  { label: "YouTube", href: "http://www.youtube.com" },
];

/* ---------------------------- imagery ---------------------------- */

const pxPhoto = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const images = {
  /** Cold window with condensation: the "before" state. */
  windowWithoutInsert: pxPhoto(41037085, 1600, 900),
  windowWithoutInsertLarge: pxPhoto(41037085, 2048, 1152),
  /** Durability: wood-clad home in snow */
  portraitA: pxPhoto(4969981, 1000, 1333),
  /** Patented frame: framed window detail */
  portraitB: pxPhoto(17674965, 1000, 1333),
  /** Custom sizing: hands fitting a window frame */
  portraitC: pxPhoto(5691534, 1000, 1333),
  serviceCustom: pxPhoto(13005096, 1200, 900),
  serviceMeasure: pxPhoto(8470775, 1200, 900),
  serviceAudit: pxPhoto(7859776, 1200, 900),
};

/* ---------------------------- video ------------------------------ */

export type Clip = {
  id: string;
  title: string;
  chapter: string;
  summary: string;
  src: string;
  poster: string;
  seconds: number;
  hd?: boolean;
};

const px = (id: number, file: string, poster: string) => ({
  src: `https://videos.pexels.com/video-files/${id}/${file}`,
  poster: `https://images.pexels.com/videos/${id}/${poster}?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600`,
});

export const clips: Clip[] = [
  {
    id: "snow-arch",
    title: "Snow Beyond the Glass",
    chapter: "The Problem",
    summary: "Heavy snow falling past an arched window, seen from a warm room inside.",
    seconds: 12,
    hd: true,
    ...px(6392245, "6392245-hd_1920_1080_24fps.mp4", "pexels-photo-6392245.jpeg"),
  },
  {
    id: "frost-glass",
    title: "Frost at Sunrise",
    chapter: "The Problem",
    summary: "Frost patterns on a cold window pane as the morning sun comes up.",
    seconds: 16,
    hd: true,
    ...px(35309659, "14959685_1920_1080_30fps.mp4", "pexels-photo-35309659.jpeg"),
  },
  {
    id: "snow-storm",
    title: "Winter Outside",
    chapter: "The Problem",
    summary: "Snow drifting past the windows of a building on a cold winter day.",
    seconds: 20,
    hd: true,
    ...px(854858, "854858-hd_1920_1080_24fps.mp4", "free-video-854858.jpg"),
  },
  {
    id: "snow-window",
    title: "Snow at the Pane",
    chapter: "The Problem",
    summary: "Snowfall seen through a window, the season pressing against the glass.",
    seconds: 11,
    hd: true,
    ...px(6503967, "6503967-hd_1920_1080_25fps.mp4", "pexels-photo-6503967.jpeg"),
  },
  {
    id: "quiet-night",
    title: "A Lit Window at Night",
    chapter: "The Problem",
    summary: "A house window glowing in the dark. The warmth you pay for, and want to keep.",
    seconds: 8,
    hd: true,
    ...px(9479929, "9479929-hd_1920_1080_30fps.mp4", "cinema-9479929.jpeg"),
  },
  {
    id: "snow-roof",
    title: "Under Snow",
    chapter: "The Problem",
    summary: "Snow falling over a stone building with rows of dormer windows.",
    seconds: 8,
    hd: true,
    ...px(40934525, "17501202_1920_1080_60fps.mp4", "pexels-photo-40934525.jpeg"),
  },
  {
    id: "the-fit",
    title: "The Frame, Up Close",
    chapter: "The Solution",
    summary: "A close view of a window frame and glass. Every insert is made to this opening.",
    seconds: 24,
    hd: true,
    ...px(6175387, "6175387-hd_1920_1080_30fps.mp4", "pexels-photo-6175387.jpeg"),
  },
  {
    id: "seal",
    title: "The Seal",
    chapter: "The Solution",
    summary: "A modern window closed tight for insulation, filmed in close detail.",
    seconds: 5,
    hd: true,
    ...px(32078278, "13674013_1920_1080_60fps.mp4", "air-sealing-window-airtight-window-close-closing-double-pane-window-closing-glass-window-32078278.jpeg"),
  },
  {
    id: "warm-room",
    title: "A Warm Room",
    chapter: "The Solution",
    summary: "A sunlit corner with a chair by the window. Warm light, no draft.",
    seconds: 11,
    hd: true,
    ...px(34580818, "14653619_1920_1080_24fps.mp4", "chair-coffee-light-sun-34580818.jpeg"),
  },
  {
    id: "hearth",
    title: "Still Air",
    chapter: "The Solution",
    summary: "A bright, modern home interior with calm air and soft daylight.",
    seconds: 9,
    hd: true,
    ...px(39856661, "17001876_1920_1080_24fps.mp4", "apartment-architectural-bright-chair-39856661.jpeg"),
  },
  {
    id: "summer-light",
    title: "Summer Light",
    chapter: "The Solution",
    summary: "Sunlight through sheer curtains, a cool and comfortable room in any season.",
    seconds: 12,
    hd: true,
    ...px(38675645, "16428597_1920_1080_30fps.mp4", "cinematic-curtains-home-decor-interior-detail-38675645.jpeg"),
  },
];

export const clipById = (id: string) => clips.find((c) => c.id === id)!;

/* ----------------------------- copy ------------------------------ */

export const hero = {
  eyebrow: "Thermal Window Inserts",
  headline: "Engineered for Performance.",
  sub: "Experience the patented double-sided frame system that transforms your home insulation.",
  ctaPrimary: "Get a Consultation",
  ctaSecondary: "Watch Video",
};

export const valueProps = [
  {
    id: "custom",
    icon: "ruler" as const,
    title: "Customization at Its Core",
    body: "Every panel is engineered to your window's dimensions. A tailored fit that does not compromise on aesthetics.",
  },
  {
    id: "economy",
    icon: "bill" as const,
    title: "Economical Efficiency",
    body: "Bypass the expense of window replacement and enjoy the benefits of diminished energy bills.",
  },
  {
    id: "eco",
    icon: "leaf" as const,
    title: "Eco-Conscious Comfort",
    body: "By improving your windows' insulation, you are not just saving money. You are taking part in a move toward sustainability.",
  },
  {
    id: "install",
    icon: "hand" as const,
    title: "Installation Simplified",
    body: "We design our panels with your convenience in mind. Quick and easy to install, with minimal disruption.",
  },
];

export const edge = [
  {
    n: "01",
    title: "Durability",
    body: "Engineered for extreme longevity, our inserts resist high thermal cycling and mechanical stress, ensuring your home remains warm and protected for decades.",
    image: images.portraitA,
  },
  {
    n: "02",
    title: "Custom Sizing",
    body: "Every insert is precision-cut to fit your existing window frame perfectly, eliminating gaps and ensuring a flush, high-performance thermal barrier.",
    image: images.portraitC,
  },
  {
    n: "03",
    title: "Patented Frame",
    body: "Our double-sided frame system provides a superior seal, preventing air infiltration and maximizing the thermal efficiency of your building envelope.",
    image: images.portraitB,
  },
];

export const edgeIndex = [
  { n: "01", title: "Durability" },
  { n: "02", title: "Custom Sizing" },
  { n: "03", title: "Patented Frame" },
  { n: "04", title: "Thermal Guard" },
];

export const steps = [
  {
    n: "Step 1",
    title: "Custom Sizing",
    body: "We measure your window frame precisely to ensure a perfect fit. Our patented double-sided frame system is engineered for 100% custom sizing, guaranteeing a clean installation without any gaps.",
    image: images.serviceMeasure,
  },
  {
    n: "Step 2",
    title: "Patented Frame System",
    body: "Our double-sided frame system provides superior thermal insulation. This innovative design minimizes heat loss and maximizes energy efficiency, keeping your home warm in winter and cool in summer.",
    image: images.serviceCustom,
  },
  {
    n: "Step 3",
    title: "Superior Durability",
    body: "Our inserts are built to last. The high-grade materials and precision engineering ensure long-term performance and reliability, providing you with a durable solution for your home's thermal needs.",
    image: images.serviceAudit,
  },
];

export const servicesIntro = {
  eyebrow: "Expert Services",
  title: "Explore our services and get in touch",
  body: "From custom sizing to full installation, our team provides the technical precision and artisanal care your home deserves. We specialize in patented double-sided frame systems designed for extreme durability and superior thermal performance.",
};

export const services = [
  {
    n: "01",
    title: "Custom Window Insert",
    body: "Enhance your home's comfort and energy efficiency with our custom-built thermal window inserts. Designed to your exact specifications, these inserts provide superior insulation against heat and cold, reducing your energy bills and improving indoor air quality. Our patented frame system ensures a tight seal and long-lasting performance for years to come.",
    image: images.serviceCustom,
  },
  {
    n: "02",
    title: "Window Insert Measurement",
    body: "Ensure a perfect fit for your home's unique windows with our professional measurement service. Our trained technicians will accurately measure your existing window openings to guarantee your custom thermal inserts are manufactured to precise dimensions. This service is crucial for maximizing insulation efficiency and achieving an exact, airtight seal.",
    image: images.serviceMeasure,
  },
  {
    n: "03",
    title: "Home Energy Efficiency Audit",
    body: "Discover how our thermal window inserts can significantly reduce your home's energy consumption. We analyze key areas of heat loss and gain within your existing windows to demonstrate the tangible benefits of our custom solutions. Learn about potential savings on heating and cooling costs and enjoy a more comfortable living environment.",
    image: images.serviceAudit,
  },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/benefits", label: "Benefits" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/services", label: "Services" },
  { to: "/videos", label: "Videos" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

/* Per page SEO — titles and descriptions use wording from the site. */
export const seo: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Thermal Window Inserts | Window Therm – NY, MA, VT & NH",
    description:
      "Custom thermal window inserts from Window Therm. Patented double-sided frame system, precision custom sizing and installation for homes across New York, Massachusetts, Vermont and New Hampshire.",
  },
  "/benefits": {
    title: "Benefits | Thermal Window Inserts – Window Therm",
    description:
      "Customization at its core, economical efficiency, eco-conscious comfort and simplified installation. The Window Therm Edge: durability, custom sizing, patented frame and thermal guard.",
  },
  "/how-it-works": {
    title: "How It Works | Custom Thermal Window Inserts – Window Therm",
    description:
      "Step 1 custom sizing, Step 2 patented frame system, Step 3 superior durability. See how Window Therm inserts are measured, sealed and built to last.",
  },
  "/services": {
    title: "Expert Services | Window Therm – Custom Window Inserts",
    description:
      "Custom window insert, window insert measurement and home energy efficiency audit from Window Therm, serving New York, Massachusetts, Vermont and New Hampshire.",
  },
  "/videos": {
    title: "Videos | Window Therm – Thermal Window Inserts",
    description:
      "Watch the Window Therm video gallery: snow beyond the glass, frost at sunrise, the frame up close, a warm room and summer light.",
  },
  "/faq": {
    title: "FAQ | Thermal Window Inserts – Window Therm",
    description:
      "Questions about custom sizing, the patented double-sided frame, durability, installation and our services, answered by Window Therm.",
  },
  "/about": {
    title: "About Window Therm | Thermal Window Inserts – NY, MA, VT & NH",
    description:
      "Window Therm builds custom thermal window inserts on a patented double-sided frame system. 204 Main St, Hoosick Falls, NY 12090. 518-441-3992.",
  },
  "/contact": {
    title: "Contact Us | Get a Consultation – Window Therm",
    description:
      "Start a free quote for custom thermal window inserts. Call 518-441-3992, email jkc293@gmail.com or visit 204 Main St, Hoosick Falls, NY 12090.",
  },
};

/* ----------------------------- questions ----------------------------
   Every answer below is built from sentences already published on
   windowtherminsert.com. No new claims are introduced.
--------------------------------------------------------------------*/

export const faq = [
  {
    q: "How is an insert sized for my window?",
    a: "We measure your window frame precisely to ensure a perfect fit. Our patented double-sided frame system is engineered for 100% custom sizing, guaranteeing a clean installation without any gaps.",
  },
  {
    q: "What does the patented frame do?",
    a: "Our double-sided frame system provides a superior seal, preventing air infiltration and maximizing the thermal efficiency of your building envelope. It minimizes heat loss and maximizes energy efficiency, keeping your home warm in winter and cool in summer.",
  },
  {
    q: "Do I have to replace my windows?",
    a: "No. Bypass the substantial expense associated with window replacement and enjoy the financial benefits of diminished energy bills. An insert is built around the frame you already have.",
  },
  {
    q: "Will it change how the window looks?",
    a: "Our belief in a tailored approach means every panel is precisely engineered to your window\u2019s dimensions, ensuring a fit that does not compromise on aesthetics.",
  },
  {
    q: "How long does an insert last?",
    a: "Engineered for extreme longevity, our inserts resist high thermal cycling and mechanical stress, ensuring your home remains warm and protected for decades. High-grade materials and precision engineering ensure long-term performance and reliability.",
  },
  {
    q: "Is installation difficult?",
    a: "We design our panels with your convenience in mind. Quick and easy to install, they allow you to enjoy enhanced comfort with minimal disruption. From custom sizing to full installation, our team provides the technical precision and artisanal care your home deserves.",
  },
  {
    q: "What services do you offer?",
    a: "Custom Window Insert, Window Insert Measurement and Home Energy Efficiency Audit. Our trained technicians measure your existing window openings so your custom thermal inserts are manufactured to precise dimensions.",
  },
  {
    q: "How do we start?",
    a: "Start a free quote or get a consultation. Send the number of windows and their sizes, call 518-441-3992, or email jkc293@gmail.com. We are at 204 Main St, Hoosick Falls, NY 12090.",
  },
];

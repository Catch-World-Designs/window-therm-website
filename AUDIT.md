# Window Therm website — complete audit

Scope: React 19 + Vite + Tailwind single-page site (8 routes, hash routing). Audited 2026-11-24 on desktop, tablet (768px) and phone (375px) viewports.

## 1. What was checked
| Area | Method | Result |
|---|---|---|
| Content & business facts | Compared against supplied business details | Name, phone, email, address, 3 services match. Service area was too vague, now NY · MA · VT · NH |
| Media relevance | Reviewed every image and clip | Old footage was loosely related (city rain, couch, snow roof). Replaced, see section 3 |
| Media availability | HTTP check of every video, poster and photo URL | All 200 OK |
| Horizontal overflow | Measured `scrollWidth` vs viewport on all 8 routes at 375 and 768 | No overflow |
| Tap targets | Measured interactive element height at 375 | Video filter chips were 35px, raised to 44px. Header phone link is 32px (open) |
| Visual check | Browser screenshots: hero (desktop, tablet, phone), before/after, services, contact form | See section 3 for fixes |
| Build / types | `tsc --noEmit`, `vite build` | Clean |

## 2. Fixed in this pass
1. **Broken logo.** The Wix-hosted logo file no longer loads (width 0). Replaced with a text wordmark. Supply the original logo file to restore it.
2. **Irrelevant media.** Hero and all 10 clips plus all 8 photos swapped for window, snow/frost, measuring and warm-interior stock (Pexels).
3. **Misleading label.** "Filmed on Site" sat over stock footage. Now "Video Gallery".
4. **Service area.** Page titles, descriptions, JSON-LD `areaServed` and the hero now name NY, MA, VT and NH.
5. **Before/after labels overlapped on phones.** Labels shortened and resized on small screens.
6. **Hero eyebrow** broke "NH" onto its own line on phones. Area text no longer wraps.
7. **Tap targets** on the video filter chips.
8. **og:image** pointed at the old Wix photo. Now a hero still.
9. **Deployment**: Vite `base` set to relative so the site works under a GitHub Pages sub-path.

## 3. Open items (need your input or a decision)
| Priority | Item | Why it matters |
|---|---|---|
| High | **Social links** are bare homepages (facebook.com, x.com…) | They send visitors to generic sites. Provide real profile URLs or remove them |
| High | **Contact form only opens an email draft (`mailto:`)** | No data is stored or sent by the site. Visitors without a mail app lose their quote request. Use a form service (Formspree, Web3Forms) or backend |
| High | **Stock media, not real work** | Real installs and job photos convert better. Swap in when available (all media is configured in `src/data/site.ts`) |
| Medium | **Hash URLs (`/#/services`)** | Needed on GitHub Pages, but search engines index them poorly. Use a host with clean URLs plus prerendering for real SEO |
| Medium | Videos hotlinked from Pexels | No uptime guarantee, 1080p files are heavy. Self-host compressed copies for production |
| Medium | Logo file | Text wordmark is a placeholder |
| Medium | Header phone link is 32px tall | Below the 44px touch guideline |
| Low | Owner name absent everywhere | Add to About for trust |
| Low | JSON-LD lacks opening hours, geo and `sameAs` | Helps local search |
| Low | No `robots.txt`, sitemap or analytics | |
| Not measured | Colour contrast of the dim grey text on dark backgrounds, Lighthouse scores, screen-reader pass | Run before launch |

## 4. Strengths
- All copy and media driven from one data file (`src/data/site.ts`), easy to edit.
- Per-route titles and descriptions, LocalBusiness JSON-LD.
- Video is lazy loaded, pauses off-screen, falls back to stills on phones and for reduced-motion users.
- Sticky Call / Start Free Quote bar on mobile.
- Single-file build (about 437 kB, 122 kB gzipped).

## 5. Media credits
Videos and photos are free-licence stock from Pexels (pexels.com). Attribution is not required.

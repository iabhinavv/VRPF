# VRPF website — SEO architecture, keyword map and content plan

Prepared 27 October 2026. Covers what was built, why, and what comes next.

---

## 1. The three things that were wrong

**1. One page, no structure.** The old site was a single `index.html` with hash anchors
(`#services`, `#faq`). Google indexes pages, not anchors, so the entire site was competing for
exactly one position on one keyword. There was no robots.txt, no sitemap.xml, no schema markup,
and no unique title or description for any topic.

**2. Regulatory language that could not be defended.** The site described the team as
"NISM Certified Investment Advisors" and the meta description said "fee-only advisory".
Under the SEBI (Investment Advisers) Regulations 2013, *investment adviser* is a reserved term;
holding yourself out as one without RIA registration is a violation, and "fee-only advisory"
carries the same implication. NISM certification is an examination pass, not a registration.
All of that language is gone. The substance — that clients are the only people who pay you —
is now stated in words you are entitled to use, and is stronger copy for it.

**3. No reason for Google to rank you.** Google holds money advice to its highest evidence bar
(YMYL). A site with no depth, no topical coverage and no named author has nothing to rank.

---

## 2. Site architecture

19 pages, each with one job and one primary keyword.

### Money pages (buyers)
| URL | Primary keyword | Intent |
|---|---|---|
| `/` | financial planning India (brand + category) | commercial |
| `/financial-planning/` | personal financial planning services india | commercial |
| `/for-salaried-professionals/` | financial planning for salaried professionals india | commercial |
| `/for-nris/` | nri financial planning india | commercial |
| `/for-business-owners/` | financial planning for business owners india | commercial |
| `/retirement-planning/` | retirement planning services india | commercial |
| `/financial-planner-chandigarh/` | financial planner in chandigarh | local |

### Trust pages (close the sale, and rank on their own)
| URL | Primary keyword |
|---|---|
| `/how-it-works/` | financial planning process india |
| `/fees/` | financial planner fees in india / financial advisor cost india |
| `/faq/` | do i need a financial planner / planner vs investment adviser |
| `/about/` | brand |
| `/contact/` | brand |
| `/disclaimer/` | — (trust and compliance signal) |
| `/privacy-policy.html` | — (URL preserved, restyled into the new template) |
| `/terms-and-conditions.html` | — (URL preserved, restyled into the new template) |

### Content engine (brings strangers in)
| URL | Primary keyword |
|---|---|
| `/guides/` | hub |
| `/guides/how-much-money-do-you-need-to-retire-in-india/` | how much money do i need to retire in india |
| `/guides/esop-rsu-tax-india/` | esop rsu tax india |
| `/guides/nri-returning-to-india-financial-checklist/` | nri returning to india checklist |

**Why these three guides first.** One per audience you named, each a question with real search
demand where small sites already outrank large ones, and each links naturally to the money page
for that audience. The retirement guide is the strongest long-term asset — it is the question
every prospective client is already asking.

---

## 3. Competitor finding that shapes the strategy

The closest competitor is **Good Moneying** (Sector 35B, Chandigarh): SEBI-registered RIA,
fee-only, targeting exactly your two main audiences — professionals and NRI families. They have
a named founder with a CFP, a published book and nearly two decades of visible history.

**You cannot beat them on credentials, so do not try.** The head terms "fee-only financial
planner India" and "SEBI registered investment adviser" are closed to you — searchers filter for
registration, and claiming it would be a violation. The plan deliberately avoids those terms.

**Where you can win instead:**
- **Specific situations, not generic advice.** "ESOP tax + concentration for an Indian employee of
  a US company" is a narrower, winnable query than "financial planner".
- **The dashboard.** No competitor in this market shows clients a live monthly dashboard. It is a
  genuine differentiator, it reduces the buyer's perceived effort, and it is now featured on the
  home page, `/how-it-works/#dashboard` and every service page.
- **Speed.** A written plan in 7 days, stated plainly. Most Indian planning engagements run four
  to six weeks.
- **Chandigarh local.** The local SERP is thin — directories (Justdial, Advisorkhoj) and a handful
  of small firms. A real local page can rank with modest effort.

---

## 4. Copy approach (Hormozi, applied honestly)

Value is `(dream outcome × perceived likelihood) ÷ (time delay × effort)`. Anyone can inflate the
top half with bigger claims — which you have correctly refused to do. So the copy competes on the
bottom half, which is both more defensible and entirely truthful:

- **Time delay** — "a written plan in 7 days", stated in the hero, on every service page and in a
  timeline table on `/how-it-works/`.
- **Effort** — "one form, about an hour", "no app, no login, no spreadsheet", "we do the
  assembling".
- **Perceived likelihood** — the process shown step by step, the dashboard, quarterly reviews, and
  the specificity of the six health ratios.
- **Risk reversal** — a 14-day refund of the planning fee. **This is the one thing on the new site
  you must approve before publishing** (see §6).

The hero headline is `You earn well. You still can't say if you're on track.` — taken almost
verbatim from how people describe the problem in r/personalfinanceindia, where the recurring post
is a high earner who feels behind. Headlines that use the reader's own words outperform headlines
that use the seller's.

---

## 5. Technical SEO shipped

- Clean directory URLs (`/for-nris/`), one `<h1>` per page, unique title and meta description
  (all within SERP display limits), canonical tags on every page.
- **JSON-LD schema**: `FinancialService` + `ProfessionalService` organisation with full NAP and
  `areaServed`, `WebSite`, `Service` on each service page, `Article` on guides, `BreadcrumbList`
  throughout. Validated.
- **sitemap.xml** and **robots.txt** generated on every build. Robots explicitly welcomes GPTBot,
  PerplexityBot and ClaudeBot — AI answer engines increasingly send qualified traffic, and your
  guides are written to be citable.
- **Tailwind CDN removed.** It was a render-blocking script generating CSS at runtime, which hurts
  LCP — a ranking factor. Replaced with a 12KB static stylesheet in the same palette and type.
  Fonts load non-blocking. The only JavaScript is a 15-line mobile menu.
- `/dashboard/` excluded from robots and sitemap; it stays `noindex`.
- Internal linking: every guide links to its money page, every money page links to its guides,
  and persona pages cross-link. No orphan pages, no broken internal links.

### How to rebuild

```bash
cd "/Users/abhinavverma/Downloads/Claude/VRPF/VRPF-main"
python3 build_site.py
```

Content lives in `site/pages/*.html` and `site/guides/*.html` as HTML fragments with a small JSON
header. **Edit those, never the generated `index.html` files** — a rebuild overwrites them.
Adding a guide is one new file in `site/guides/` plus a card on the guides index.

---

## 6. Before you publish — decisions that are yours

1. **The refund guarantee.** `/fees/`, `/faq/` and the home page say: *"Tell us within 14 days of
   your plan walkthrough and we refund the fee in full."* It is the single biggest conversion lever
   on the site. Only keep it if you will honour it without argument. To remove it, delete the card
   marked `<!-- GUARANTEE BLOCK -->` in `site/pages/01-home.html` and the matching FAQ entries.
2. **Confirm the scope sentence is accurate.** The footer and `/disclaimer/` state that you do not
   recommend specific securities or schemes, do not hold or manage client money, and do not execute
   transactions. If any of that is not true of how you actually work, tell me and I will change the
   wording — or you need SEBI RIA registration.
3. **Tax figures in the guides.** Rates are stated as at October 2026 and labelled as such. Have
   your CA confirm the ESOP/RSU capital-gains rates and holding periods before publishing, since my
   information may predate the last Budget.
4. **The stray `VRPF_International/` folder** inside the repo is a duplicate of the old site and
   will be published as duplicate content. Delete it before pushing.
5. **"100+ clients" and "10+ years combined experience"** were carried over from the old site. Keep
   them only if they are defensible.

---

## 7. What is left to do

### Built, ready to push
All 19 pages (17 new + the two legal pages, whose URLs and text are preserved but which now
use the new template and nav), CSS, JS, builder, sitemap, robots. Verified in a browser on
desktop and mobile: no broken internal links, valid JSON-LD on every page, one `<h1>` per page,
titles and meta descriptions inside SERP display limits, and no horizontal scroll on a phone.

### Not yet done
- **Author bios.** You chose to stay anonymous. This is the biggest remaining cap on ranking — for
  money advice, Google and its quality raters look for a named, credentialled human. `/about/` has
  a "team" card ready for real profiles, and adding two named planners with NISM credentials and
  photos would do more for rankings than the next ten blog posts.
- **Google Business Profile.** You have a real office in New Chandigarh. A verified GBP is the
  single highest-return local SEO action and it is free. Category: "Financial planner". Same NAP
  as the footer, exactly.
- **Google Search Console + Bing Webmaster.** Verify the domain, submit the sitemap, request
  indexing for all 17 URLs. Without this, the new pages take weeks longer to be found.
- **An OG image** at `/Assets/vrpf-og.jpg` (1200×630). The meta tags already point at it.
- **The next 12 guides** (briefs below).
- **Calculators.** A retirement-corpus calculator and a term-insurance-cover calculator on the site
  would earn links and rank for high-volume queries. Best phase-2 investment after the guides.

### Content calendar — the next 12, in priority order

| # | Working title | Primary keyword | Links to |
|---|---|---|---|
| 1 | Old vs new tax regime: which is better for your salary | old vs new tax regime calculator | salaried |
| 2 | How much term insurance cover do you actually need? | how much term insurance do i need india | financial-planning |
| 3 | How big should your emergency fund be in India? | emergency fund india how much | financial-planning |
| 4 | Should you prepay your home loan or invest? | home loan prepayment vs investment | financial-planning |
| 5 | NPS vs PPF vs EPF: what belongs where | nps vs ppf vs epf | retirement |
| 6 | Why you probably own too many mutual funds | how many mutual funds should i have | salaried |
| 7 | NRE vs NRO accounts: which do you need? | nre vs nro account difference | NRIs |
| 8 | Is buying a flat in India worth it for an NRI? | should nri buy property in india | NRIs |
| 9 | How to pay yourself a salary from your own business | owner salary from business india | business owners |
| 10 | What a financial plan actually looks like (annotated) | what does a financial plan include | financial-planning |
| 11 | Planning a career break or sabbatical | sabbatical financial planning india | salaried |
| 12 | Retiring early in India: what the maths really says | fire movement india corpus | retirement |

Two a month is enough. Depth beats frequency: each should be at least as thorough as the three
already written, with the arithmetic shown.

### What to measure
- **Leading** (weeks): pages indexed in Search Console; impressions on the primary keywords above.
- **Mid** (2–4 months): clicks to `/fees/`, `/how-it-works/` and the guides; Calendly bookings
  attributed to organic.
- **Lagging** (6+ months): booked calls per month from organic search, and clients from them.

**How you would know this failed:** if after three months the 17 pages are indexed but impressions
on commercial keywords stay near zero, the problem is authority, not content — and the fix is the
author bios, the Google Business Profile and earning a handful of real citations, not more pages.

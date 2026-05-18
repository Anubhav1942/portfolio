# SEO + Analytics Strategy
## Anubhav Pandey Portfolio

---

## TLDR

Three goals: (1) rank for niche, high-intent searches around enterprise product design and sustainability UX, (2) understand exactly how hiring managers and recruiters move through the site, and (3) measure the one conversion that matters — resume download. Everything else is secondary signal.

---

## 1. SEO Strategy

### Technical SEO (already baked into the HTML)

Every page already has:
- Semantic HTML5 (`<main>`, `<header>`, `<article>`, `<nav>`, `<footer>`, `<aside>`)
- One `<h1>` per page
- Descriptive `<title>` tags: `[Page] — Anubhav Pandey, Product Designer`
- `<meta name="description">` per page (unique, under 160 chars)
- Open Graph tags (for LinkedIn and Twitter previews)
- Twitter Card meta
- JSON-LD structured data (Person schema on home, CreativeWork schema on case studies)
- `rel="canonical"` on every page
- `alt` text on all images (add as you add real screenshots)
- `rel="noopener noreferrer"` on all external links

**What to add once the site is live:**
- `robots.txt` — allow all, no sensitive paths
- `sitemap.xml` — list all pages: home, about, work/secureshare, work/smartbalance, work/greenskills, work/santhe, blog/index, each blog post
- Submit sitemap to Google Search Console

---

### On-Page SEO: Keywords to Target

Do not chase generic terms like "product designer portfolio." Target niche queries where intent is specific and competition is low.

**Primary keywords (target in page titles and H1s):**
- `enterprise B2B product designer`
- `sustainability compliance product design`
- `founding designer portfolio`
- `ESG product designer`

**Case study-specific long-tail (target in case study page titles and body copy):**
- `ISCC mass balance UX design` — SmartBalance (virtually no competition for this phrase)
- `external contributor platform design case study`
- `multi-tenant SaaS UX design`
- `ESG reporting AI agent UX`
- `compliance product design B2B`

**Blog post opportunities (write to rank for these queries):**
- "how to design role-based access for compliance products"
- "UX for ISCC mass balance certification"
- "designing for external users without platform accounts"
- "cognitive continuity in enterprise SaaS"

---

### Content SEO: Blog Posts

You have 3 posts already. For each post, make sure:
1. The `<title>` matches the search query you are targeting
2. The first paragraph contains the keyword naturally
3. The post has at least 800 words (preferably 1,200+)
4. Internal links point to the relevant case study where applicable

Blog post ideas that would rank well and reinforce your positioning:
- "The Alias Problem: When One Product Name Isn't Enough" — links to SecureShare
- "Why I Stopped Asking Users What They Wanted and Started Watching Sessions" — about the member flow story
- "Designing for a Domain You Don't Understand Yet: ISCC Mass Balance" — links to SmartBalance

---

## 2. Google Analytics 4 Setup

### Step 1: Create GA4 Property
1. Go to analytics.google.com
2. Create a new property (Google Analytics 4)
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. Replace every instance of `G-XXXXXXXXXX` in all HTML files with your actual ID

### Step 2: Custom Events Already Wired Up

The following events are already firing via `main.js` — no additional setup needed:

| Event Name | Trigger | Parameters |
|---|---|---|
| `resume_download` | Resume PDF clicked | `source`: hero / nav / footer / about |
| `case_study_view` | Case study link clicked from home | `case_study`: secureshare / smartbalance / etc. |
| `blog_post_click` | Blog item clicked | `post_title` |
| `contact_click` | Email or LinkedIn clicked | `channel`: email / linkedin |
| `external_link_click` | Any outbound link clicked | `destination` |
| `scroll_depth` | 25 / 50 / 75 / 100% scroll | `depth_pct`, `page` |
| `section_visible` | Section enters viewport (40% threshold) | `section`, `page` |
| `case_study_read_time` | Time milestones on case study pages | `seconds_spent`, `case_study` |
| `case_study_exit` | User leaves a case study page | `seconds_spent`, `case_study` |

### Step 3: Set Up Conversions in GA4

Mark these events as Conversions in GA4 (Admin → Conversions):
1. `resume_download` — primary conversion, this is the north star metric
2. `contact_click` with `channel = email` — secondary conversion
3. `contact_click` with `channel = linkedin` — secondary conversion

---

## 3. Metrics and What to Track

### North Star Metric
**Resume downloads.** Everything else is leading indicator or diagnostic.

### Primary Metrics (check weekly)

| Metric | What it tells you | Where to find in GA4 |
|---|---|---|
| Resume downloads (total) | Portfolio is working | Conversions > resume_download |
| Resume downloads by source | Where valuable traffic comes from | Events > resume_download, breakdown by `source` param |
| Sessions | Volume of traffic | Reports > Acquisition |
| Engagement rate | Are people reading or bouncing | Reports > Overview |
| Average engagement time | Are people spending real time | Reports > Overview |

### Page-Level Metrics (check per page, bi-weekly)

| Page | Key question | Metric |
|---|---|---|
| Home / index.html | Are visitors clicking into case studies? | Case study click events, section_visible for work section |
| SecureShare case study | Are people reading it fully? | Scroll depth events, case_study_read_time |
| About page | Do people convert after reading the about page? | Resume download events from about source |
| Blog posts | Are posts driving new organic sessions? | Organic traffic per post, engagement time |

### Traffic Source Metrics (check monthly)

| Source | Why it matters |
|---|---|
| Organic search | Long-term — which keywords are ranking |
| Direct | People who typed the URL — likely referrals or remembered the site |
| Referral | LinkedIn, job boards, directories — where are qualified leads coming from |
| Social | LinkedIn specifically — is your LinkedIn profile converting visits |

### Entry and Exit Page Tracking (GA4 natively tracks these)

**Entry pages** (Landing pages report in GA4 → Reports → Engagement → Landing pages):
- If most people land on the home page: your LinkedIn profile is sending them there correctly
- If people land on a case study directly: you may have an organic ranking or someone shared the direct link
- If people land on the About page: someone is sending them there specifically (a referral or LinkedIn recommendation)

**Exit pages** (not directly in standard GA4 — use the `case_study_exit` custom event):
- High exit rate from home page without a case study click: the hero or work grid is not converting
- High exit from SecureShare before the sub-sections: the top-level narrative is not retaining readers
- Exit from about page without resume download or contact click: the CTA is weak or the narrative is not landing

### Funnel to Monitor

```
Session starts
     ↓
Hero section viewed (section_visible: hero)
     ↓
Work section viewed (section_visible: work)
     ↓
Case study clicked (case_study_view)
     ↓
Case study read to 75%+ scroll depth
     ↓
About page visited
     ↓
Resume downloaded or contact clicked  ← CONVERSION
```

Drop-off at each step tells you what to fix next.

---

## 4. Custom Dimensions to Register in GA4

Go to GA4 Admin → Custom Definitions → Custom Dimensions. Register:

| Name | Scope | Description |
|---|---|---|
| `case_study` | Event | Which case study was viewed or clicked |
| `resume_download_source` | Event | Where on the site the resume was downloaded from |
| `scroll_depth_pct` | Event | Scroll depth milestone (25/50/75/100) |
| `section_name` | Event | Which section became visible |
| `blog_post_title` | Event | Which blog post was clicked |

---

## 5. Search Console Setup

Once the site is live:
1. Go to search.google.com/search-console
2. Add your domain as a property
3. Verify ownership (DNS TXT record, or HTML file upload)
4. Submit `sitemap.xml`
5. Check after 2–4 weeks:
   - Which queries are bringing people to the site
   - Which pages have impressions but low CTR (fix the meta description)
   - Which case study pages are indexed

---

## 6. File Checklist Before Launch

- [ ] Replace `G-XXXXXXXXXX` with real GA4 Measurement ID in all HTML files
- [ ] Replace `https://anubhavpandey.com` with actual domain in all canonical and OG tags
- [ ] Add `og-image.png` to `assets/` folder (1200x630px, shows on LinkedIn previews)
- [ ] Add `anubhav-pandey-resume.pdf` to `assets/` folder
- [ ] Add `favicon.ico` or SVG favicon to root
- [ ] Create `robots.txt` in root
- [ ] Create `sitemap.xml` in root
- [ ] Replace `G-XXXXXXXXXX` in JSON-LD where applicable
- [ ] Test: open site locally, open browser console, verify GA4 events fire (use GA4 DebugView)
- [ ] Test: open site on mobile — check nav, hero stats, project grid, blog list
- [ ] Test: click resume download — verify file downloads, verify GA4 event fires

---

*Strategy compiled May 2026.*

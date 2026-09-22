# MD MOMIN ALI — PORTFOLIO SPECIFICATION & MASTER PROMPTS ARCHIVE

This document preserves all user requirements, design guidelines, prompts, project rosters, and architectural decisions for MD Momin Ali's personal portfolio website.

---

## 1. Core Identity & Visual Design Direction

- **Owner**: MD MOMIN ALI
- **Location**: Rajshahi, Bangladesh
- **Education**: B.Sc. in Computer Science & Engineering (Varendra University, CGPA 3.93)
- **Primary Roles & Skills**:
  - **Shopify Store Developer** (Liquid, Custom Themes, Speed & UX Optimization)
  - **Google Merchant Center (GMC) Specialist** (Misrepresentation & Policy suspension recovery, 100% approval, Shopping feed setup)
  - **Social Media Manager & Strategist** (Facebook, YouTube, TikTok, Instagram growth, channel management, SEO metadata)
  - **AI Content Specialist & Creative Producer** (AI product promotional videos, UGC commercials, character & cartoon animations)
  - **E-Commerce Product Researcher** (Winning product analysis, profit margin calculation, competitor spy data)
  - **Full-Stack Engineer** (Clean semantic code, React, JavaScript, zero-bloat static sites)
- **Design System & Palette**:
  - Warm Off-White / Cream background: `#F7F4EC` / `#EFECE4`
  - Deep Dark Forest Green / Teal: `#0A2625` / `#0F3837`
  - Subtle Gold / Mustard accents: `#C89D5C` / `#B88B46`
  - Clean Soft Beige borders: `#E2DDD1` / `#D4CEBF`
  - Typography: Playfair Display / Cinzel / Outfit / Inter
  - Card & Image Container Rule: Strictly compact 16:9 ratio (`max-height: 225px; object-fit: cover;`), minimalistic, clean 3-column layouts.

---

## 2. Master Archive of All User Prompts

### Prompt 1: Portfolio Identity & Initial Instructions
> Remember my portfolio and preserve existing structure, typography, colors, animations, and responsiveness.

### Prompt 2: Digital Marketing & Branding Section
> Showcase practical branding and creative-content work in a premium modern style.
> Featured projects:
> 1. **RoyLux — Fashion Brand Content** (Branding • Social Media • AI Product Promotion)
> 2. **UGC — Product Promotion Videos** (UGC • Short-Form Video • Product Marketing)
> 3. **Cartoon Video — Animated Brand Content** (Creative Content • AI Animation • Storytelling)
> Include direct links to external Google Drive assets and detailed modal view.

### Prompt 3: Clean Square / 16:9 Image Aspect Ratio & Minimalistic Cards
> Constrain all project card image containers to clean, compact proportions without massive oversized elements.

### Prompt 4: Work Categories Navigation on Homepage
> Replace single-project carousel on homepage with a category-based portfolio section highlighting areas of expertise:
> - Shopify Store Development
> - Google Merchant Center (GMC)
> - Social Media Management
> - AI Video Creation & Creative Content
> - Full-Stack Web Development & Modern Apps
> - Digital Marketing, SEO & Growth Systems
> Eliminate redundant empty space above Work Categories.

### Prompt 5: Social Media Management Deep-Dive
> Add complete Social Media Management showcase featuring authentic client work:
> 1. Coco Beans — YouTube Channel Management
> 2. Royal Hair Wigs — Facebook Page Management (Using custom cover photo mockup)
> 3. LeadLux — B2B Agency Social Presence
> 4. Modeflo Fashion — Social Merchandising
> 5. Savon Luxe — Instagram Organic Growth
> 6. TechGizmo — Multi-Platform Tech Reels
> 7. EcoHome Living — Pinterest & Meta Growth
> Strict rule: Do NOT put UGC or RoyLux video production inside Social Media Management; keep them in Branding & AI Video Creation.

### Prompt 6: Header, Services & Details Page Expansion
> Update header and hero to showcase skills: Social Media Management, AI Content Specialist, and Product Research on homepage and details page (`services.html`).
> Add services 07 (Social Media Management & Strategy), 08 (AI Video Creation & Creative Content), and 09 (E-Commerce Product Research) across homepage and services page.
> Update Pricing Packages to include these deliverables.

### Prompt 7: SMM Filtering Fix, Homepage Featured Projects, and Title Consolidation
> 1. Fix Works page filtering: The Social Media Management section (`#social-media-management`) must ONLY be visible when 'All Projects' or 'Social Media' tabs are active. For all other filters (Shopify, GMC, Branding, Apps, Webdev, Growth, AI Content), hide the SMM section.
> 2. Add Featured Projects to Homepage: Right after Work Categories, add a dedicated section showcasing selected Shopify projects (Modeflo, Caspier, Zalivia) and selected Social Media Management projects (Coco Beans YouTube, Royal Hair Wigs Facebook, LeadLux Agency).
> 3. Standardize main titles & roles across all pages to: "Shopify Developer, Full-Stack Developer & Digital Marketer".
> 4. Add an About Spotlight section right above Work Categories (under Stats) with a prominent button: "See About Me in Detail" linking to `about.html`.

---

## 3. Project Roster Across All Categories

| # | Project Name | Category | Primary Asset | Drive / Live Link |
|---|---|---|---|---|
| 1 | Modeflo | Shopify Development | `shopify-modeflo.jpg` | Live Theme Demo |
| 2 | Caspier | Shopify Development | `shopify-caspier.jpg` | Live Theme Demo |
| 3 | Zalivia | Shopify Development | `shopify-zalivia.jpg` | Live Theme Demo |
| 4 | GMC Misrepresentation Recovery | Google Merchant Center | `gmc-approval.png` | Account Clearance Case Study |
| 5 | Seveck Wellness GMC Fix | Google Merchant Center | `gmc-seveck-wellness.png` | Approval Case Study |
| 6 | Southern Luxe Savon GMC | Google Merchant Center | `gmc-southern-luxe.png` | Account 5782690120 |
| 7 | Light Keepers Shopping Ads | Google Merchant Center | `shopping-campaign-lightkeepers.png` | Google Ads Dashboard |
| 8 | Coco Beans YouTube Channel | Social Media Management | `smm-youtube-cocobeans.jpg` | YouTube Studio & SEO Data |
| 9 | Royal Hair Wigs Facebook | Social Media Management | `smm-royal-facebook.jpg` | Meta Business Suite & Creative |
| 10 | LeadLux Agency Growth | Social Media Management | `smm-leadlux-linkedin.jpg` | B2B Funnel & Social Media |
| 11 | Modeflo Fashion Socials | Social Media Management | `smm-modeflo-instagram.jpg` | Instagram Visual Feed |
| 12 | Savon Luxe Organic | Social Media Management | `smm-savon-reels.jpg` | Meta Reels Campaign |
| 13 | TechGizmo Viral Tech Reels | Social Media Management | `smm-techgizmo-tiktok.jpg` | Short-Form TikTok & Shorts |
| 14 | EcoHome Living Meta Growth | Social Media Management | `smm-ecohome-multi.jpg` | Pinterest & Facebook Ads |
| 15 | RoyLux Fashion Branding | Branding & AI Video | `roylux-branding.jpg` | Google Drive Asset Folder |
| 16 | UGC Product Promotion Videos | Branding & AI Video | `ugc-promotion.jpg` | Google Drive Asset Folder |
| 17 | Cartoon Video Animated Content | Branding & AI Video | `cartoon-content.jpg` | Google Drive Asset Folder |
| 18 | Fair Prices Comparison App | Web Development & Apps | `fair-prices-dashboard.png` | Web Application Demo |
| 19 | DeshBrief News Portal | Web Development & Apps | `deshbrief-portal.png` | Live Portal Demo |

---

## 4. Full Services & Solutions Architecture

1. **01: Shopify Store Setup & Theme Development**: Custom Liquid, UX architecture, cart drawer, trust badges.
2. **02: Full-Stack Web Development**: Modern responsive applications, React, JavaScript, clean static architecture.
3. **03: Landing Pages & Conversion Design**: Editorial storytelling, high CTR, CRO layout, social proof modules.
4. **04: Speed, SEO & Core Web Vitals**: Google PageSpeed audit, asset compression, schema markup, on-page SEO.
5. **05: Paid Ads & Google Merchant Center**: Misrepresentation policy fixes, feed attributes sync, Google Shopping campaigns.
6. **06: Lead Generation & WhatsApp Marketing**: B2B verified prospect mining, WhatsApp API funnels, local business outreach.
7. **07: Social Media Management & Strategy**: Multi-channel management (YouTube, Facebook, Instagram, TikTok), content calendar, SEO captions, audience retention.
8. **08: AI Video Creation & Creative Content**: High-converting AI product ads, UGC promotional reels, animated storytelling videos.
9. **09: E-Commerce Product Research & Market Intelligence**: Winning product discovery, competitor analysis, profit margin calculation, supplier vetting.

---

## 5. Pricing Packages Architecture

- **Starter Audit ($199 / One-Time)**:
  - Full Shopify / Website Technical & Speed Audit
  - Google Merchant Center Compliance Diagnostic
  - Social Media Profile & Content Health Check
  - Conversion & UX Breakdown Report
  - Actionable 7-Day Fix Checklist
  - 1-on-1 Consultation Strategy Call
- **Growth Build ($499+ / Most Popular)**:
  - Complete Shopify Store Setup or Custom Liquid Rebuild
  - 100% GMC-Approved Storefront & Policy Clearance
  - High-Converting Hero, Product & Collection Pages
  - 5x Custom AI Video Creatives & Social Content Assets
  - Mobile Speed & Core Web Vitals Optimization
  - Trust Badges & Social Proof Integrations
  - 14 Days Post-Launch Priority Support
- **Scale Package ($999+ / Complete Solution)**:
  - Full Custom Theme & Scalable E-Commerce Architecture
  - Complete Google Merchant Center Setup & Policy Clearance
  - Google Shopping & Search Ads Campaign Launch
  - Dedicated Monthly Social Media Management (Content, Scheduling & SEO)
  - 10x High-Converting AI Video Commercials & UGC Ads
  - Deep-Dive Winning Product Research & Competitor Intelligence
  - B2B Lead Generation & Automated WhatsApp Outreach Funnel
  - Advanced SEO & Structured Data Schemas
  - 30 Days Priority Technical & Growth Support

---

## 6. Prompt History & Implementation Log

### Prompt 8: Mobile Responsiveness, Hero 1-Line Name, Compact 2-per-category Homepage Showcase & Capability Enrichment
- **Hero Typographic Identity Fix**: Restructured `.hero-typographic-identity` into `.hero-name-header` + `.hero-big-name` with `white-space: nowrap !important;` and stacked `.hero-role-tag` underneath to prevent "MD MOMIN ALI" from wrapping onto 3 lines.
- **Underline Collision Fix**: Adjusted `.hero-headline .highlight::after` `bottom: -2px;` to avoid intersecting with descenders of letters (e.g. 'g').
- **Left Hero CTA Deduplication**: Restored left CTA buttons to `Explore Portfolio` and `Let's Work Together`, retaining `See About Me in Detail` exclusively on the visual card and About spotlight.
- **Compact Categorized Homepage Showcase**: Replaced bulky 6-card display with sleek, 2-project-per-category showcase:
  - *Shopify*: Modeflo & Caspier
  - *Social Media*: Coco Beans & Royal Hair Wigs
  - *Branding & AI Creative*: RoyLux & UGC Product Video Ads
  - *Web Apps & Tools*: Fair Prices & DeshBrief
- **Capabilities & Bio Narrative**: Enriched hero subtext, positioning bullets, `about.html`, and `services.html` with explicit mentions of managing social media accounts from scratch, brand audience engagement, promotional poster design, social post design, UGC video ads, and e-commerce product design.
- **Mobile Responsive Polish**: Added 2-column `stats-grid` on tablet/mobile, 1-column `compact-projects-grid`, mobile-friendly card paddings, and font clamp scaling.

### Prompt 10: Deduplication of Homepage Branding Section
- **Removed Duplicate Block**: Removed the duplicate `BRANDING & CREATIVE ASSETS` block (featuring RoyLux & UGC video ads) from `#featured-projects` on `index.html`.
- **Streamlined Compact Showcase**: The homepage showcase now presents 3 clean, essential disciplines:
  1. Shopify Storefronts (Modeflo & Caspier)
  2. Social Media Management (Coco Beans & Royal Hair Wigs)
  3. Web Applications & Tools (Fair Prices & DeshBrief)
- **Full Branding Preserved**: The complete Branding & Creative solutions remain accessible in the top Work Categories grid and on `works.html?filter=branding`.
- **Build & Deploy**: Re-compiled with Vite (0 errors), published to `gh-pages`, and pushed to `origin/main`.

### Prompt 12: Motion Designer, Video Editor, Shopify Developer & Digital Marketer Repositioning
- **User Request**: Reposition portfolio for applying to Motion Graphics / Motion Design positions. Add Motion Design, Video Editor, Shopify & Digital Marketer to the header, about section, and throughout all pages.
- **Header & Navbar Brand**: Updated `<span class="brand-sub">` to `MOTION DESIGNER • VIDEO EDITOR • SHOPIFY • DIGITAL MARKETER` across all pages (`index.html`, `about.html`, `works.html`, `services.html`, `certifications.html`, `contact.html`).
- **Responsive Layout Protection**: Updated `.brand-sub` CSS in `components.css` with responsive max-width and ellipsis constraints to prevent header overflow on narrow screens.
- **Hero & Eyebrow**: Updated hero headline to `Motion Designer, Video Editor, Shopify & Digital Marketer` with dynamic subtext emphasizing motion design, commercial video editing, After Effects, kinetic typography, and UGC ads alongside Shopify & GMC.
- **Hero Visual Card**: Updated role tag to `MOTION DESIGNER • VIDEO EDITOR • SHOPIFY • DIGITAL MARKETER` and eyebrow to `CREATIVE MOTION ENGINEER`.
- **About Sections & Bio**:
  - `index.html`: Core positioning updated to `Motion Designer • Video Editor • Shopify Developer • Digital Marketer`, with updated narrative highlighting the synergy between motion design, commercial video editing, CS engineering, and Shopify conversion.
  - `about.html`: Updated bio, portrait card role, timeline (`Motion Designer, Video Editor & Shopify Specialist`), and expanded the creative skills box into `🎬 Motion Design & Video Editing` (After Effects, Premiere Pro, Motion Graphics, Keyframe Animation, Kinetic Typography, CapCut Pro, Sound Design, Color Grading).
- **Global Footers & Meta Tags**: Standardized across all 6 pages with updated SEO titles, meta descriptions, and OpenGraph metadata.
- **Data & Configuration**: Updated `src/data/profile.js` and `README.md`.

### Prompt 13: Royal Hair Wigs Lead Creative Experience, 2+ Years Highlight & Services Enrichment
- **User Request**: Add Motion Designer & Video Editing skills into services areas across the site; add current position at Royal Hair Wigs as Motion Designer, Video Editor & Social Media Poster Designer (October 2023 — Present); highlight 2+ Years Experience prominently on the homepage.
- **Services Architecture (Homepage & Services Page)**:
  - Updated Service 08 across `index.html` and `services.html` to: **Motion Design, Video Editing & Creative Commercials** (`id="motion-video"`).
  - Enriched deliverables with After Effects motion graphics, Premiere Pro & CapCut Pro video editing, kinetic typography, promotional posters, and high-CTR UGC video ads.
  - Updated pricing packages in `services.html` to include motion graphics, video commercials, and promotional posters.
  - Synchronized `src/data/services.js`.
- **Royal Hair Wigs Experience (Oct 2023 — Present)**:
  - Added as primary featured professional role in the **Experience Timeline** on `about.html` and `src/data/profile.js`: *Motion Designer, Video Editor & Social Media Poster Designer at Royal Hair Wigs*.
  - Updated portrait card on `about.html` with `💼 Experience: 2+ Years (Royal Hair Wigs since Oct 2023)`.
- **Homepage 2+ Years Experience Integration**:
  - Hero Badge: `2+ YEARS EXPERIENCE • AVAILABLE FOR WORK • RAJSHAHI, BD`.
  - Stats Bar: `2+ Years Experience`, `19+ Projects Shipped`, `10+ Shopify Storefronts`, `100% Client Focus`.
  - Hero Checklist: Added bullet highlighting 2+ years as Motion Designer, Video Editor & Poster Designer at Royal Hair Wigs (since Oct 2023).
  - About Spotlight: Added `⭐ Experience: 2+ Years Professional Experience (Royal Hair Wigs, since Oct 2023)`.

### Prompt 14: NASA International Space Apps Challenge 2025 (2nd Runner Up) Portfolio Integration
- **User Request**: Add NASA Space Apps Challenge 2025 2nd Runner Up achievement as a main achievement on the homepage. Include project YouTube video link (`https://youtu.be/fQgrHd1F4a4?si=HouRaVhOMJ5AkJf0`), upload award/trophy photo, and provide a comprehensive Case Study detailing the dual role as Lead Video Editor & Technical/Scientific Researcher for project *Terra Farm*. Build and deploy to GitHub Pages.
- **Assets Integrated**:
  - `nasa-space-apps-runnerup.jpg` (User holding 2nd Runner Up trophy with official poster).
  - YouTube Link: `https://youtu.be/fQgrHd1F4a4?si=HouRaVhOMJ5AkJf0` (Title: *Terra Farm || Nasa Space apps challenge 2025*).
  - `cert-nasa.png` (Galactic Problem Solver Certificate presented by Dr. Keith Gaddis, Program Scientist, NASA).
- **Homepage (`index.html`)**:
  - Added golden glowing Hero badge: `🏆 2ND RUNNER UP — NASA SPACE APPS CHALLENGE 2025`.
  - Added hero bullet: Lead Video Editor & Technical Researcher for project *Terra Farm*.
  - Stats bar updated to include: `2nd Runner Up (NASA Space Apps)`.
  - Standalone **Featured Global Achievement Spotlight**: High-impact cosmic card with gold glow, 4 capability pillars (Cinematic Video Editing, Motion Design & HUDs, Scientific Research, Sound Design), direct YouTube watch action, and case study modal trigger.
  - Featured Projects showcase: Added Terra Farm marquee award block.
  - About Spotlight updated with major achievement.
- **Works Page (`works.html`) & Modal**:
  - Flagship featured project card at top of grid with YouTube link and interactive Case Study modal trigger.
  - Multi-section deep-dive Case Study covering Project Overview, Role as Video Editor, Role as Researcher, High-Stakes Evaluation Challenge, Pacing/Motion/Audio Strategy, and Recognition/Awards.
- **Certifications (`certifications.html`) & About (`about.html`)**:
  - Upgraded NASA entry to 2nd Runner Up with trophy photograph, YouTube link, and honors distinction.
  - Added to About portrait card and Experience timeline (October 2025).
- **Data & Build**:
  - Synchronized `src/data/projects.js`, `src/data/certificates.js`, `src/data/profile.js`.
  - Added styles in `src/styles/components.css`.


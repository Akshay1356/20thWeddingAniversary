# நூறு வருஷம் (Nooru Varusham) — 20th Wedding Anniversary Celebration Website

A custom-designed, emotional and celebratory digital gift celebrating the **20th Wedding Anniversary of M. Prakash & P. Anitha** (27 November 2006 — 27 November 2026).

---

## 🌟 Key Features

1. **Midnight Countdown & Content Protection Experience**
   - **Target Unlock**: Exactly **27 November 2026, 12:00:00 AM IST** (`2026-11-27T00:00:00+05:30` / UTC `2026-11-26T18:30:00Z`).
   - Displays a full-screen luxury countdown with champagne gold accents, floating particles, traditional Tamil Kolam motifs, an ornate wax-sealed envelope, and an animated golden lock.
   - Pinned to authoritative server-verified time (`/api/time`) to prevent device clock tampering.
   - Enforced by Next.js middleware (`src/middleware.ts`) blocking private photograph requests (`403 Forbidden`) until midnight.
   - **Continuous Background Music**: *"Nooru Varusham"* plays automatically during the countdown and transitions seamlessly without pausing, restarting, or reloading.
   - **Automatic Midnight Unlock**: At 00:00:00:00, the golden lock opens, fireworks and golden confetti erupt, and the anniversary surprise is unveiled.

2. **Opening Interactive Surprise Screen**
   - Elegant ivory envelope sealed with an ornate burgundy & champagne gold wax seal stamped with **"20" & "P & A"**.
   - Floating golden sparkle particles and traditional Tamil Kolam ornamental motifs.
   - On clicking **"Open Your Surprise"**:
     - The envelope unfolds with realistic 3D origami flap animation.
     - Playback of *"Nooru Varusham"* continues uninterrupted.
     - Golden confetti and sparkles burst across the viewport.
     - Smooth cinematic transition reveals the grand anniversary celebration.

3. **Grand Anniversary Hero**
   - Full-screen editorial visual composition celebrating:
     - **நூறு வருஷம்** (Nooru Varusham)
     - **M. Prakash & P. Anitha**
     - **Happy 20th Wedding Anniversary**
     - *27 November 2006 — 27 November 2026*
     - *"Twenty years down, a lifetime to go."*
   - Features the vibrant traditional couple portrait alongside sacred temple blessing moments in an ornate gold leaf frame.
   - Smooth animated scroll indicator.

4. **Chapter I: Where It All Began (2006)**
   - Vintage photo album presentation with textured parchment paper, brass corner brackets, and handwritten captions.
   - Features the earliest travel memories (ferry journey across serene waters, coastal fort, first flight with jasmine blossoms).

5. **Twenty Years of Togetherness (Milestones)**
   - Viewport-triggered animated number counters:
     - **20 Beautiful Years** (*இருபது ஆண்டுகள்*)
     - **240 Wonderful Months** (*இருநூற்று நாற்பது மாதங்கள்*)
     - **7,305+ Days Together** (*ஏழாயிரத்து முந்நூறு நாட்கள்*)
     - **&infin; Countless Memories** (*எண்ணற்ற நினைவுகள்*)
   - Styled with oversized editorial serif numbers, gold gradients, and emotional descriptions.

6. **From Then to Now (Interactive Comparison)**
   - Dual-mode photographic comparison between their early 2006 journey and their 20-year milestone.
   - Features both an interactive touch-and-drag slider with a gold coin divider and a graceful side-by-side view.

7. **Chapter II: The Beautiful Life You've Built Together (Family & Parenting)**
   - Centerpiece: Grand extended family wedding reception stage with all generations united, grandparents seated, and son in front.
   - The journey of parenting:
     - Father holding toddler son on the car roof during a road trip
     - Mother carrying infant son on Pamban bridge with the sea breeze dancing in her saree
     - Mother gently introducing her baby to the ocean waves
     - Sailing together on a Kerala houseboat
     - Quiet family vacations, lush courtyards, and Delhi explorations.

8. **Chapter III: 20 Years. Countless Memories. (Living Archive Gallery)**
   - Filter tabs: *All Moments (26)*, *Couple Journey*, *Family & Roots*, *Travel Adventures*, *Festivals & Blessings*.
   - Asymmetrical editorial layouts, Polaroid framing, and photo tags.
   - Touch-friendly full-screen Lightbox with zoom, previous/next buttons, and keyboard navigation (`Left`/`Right`/`Esc`).

9. **Chapter IV: A Little Letter for Amma & Appa**
   - Interactive wax-sealed envelope that opens on click.
   - Displays a handwritten parchment letter signed: *"With lots of love, Your Son"*.
   - Easily editable in a single configuration file.

10. **Grand Finale & "Celebrate Again"**
    - Commemorative dual-photo composition.
    - *"20 Years of Love. Here's to a Hundred More."*
    - **நூறு வருஷம் — இனிய திருமண நாள் வாழ்த்துகள்!**
    - Interactive **"Celebrate Again"** button triggering an explosion of golden fireworks and confetti.

11. **Background Music Controller**
    - Floating pill controller in deep burgundy and gold.
    - Equalizer audio waveform animation while playing.
    - Play / Pause / Mute / Volume controls, designed to handle mobile browser autoplay policies reliably.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations & Motion**: Motion (`motion/react`) & GSAP
- **Celebration Effects**: Canvas Confetti
- **Typography**:
  - English Serif: *Cormorant Garamond* & *Cinzel*
  - Tamil Script: *Noto Serif Tamil*
  - Body: *Plus Jakarta Sans*
  - Handwritten Letter: *Caveat*
- **Audio**: Native HTML5 Audio API

---

## ⚙️ How to Customize Photo Placements & Content

All text, milestone numbers, letter paragraphs, and photo placements are managed in one central file:
👉 **`src/config/anniversaryData.ts`**

---

## 🚀 Running the Project Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🔒 Privacy & Deployment Guide

This website contains private family memories. To protect family privacy:
- The website is configured with `robots: { index: false, follow: false }` to prevent search engines from indexing the site.
- Raw files in `raw_assets/` are included in `.gitignore`.
- Next.js middleware protects `/images/*` until the exact unlock time.
- For private deployment to show your parents:
  1. **Vercel**: Deploy via private GitHub repository, and optionally enable **Password Protection** in *Project Settings > Deployment Protection*.
  2. **Cloudflare Pages**: Deploy with **Cloudflare Access (Zero Trust)** to require a PIN or family email login before loading.
  3. **Local Wi-Fi Network**: Run `npm run start` on your laptop connected to your home Wi-Fi and open the network IP (e.g., `http://192.168.1.x:3000`) directly on your parents' phone or tablet!

# Jaymond Mach — Portfolio

A sleek, dark-mode portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring liquid glass UI aesthetics.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Click **Deploy** — Vercel auto-detects Next.js

## 📁 Project Structure

```
app/
  components/
    Navbar.tsx       # Floating glass pill nav
    Hero.tsx         # Landing section with liquid blob bg
    Projects.tsx     # Selected works grid + capabilities
    Experience.tsx   # Timeline + skills sidebar
    Contact.tsx      # CTA + links
    Footer.tsx       # Footer with scroll-to-top
  globals.css        # Global styles + glass utility classes
  layout.tsx         # Root layout
  page.tsx           # Assembles all sections
```

## ✏️ Customization

- **Resume/links**: Update `app/components/Contact.tsx` and `app/components/Footer.tsx`
- **Projects**: Edit the `projects` array in `app/components/Projects.tsx`
- **Experience**: Edit the `experiences` array in `app/components/Experience.tsx`
- **Skills**: Edit `skillGroups` in `app/components/Experience.tsx`

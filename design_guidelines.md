# Developer Portfolio Design Guidelines

## Design Approach
**Selected Framework:** Material Design + Modern Developer Portfolio Patterns (inspired by Vercel, Linear, and GitHub aesthetics)

**Core Principles:**
- Tech-forward minimalism with sophisticated motion design
- Glass-morphism and depth through elevation
- Cinematic scroll-driven experience
- Dark theme with high contrast for readability

## Typography System

**Font Families:**
- Primary: Inter (headings and UI) via Google Fonts
- Monospace: JetBrains Mono (code snippets, tech stack badges)

**Hierarchy:**
- Hero Title: 4xl to 6xl, font-bold (72px desktop)
- Section Headings: 3xl to 4xl, font-bold (48px desktop)
- Project Titles: xl to 2xl, font-semibold
- Body Text: base to lg, font-normal
- Tech Badges: sm, font-medium uppercase tracking-wide

## Layout & Spacing

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-6 to gap-8
- Card padding: p-6 to p-8
- Container max-width: max-w-7xl with px-6

**Grid Systems:**
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- Skills marquee: Two horizontal rows, full-width
- Experience timeline: Single vertical column, max-w-4xl centered

## Component Library

### Navigation Bar
- Sticky header with backdrop-blur-lg glass-morphism effect
- Height: h-16 to h-20
- Links with hover underline animation (border-b transition)
- "Download Resume" button: pill-shaped with icon, elevated on hover
- Mobile: Hamburger menu transforming to full-screen overlay

### Hero Section
- Full viewport height (min-h-screen) with flex centering
- Animated gradient background (subtle moving mesh gradient or particle dots)
- Text enters from bottom (y: 50 to y: 0) with stagger delay
- Typewriter effect cycles through 3 roles with 2s intervals
- Two CTAs: Primary (filled) + Secondary (outline) with gap-4
- Responsive: Stack vertically on mobile with text-center

### Skills Marquee
- Two infinite horizontal scrolling rows
- Row 1: Frontend/Tools scrolling right-to-left
- Row 2: Backend/Database scrolling left-to-right
- Skill pills: px-6 py-3, rounded-full, flex items with icon + text
- Hover state: Pause animation, scale-105, glow effect via shadow-lg
- Speed: 30-40 seconds per complete scroll

### Projects Grid
- Cards with aspect-ratio-[4/3] or fixed height h-80
- Hover: transform scale-105, elevated shadow, transition duration-300
- Card structure: Image/gradient header + content area with p-6
- Tech stack tags: flex-wrap gap-2, small rounded pills
- Click handler: Opens centered modal with backdrop blur

### Project Modal
- Fixed positioning with z-50
- Backdrop: backdrop-blur-md with opacity-90
- Modal box: max-w-3xl, rounded-2xl, p-8
- Animate in: scale from 0.9 to 1, opacity 0 to 1
- Close button: Absolute top-right, hover rotate-90 transition
- Content: Title, description paragraphs, bullet points, tech badges
- Action buttons: GitHub + Live Demo with icons, gap-4

### Experience Timeline
- Vertical line connector (border-l-2) with absolute positioning
- Timeline nodes: Circular indicators (w-4 h-4 rounded-full)
- Content cards offset from timeline with ml-12
- Fade-in on scroll: opacity and translateY animations
- Date badges: Monospace font, small size

### Contact Section
- Two-column layout: Form (left, 60%) + Info (right, 40%)
- Form inputs: Border style, rounded-lg, px-4 py-3, focus ring
- Textarea: min-h-32
- Submit button: Full-width within form column
- Info panel: Email, phone with icons, stacked with gap-4

### Footer
- Border-top separator
- Three-column grid: Copyright | Quick Links | Social Icons
- Social icons: Hover glow effect via filter brightness-125
- Padding: py-12

## Interaction Patterns

**Animations (Framer Motion):**
- Page load: Stagger children with 0.1s delay
- Scroll reveals: Fade up (y: 20 to 0) with IntersectionObserver
- Hover scales: scale-105 for cards, scale-110 for icons
- Modal: Spring animation with type: "spring", damping: 25

**Smooth Scrolling:**
- Click navigation links scroll with behavior: "smooth"
- Offset scroll by navbar height (scroll-margin-top)

## Images

**Hero Section:**
- No large hero image. Use animated gradient background with particle effect or geometric patterns
- Focus on typography and animation for impact

**Project Cards:**
- Each project card includes a thumbnail image or gradient placeholder at the top
- Images should be 16:9 aspect ratio, subtle overlay for text readability
- Fallback: Use gradient with project icon if no screenshot available

**Image Descriptions:**
1. **Prepster Project:** Screenshot showing interview dashboard UI with AI features visible
2. **Crypto Tracker:** Chart.js visualization screenshot with live price data
3. **Background Elements:** Subtle dot grid pattern or gradient mesh (SVG), not photo

## Responsive Breakpoints

- Mobile (< 768px): Single column, center-aligned, stack all grids
- Tablet (768px - 1024px): 2-column grids, reduce spacing by 25%
- Desktop (> 1024px): Full multi-column layouts, maximum spacing

## Glass-Morphism Treatment

Apply to navbar and modal backdrops:
- backdrop-blur-lg or backdrop-blur-xl
- Semi-transparent backgrounds (bg-opacity-80 to 90)
- Border with subtle opacity (border-white/10)
- Shadow for depth (shadow-2xl)
# Daleel Balady Design Guidelines

## Design Approach
**Reference-Based Approach**: Blending Apple's minimalism, Stripe's sophistication, and Notion's clarity while maintaining local Egyptian warmth and community trust.

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 217 91% 60% (Blue #2563EB)
- Accent: 142 76% 36% (Green #16A34A)
- Highlight: 48 96% 53% (Warm Yellow #FACC15)
- Background: 210 20% 98% (#F9FAFB)
- Text: 215 25% 27% (#1E293B)

**Dark Mode:**
- Primary: 217 91% 60% (Blue #2563EB)
- Accent: 142 76% 36% (Green #16A34A)
- Highlight: 48 96% 53% (Warm Yellow #FACC15)
- Background: 222 47% 11% (#0F172A)
- Text: 214 32% 91% (#E2E8F0)

### B. Typography

**Arabic**: "Cairo" or "Tajawal" from Google Fonts
**English**: "Inter" or "Poppins" from Google Fonts

**Hierarchy:**
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Titles: text-3xl to text-4xl, font-semibold
- Body Text: text-base to text-lg, font-normal
- Captions: text-sm, font-medium

**RTL/LTR Support**: Implement directional text alignment with proper Arabic typography spacing.

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-16 to py-24 on desktop, py-12 on mobile
- Component Gaps: gap-6 to gap-8
- Container: max-w-7xl with px-6

**Responsive Grid**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3-4 columns (lg:grid-cols-3, lg:grid-cols-4)

### D. Component Library

**Navbar (Glassmorphism)**
- Sticky positioning with backdrop-blur-lg
- Smooth fade-in on scroll (opacity + transform)
- Transparent initial state, solid bg-white/10 on scroll
- Bilingual navigation items with proper spacing
- Theme toggle + Language toggle + CTA button

**Hero Section**
- Full viewport height with gradient background
- Animated background elements (floating map pins, gradient waves)
- Large hero image: Isometric 3D city map or fluid Egyptian cityscape
- Centered content with bilingual headline and subtext
- Dual CTAs with primary/secondary styling
- Interactive search bar with dropdown and auto-suggest animation

**Category Cards**
- Horizontal scroll carousel with Framer Motion drag
- Card dimensions: aspect-ratio-square on mobile, aspect-video on desktop
- Background image with gradient overlay
- Icon + title composition
- Hover effects: lift (translate-y-2), glow border, scale (scale-105)

**Offer Cards (Carousel)**
- Auto-sliding with progress dots
- Image-driven cards with overlay text
- Location pin + business name + offer details
- CTA buttons with distinct styling
- Parallax background effect

**Animated Steps (How It Works)**
- Three-column grid (stacks on mobile)
- Icon animations: magnifier glow, calendar expand, coin float
- Scroll-triggered reveals with staggered timing
- Number badges with gradient backgrounds

**Feature Highlights**
- Split layout with parallax background
- Micro-animated icons (pulse, rotate, bounce)
- Bilingual feature descriptions
- Icon library: Heroicons for consistency

**Testimonials Carousel**
- Smooth slider with customer avatars
- Quote styling with oversized quotation marks
- Star ratings with accent color
- Fade + slide animations on scroll

**Join CTA Banner**
- Full-width with gradient background (primary to accent)
- Subtle pulse animation on CTA button
- Large, bold bilingual headline
- Prominent registration button

**Footer**
- Multi-column layout (4 columns on desktop, stacks on mobile)
- Logo + description in first column
- Quick links, contact info, social icons
- Repeated theme and language toggles
- Bilingual copyright notice

### E. Animations & Interactions

**Scroll Animations (Framer Motion)**
- Fade-up reveals: initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}
- Staggered children: delay increments of 0.1s
- Parallax backgrounds: subtle transform based on scroll position

**Hover States**
- Cards: translate-y-2 + shadow-xl + glow border
- Buttons: scale-105 + brightness adjustment
- Links: underline animation from center

**Floating Elements**
- Hero icons: soft oscillation (translateY animation loop)
- CTA button: fixed position, appears after hero section

**Transitions**
- Theme switching: 300ms ease-in-out for all color changes
- Language toggle: fade content with 200ms timing
- Navigation: smooth scroll behavior

**Performance**
- Use transform and opacity for animations (GPU accelerated)
- Lazy load images and animations below fold
- Reduce motion for prefers-reduced-motion users

---

## Images

**Hero Section**: Large, high-quality isometric 3D illustration of Egyptian cityscape with recognizable landmarks (pyramids silhouette, modern buildings, Nile river). Style: gradient-rich, modern vector art with floating UI elements (location pins, service icons). Dimensions: 1920x1080, optimized for web.

**Category Cards**: Background images for each category showing relevant services (medical clinic, restaurant, car repair, etc.). Style: authentic Egyptian settings with warm color grading. Dimensions: 800x600 per card.

**Offer Section**: Featured business photos with promotional overlays. Style: professional photography with vibrant colors.

**E-commerce Preview**: Product mockup showing shopping interface with Egyptian products. Style: clean, modern UI screenshot.

**Map Visualization**: Egypt map with glowing city pins showing service coverage. Style: minimalist vector with accent color highlights.

---

## Accessibility & Localization

- ARIA labels for all interactive elements in both languages
- Proper RTL/LTR text directionality
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation for all interactive elements
- Screen reader announcements for dynamic content changes
- Focus indicators with accent color outline

---

## Unique Features

- Animated counter numbers for business stats (count-up animation)
- Egypt map heatmap with glowing city pins
- Gradient mesh background for depth
- Floating service category icons in hero
- Motion-guided user journey (animations direct attention)
- Cultural touches: Egyptian color warmth in gradients, local imagery
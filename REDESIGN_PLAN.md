# Victor Fuentes Portfolio Redesign Plan

## Design Decisions (Confirmed)

- **Typography**: Serif headings (Playfair Display), sans-serif body (Inter)
- **Gallery**: Click-to-expand lightbox functionality
- **Poetry**: Simplified (no bilingual toggle), clean typography
- **Featured paintings**: Selected for variety
- **Bio**: Lorem ipsum placeholder
- **Footer**: Copyright + contact info only
- **Animations**: Subtle transitions, hover effects, page transitions

---

## Color Palette

```css
--bg-primary: #FAF8F5 (warm cream)
--bg-secondary: #F5F3F0 (slightly darker cream)
--text-primary: #2D2D2D (charcoal)
--text-secondary: #6B6B6B (muted gray)
--accent-terracotta: #C4704B (from paintings)
--accent-olive: #6B7F5E (from landscapes)
--accent-gold: #B8965A (from yellow-sky)
--border-subtle: #E5E2DD
```

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Update Layout.astro with new colors, fonts
- [ ] Add Google Fonts (Playfair Display, Inter)
- [ ] Configure view transitions
- [ ] Update global CSS/Tailwind config

### Phase 2: Navigation
- [ ] Rewrite Navigation component
- [ ] Desktop: clean horizontal, right-aligned
- [ ] Mobile: slide-in from right with overlay
- [ ] Smooth open/close animations
- [ ] Use painting image for home link

### Phase 3: Landing Page
- [ ] Create PortraitHero component (main-portrait.webp, rounded, cropped)
- [ ] Create FeaturedWorks grid (4 paintings)
- [ ] Bio section with Lorem ipsum
- [ ] Poetry teaser section
- [ ] Scroll animations (fade-in on scroll)

### Phase 4: Paintings Gallery
- [ ] Clean grid layout
- [ ] Hover effects (shadow lift, title overlay)
- [ ] Lightbox component for click-to-expand
- [ ] Keyboard navigation (esc to close, arrows)

### Phase 5: Poetry Page
- [ ] Simplified poem display (English only for now)
- [ ] Elegant typography treatment
- [ ] Clean card layout

### Phase 6: Contact & Footer
- [ ] Modern minimal form design
- [ ] Floating labels or outlined inputs
- [ ] Footer: copyright + contact link
- [ ] Subtle top border

### Phase 7: Polish
- [ ] Page transition animations
- [ ] Hover states throughout
- [ ] Mobile responsiveness check
- [ ] Final cleanup

---

## Featured Paintings (Variety Selection)

1. `houses-volcano.webp` - Landscape/architecture
2. `beso.webp` - Portrait/figurative
3. `fruit.webp` - Still life
4. `colorful-shapes.webp` - Abstract

---

## File Changes Summary

**Modify:**
- `src/layouts/Layout.astro`
- `src/components/react/Navigation.tsx`
- `src/components/astro/Hero.astro`
- `src/components/astro/Footer.astro`
- `src/pages/index.astro`
- `src/pages/paintings.astro`
- `src/pages/poetry.astro`
- `src/pages/contact.astro`
- `src/components/astro/Poetry/PoemContainer.astro`
- `src/components/react/Poem.tsx`

**Create:**
- `src/components/astro/PortraitHero.astro`
- `src/components/astro/FeaturedWorks.astro`
- `src/components/astro/BioSection.astro`
- `src/components/astro/PoetryTeaser.astro`
- `src/components/react/Lightbox.tsx`
- `src/components/react/GalleryGrid.tsx`

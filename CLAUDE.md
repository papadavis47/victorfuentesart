# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **PNPM** as the package manager.

### Essential Commands
- `pnpm run dev` or `pnpm start` - Start development server at http://localhost:4321
- `pnpm run build` - Build for production (outputs to `/dist`)
- `pnpm run preview` - Preview production build locally

### Code Quality
- **Prettier**: Configured with Astro and Tailwind plugins - automatic formatting on save
- **TypeScript**: Strict mode enabled with path aliases

## Architecture Overview

This is a **bilingual artist portfolio website** for Victor Fuentes (painter & poet) built with Astro 5.x + React + TypeScript + Tailwind CSS.

### Key Architectural Patterns

**Islands Architecture**: Uses Astro components for static content and React components only where interactivity is needed:
- Astro components: Layout, Hero, Footer, ContactForm, all landing sections
- React components: Navigation (mobile menu), Poem (language switching)

**Path Aliases** (configured in tsconfig.json):
```typescript
"@components/*": ["src/components/*"]
"@layouts/*": ["src/layouts/*"] 
"@assets/*": ["src/assets/*"]
```

**Component Strategy**:
- `/components/astro/` - Server-rendered components
- `/components/react/` - Client-side interactive components with `client:load`
- `/components/astro/Experiments/` - Alternative component implementations

### Page Structure

5 main pages following consistent pattern:
```astro
<Layout metaTitle="Page Title">
  <Hero title="Page Title" />
  <!-- Page content -->
</Layout>
```

Pages: `/` (dual artist/writer), `/paintings` (gallery), `/poetry` (bilingual), `/contact` (Netlify form), `/submission`

### Content Management

**Poetry Data**: Structured in `/src/data/poems.ts` as TypeScript objects with bilingual content:
```typescript
export const poems = {
  imagenesDeAmor: [
    { id: number, englishLine: string, spanishLine: string }
  ]
}
```

**Images**: All artwork stored in `/src/assets/images/` with Astro's `<Image>` component for optimization

### Styling Approach

**Tailwind CSS** with consistent patterns:
- Dark theme: `bg-zinc-700`, white text
- Brand gradients: `bg-gradient-to-l from-red-600 to-slate-500`
- Mobile-first responsive: `grid md:grid-cols-2 grid-cols-1`
- Container pattern: `max-w-3xl mx-auto py-4 px-3`

### Bilingual Implementation

The poetry section uses React state management for language switching between English/Spanish content. The `Poem.tsx` component handles the interactive language toggle while maintaining consistent data structures.

### Forms Integration

Contact forms use Netlify integration with `data-netlify="true"` attribute for serverless form handling.

## Development Notes

- **TypeScript**: Strict mode with null checks enabled
- **Image optimization**: Automatic through Astro's built-in processing 
- **View transitions**: Configured in main layout for smooth navigation
- **Performance**: Static generation with minimal JavaScript through Islands Architecture
- **Mobile responsive**: All components built mobile-first

## Common Patterns

When adding new pages, follow the established pattern with Layout > Hero > Content structure. For new components, determine if they need interactivity (React) or can be static (Astro). Use path aliases for clean imports and maintain the established Tailwind styling patterns.
# Keeper Academy

Interactive Slidev-based e-learning deck for youth soccer goalkeeper coaching, aimed at travel and club coaches working with players ages 6–14.

## Project Overview

This repository contains a [Slidev](https://sli.dev) presentation built with the `slidev-theme-neversink` theme. It delivers a structured goalkeeper-development curriculum across age bands, plus a coach reference library, as an MDX-style deck hosted on GitHub Pages.

The deck is not a static file: it is composed of per-section slide decks imported through a single `slides.md` entrypoint, and it relies on reusable Vue components and layouts for a consistent visual system.

## Tech Stack

- **Presentation framework:** Slidev (`slides.md` entrypoint)
- **Theme:** `slidev-theme-neversink`
- **UI:** Vue 3 (`<script setup>`) + UnoCSS/Tailwind utility classes
- **Diagrams:** Mermaid (`flowchart`, `theme: 'base'`)
- **Builds/hosting:** slidev build, GitHub Pages

## Repository Structure

```
.
├── slides.md                 # Deck entrypoint: metadata + imports each section deck
├── slides/
│   ├── 01-overview.md        # Course dashboard (ModuleCard navigation)
│   ├── 02-curriculum-6-9.md   # Ages 6–9 module
│   ├── 03-curriculum-9-12.md  # Ages 9–12 module
│   ├── 04-curriculum-12-14.md # Ages 12–14 module
│   ├── 05-expectations-matrix.md # Cross-age skill benchmarks
│   ├── 06-basics-reference-library.md # "How to Coach It" reference
│   ├── 07-contact.md          # Reusable end-of-module navigation slide
│   └── 08-coaches-toolbox.md  # Session resources: sizing, team integration, templates
├── components/                # Reusable Vue components (ModuleCard, TakeawayBox, …)
├── layouts/                   # Custom Slidev layouts (top-title, …)
└── setup/                     # Slidev configuration (mermaid theme, …)
```

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL. The project does not require a build step to review changes; edits are reflected live (see "Development notes" below).

## Development Notes

- **No build step needed during development.** The deck is reviewed in the running Slidev dev server; do not run `slidev build` for review.
- **Reusable components:** use `TakeawayBox` and `ModuleCard` (and the neversink theme's components) instead of hand-written HTML callouts, so the visual system stays consistent.
- **Mermaid conventions:** use `flowchart` diagrams with `theme: 'base'` and a `scale` of `0.6–0.7`. Keep diagrams compact.
- **Slide numbers & navigation:** `ModuleCard` targets in `slides/01-overview.md` reference absolute slide numbers in the combined deck. These are position-dependent and must be re-audited whenever slides are added or removed anywhere in the deck.
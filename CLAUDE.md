# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains `dangyeon-design-system.md` — the single source of truth for DeepTrade's (deeptrade.co) corporate website visual design. It defines all design tokens, component patterns, and CSS specifications. The actual implementation lives in the sibling `homepage/` React project.

When working on any DeepTrade UI, always consult this file before making styling decisions.

## Design Tokens

| Category | Key Values |
|----------|-----------|
| Font | Pretendard only (300–800 weight) |
| Primary color | `#1EC9AF` (mint) — CTA buttons, links, positive numbers, eyebrow tags |
| Dark | `#1A1A1A` (charcoal) — primary buttons, headings, dark section backgrounds |
| Container | `max-width: 1160px`, `padding: 0 32px` |
| Spacing unit | 8pt base (`--sp-4` to `--sp-100`) |
| Section padding | `100px 32px` standard, `80px 32px` compact |
| Breakpoints | 1024px (tablet), 768px (mobile) |

## Color Rules

- Mint (`#1EC9AF`) is used for CTA, emphasis, positive values, and eyebrow labels — **never adjust with opacity**
- Section backgrounds cycle: `#FFFFFF` → `#FAFAFA` → `#F0F4F8` → `#1A1A1A`
- Red (`#FF4242`) is reserved for negative returns and error states only
- Dark sections use rgba white values for text/borders (see Section 12 of the design system doc)

## Component Conventions

- All interactive cards use `transform: translateY(-2px)` + shadow elevation on hover
- Transition speeds: `0.15s` buttons/links, `0.2s` cards, `0.25s` modals/dropdowns, `0.6s cubic-bezier(0.4,0,0.2,1)` hero slider
- Eyebrow tags: 12px, weight 700, mint color, `background: rgba(30,201,175,0.1)`, `border-radius: 9999px`
- Section headers always follow the eyebrow → h2 → description pattern (see Section 6-5)
- Hero slider: 480px height, 3 slides, 5-second auto-rotate
- Navigation: 64px fixed, `rgba(255,255,255,0.95)` + `backdrop-filter: blur(12px)`

## Page Section Order

nav → hero slider → marquee → products (Bento grid) → platform → solutions → stats → FAQ → news → contact → CTA → footer

## Dark Section Overrides

When rendering content inside `#1A1A1A` backgrounds:
- Cards: `background: rgba(255,255,255,0.06)`, `border: 1px solid rgba(255,255,255,0.08)`
- Text primary: `rgba(255,255,255,0.95)`, secondary: `rgba(255,255,255,0.5)`, muted: `rgba(255,255,255,0.3)`
- Mint color stays unchanged (no opacity modification)

# Design Plan — Version 1.50

## Principles
- **Decision Clarity:** Present KPIs with immediate interpretation (value, delta, trend) using a consistent typographic scale.
- **Responsive Parity:** Grid definitions translate gracefully between 1280px desktop and 360px mobile.
- **Accessibility:** Maintain WCAG 2.1 AA compliance with 4.5:1 contrast, keyboard focus indicators, and semantic structure.

## Component Updates
- **KPI Card**
  - Desktop: 288px width, 24px padding, uses Tailwind `bg-white`, `shadow-lg`, `rounded-2xl`.
  - Typography: Label `text-sm text-slate-500`, value `text-3xl font-semibold text-slate-900`, delta `text-sm font-medium` with green/red depending on direction.
  - Icons: Heroicons outline 24px, tinted with `text-sky-500`.
- **Trend Sparkline**
  - Implemented with `@tanstack/react-charts` (if not available, use `recharts`). We'll use `recharts` since already widely adopted.
  - Provide accessible fallback table summarising data for screen readers.
- **Flutter KPI Tile**
  - Container uses `EdgeInsets.all(16)` with `BorderRadius.circular(20)` and `BoxShadow` for elevation.
  - Value uses `TextStyle(fontSize: 28, fontWeight: FontWeight.w600, color: Color(0xFF0F172A))`.
  - Delta indicator uses icons from `Heroicons` equivalent `Icons.trending_up/down` with green/red.

## Layouts
- **Desktop**: 12-column grid, KPI cards span 3 columns each, sparkline section spans 12 columns with min-height 320px.
- **Tablet**: Cards drop to 2 columns with 16px gutter.
- **Mobile**: Single column, cards full width, sparkline replaced with segmented bars.

## Interaction Patterns
- Refresh button in top-right triggers data refetch.
- Period toggle chips (`7d`, `30d`, `All`) update KPI deltas.
- Cards have hover effect `translate-y-[-2px]` and `shadow-xl` for depth.

## Assets
- Primary accent `#2563EB`, success `#0D9488`, warning `#F97316`.
- Icon set: Heroicons Outline.

Refer to supporting files for ASCII diagrams and Flutter layout pseudo-DSL.

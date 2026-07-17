# UI Kit — 知序 FabricMind Landing Page

Pixel-faithful React recreation of https://github.com/tripletree/Zhixu (Vue 3 + Tailwind v4 source), composed from the design-system components (`BrandMark`, `Button`, `IconButton`, `Icon`, `SectionHeading`, `Reveal`, `CountUp`).

- `index.html` — full interactive page: frosted nav (appears on scroll), hero with floating glass annotations, 5-step pipeline, scenario cards, bento feature matrix with 4 product mocks, CTA + footer, WeChat contact dialog, **dark/light theme toggle** (`html.light`).
- `sections.jsx` — SiteNav, HeroSection, SystemFramework, BusinessScenarios, FeatureMatrix, CtaFooter, ContactDialog, App.
- `mocks.jsx` — DashboardMock (trend lines, radar, bubbles, material TOP 5), ChatMock, ReportMock (fanned slides), TryOnMock — the only glimpses of the BI product UI that exist in the source.

Desktop layout only (source is responsive; recreation targets ≥1280px).

# Web Application Design — Admin Analytics

## Grid Layout
```
<main class="max-w-7xl mx-auto px-6 py-10">
  <header class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div>
      <h1 class="text-3xl font-semibold text-slate-900">Analytics</h1>
      <p class="text-slate-500">Monitor platform health and community momentum.</p>
    </div>
    <div class="flex items-center gap-3">
      <div class="inline-flex rounded-full border border-slate-200 bg-white p-1">
        <!-- period chips -->
      </div>
      <button class="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-white shadow-lg hover:bg-sky-700">
        <svg class="h-5 w-5"></svg>
        Refresh
      </button>
    </div>
  </header>
  <section class="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
    <!-- KPI cards -->
  </section>
  <section class="mt-10 grid gap-6 xl:grid-cols-5">
    <article class="xl:col-span-3 rounded-3xl bg-white p-6 shadow-lg">
      <header class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-slate-900">Signups trend</h2>
        <span class="text-sm text-slate-500">Last 14 days</span>
      </header>
      <div class="mt-6 h-64" id="signup-chart"></div>
      <footer class="mt-4 text-sm text-slate-500">Trendline uses 7-day moving average overlay.</footer>
    </article>
    <article class="xl:col-span-2 rounded-3xl bg-white p-6 shadow-lg">
      <header class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-slate-900">Posts trend</h2>
        <span class="text-sm text-slate-500">Last 14 days</span>
      </header>
      <div class="mt-6 h-64" id="posts-chart"></div>
    </article>
  </section>
</main>
```

## States
- **Loading:** Display skeleton cards (animated gradient) and placeholder chart shimmer.
- **Error:** Inline alert `bg-red-50 text-red-700` with retry button.
- **Empty:** For sparkline, fallback to table summarising counts.

## Accessibility
- All interactive elements reachable via keyboard.
- Provide `aria-live="polite"` region on refresh success message.

## Responsive Notes
- `xl:grid-cols-4` ensures four cards on widescreen; degrade to single column on `<640px`.
- Charts collapse into stacked cards on `<1024px`, with toggles to switch dataset.

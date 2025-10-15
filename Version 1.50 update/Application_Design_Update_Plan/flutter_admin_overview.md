# Flutter Admin Overview Spec

## Layout Blueprint
```
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Header(title: "Analytics", subtitle: "Key engagement metrics"),
    SizedBox(height: 16),
    Wrap(
      spacing: 16,
      runSpacing: 16,
      children: metrics.map((metric) => _KpiTile(metric)).toList(),
    ),
    SizedBox(height: 24),
    _TrendCard(data: analytics.sparkline)
  ],
)
```

## KPI Tile Specification
- Container: `BoxDecoration(color: Colors.white, borderRadius: 20, boxShadow: [BoxShadow(offset: Offset(0,8), blurRadius: 24, color: Color(0x1A0F172A))])`
- Label: `TextStyle(fontSize: 14, color: Color(0xFF64748B))`
- Value: `TextStyle(fontSize: 28, fontWeight: FontWeight.w600, color: Color(0xFF0F172A))`
- Delta: Row with icon `Icons.trending_up` or `Icons.trending_down` tinted `Color(0xFF0D9488)` or `Color(0xFFDC2626)`.
- Progress Bar: `LinearProgressIndicator(minHeight: 6, backgroundColor: Color(0xFFE2E8F0), valueColor: AlwaysStoppedAnimation(Color(0xFF2563EB)))`

## Interaction
- Pull-to-refresh triggers Riverpod `refresh(analyticsProvider)`.
- Period filter uses `SegmentedButton` with options `[7d, 30d, All]`.

## Accessibility
- Ensure minimum touch target of 48x48 for period toggles.
- Provide semantic labels for delta icon: e.g., `Semantics(label: 'Up 12 percent')`.

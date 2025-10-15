import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

const String apiBaseUrl = String.fromEnvironment(
  'API_BASE_URL',
  defaultValue: 'http://localhost:4000/api',
);

class AdminAnalyticsScreen extends StatefulWidget {
  const AdminAnalyticsScreen({super.key});

  @override
  State<AdminAnalyticsScreen> createState() => _AdminAnalyticsScreenState();
}

class _AdminAnalyticsScreenState extends State<AdminAnalyticsScreen> {
  Map<String, dynamic>? analytics;
  bool loading = true;
  bool refreshing = false;
  String period = '30d';
  String? error;

  Future<void> _fetchAnalytics() async {
    setState(() {
      error = null;
    });
    try {
      final response = await http.get(
        Uri.parse('$apiBaseUrl/admin/analytics/overview'),
        headers: {
          'accept': 'application/json',
        },
      );
      if (response.statusCode == 200) {
        final body = jsonDecode(response.body) as Map<String, dynamic>;
        setState(() {
          analytics = body;
          loading = false;
          refreshing = false;
        });
      } else {
        setState(() {
          error = 'Unable to load analytics (${response.statusCode})';
          loading = false;
          refreshing = false;
        });
      }
    } catch (err) {
      setState(() {
        error = 'Analytics unavailable. Please try again soon.';
        loading = false;
        refreshing = false;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    _fetchAnalytics();
  }

  void _handleRefresh() {
    setState(() {
      refreshing = true;
    });
    _fetchAnalytics();
  }

  num _sumWindow(List<dynamic> series, int window) {
    if (series.isEmpty) return 0;
    return series
        .sublist(series.length > window ? series.length - window : 0)
        .fold<num>(0, (total, item) => total + (item['count'] as num));
  }

  String _formatNumber(num value) {
    return NumberFormat.decimalPattern().format(value);
  }

  String _formatDelta(String label, num value) {
    return '$label ${_formatNumber(value)}';
  }

  @override
  Widget build(BuildContext context) {
    final summary = (analytics?['summary'] as Map<String, dynamic>?) ?? {};
    final sparkline = (analytics?['sparkline'] as Map<String, dynamic>?) ?? {};

    final newUsers = (summary['newUsers'] as Map<String, dynamic>?) ?? {};
    final activeUsers = (summary['activeUsers'] as Map<String, dynamic>?) ?? {};

    final List<dynamic> signupSeries = (sparkline['userSignups'] as List<dynamic>?) ?? [];
    final List<dynamic> postsSeries = (sparkline['postPublishes'] as List<dynamic>?) ?? [];

    final num userDelta = period == '7d'
        ? _sumWindow(signupSeries, 7)
        : (newUsers['thirtyDays'] as num? ?? 0);
    final num postDelta = period == '7d'
        ? _sumWindow(postsSeries, 7)
        : (summary['newPosts30'] as num? ?? 0);

    final tiles = <Widget>[];
    if (summary != null) {
      tiles.addAll([
        _KpiTile(
          icon: Icons.person_outline,
          label: 'Total users',
          value: _formatNumber(summary['totalUsers'] ?? 0),
          delta: period == 'all'
              ? _formatDelta('30d new', newUsers['thirtyDays'] as num? ?? 0)
              : _formatDelta('New', userDelta),
          helper: period == '7d' ? 'vs prior 7 days' : 'Rolling 30 days',
        ),
        _KpiTile(
          icon: Icons.monitor_heart_outlined,
          label: 'Active users',
          value: _formatNumber(activeUsers['thirtyDays'] as num? ?? 0),
          delta: _formatDelta('60d active', activeUsers['sixtyDays'] as num? ?? 0),
          helper: 'Engaged within 30 days',
        ),
        _KpiTile(
          icon: Icons.groups_2_outlined,
          label: 'Communities',
          value: _formatNumber(summary['totalCommunities'] ?? 0),
          delta: _formatDelta('Active', summary['activeCommunities'] ?? 0),
          helper: 'Active in last 30 days',
        ),
        _KpiTile(
          icon: Icons.insights_outlined,
          label: 'Posts published',
          value: _formatNumber(summary['totalPosts'] ?? 0),
          delta: period == 'all'
              ? _formatDelta('30d new', summary['newPosts30'] as num? ?? 0)
              : _formatDelta('New', postDelta),
          helper: period == '7d' ? 'vs prior 7 days' : 'Rolling 30 days',
        ),
      ]);
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Analytics'),
        actions: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            child: SegmentedButton<String>(
              segments: const [
                ButtonSegment(value: '7d', label: Text('7d')),
                ButtonSegment(value: '30d', label: Text('30d')),
                ButtonSegment(value: 'all', label: Text('All')),
              ],
              selected: <String>{period},
              showSelectedIcon: false,
              onSelectionChanged: (value) {
                setState(() {
                  period = value.first;
                });
              },
            ),
          ),
          IconButton(
            onPressed: refreshing ? null : _handleRefresh,
            icon: refreshing
                ? const SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(strokeWidth: 2),
                  )
                : const Icon(Icons.refresh),
          ),
        ],
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: loading
              ? const _LoadingState()
              : error != null
                  ? _ErrorState(message: error!, onRetry: _handleRefresh)
                  : ListView(
                      children: [
                        const Text(
                          'Stay informed with live engagement insights.',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            color: Color(0xFF475569),
                          ),
                        ),
                        const SizedBox(height: 16),
                        Wrap(
                          spacing: 16,
                          runSpacing: 16,
                          children: tiles,
                        ),
                        const SizedBox(height: 24),
                        _SparklineCard(
                          title: 'Signups trend',
                          subtitle: 'Last 14 days',
                          series: signupSeries,
                          accent: const Color(0xFF2563EB),
                          footer: 'Values represent verified activations each day.',
                        ),
                        const SizedBox(height: 20),
                        _SparklineCard(
                          title: 'Posts trend',
                          subtitle: 'Last 14 days',
                          series: postsSeries,
                          accent: const Color(0xFF0D9488),
                          footer:
                              'Retention rate ${(summary?['retentionRate'] as num?)?.toStringAsFixed(1) ?? '0'}% · 90-day cohort.',
                        ),
                      ],
                    ),
        ),
      ),
    );
  }
}

class _KpiTile extends StatelessWidget {
  const _KpiTile({
    required this.icon,
    required this.label,
    required this.value,
    required this.delta,
    required this.helper,
  });

  final IconData icon;
  final String label;
  final String value;
  final String delta;
  final String helper;

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(minWidth: 160, maxWidth: 240),
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          boxShadow: const [
            BoxShadow(
              color: Color(0x140F172A),
              offset: Offset(0, 12),
              blurRadius: 32,
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                color: const Color(0xFFEFF6FF),
                borderRadius: BorderRadius.circular(18),
              ),
              child: Icon(icon, color: const Color(0xFF2563EB)),
            ),
            const SizedBox(height: 16),
            Text(
              label,
              style: const TextStyle(
                fontSize: 14,
                color: Color(0xFF64748B),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              value,
              style: const TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.w600,
                color: Color(0xFF0F172A),
              ),
            ),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(
                color: const Color(0xFFE0F2FE),
                borderRadius: BorderRadius.circular(999),
              ),
              child: Text(
                delta,
                style: const TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF0369A1),
                ),
              ),
            ),
            const SizedBox(height: 6),
            Text(
              helper,
              style: const TextStyle(
                fontSize: 12,
                color: Color(0xFF94A3B8),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SparklineCard extends StatelessWidget {
  const _SparklineCard({
    required this.title,
    required this.subtitle,
    required this.series,
    required this.accent,
    required this.footer,
  });

  final String title;
  final String subtitle;
  final List<dynamic> series;
  final Color accent;
  final String footer;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        boxShadow: const [
          BoxShadow(
            color: Color(0x140F172A),
            offset: Offset(0, 12),
            blurRadius: 32,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w600,
              color: Color(0xFF0F172A),
            ),
          ),
          const SizedBox(height: 4),
          Text(
            subtitle,
            style: const TextStyle(
              fontSize: 13,
              color: Color(0xFF64748B),
            ),
          ),
          const SizedBox(height: 20),
          SizedBox(
            height: 160,
            child: series.isEmpty
                ? const Center(
                    child: Text(
                      'No data for selected window.',
                      style: TextStyle(color: Color(0xFF94A3B8)),
                    ),
                  )
                : CustomPaint(
                    painter: _SparklinePainter(series: series, accent: accent),
                    size: const Size(double.infinity, double.infinity),
                  ),
          ),
          const SizedBox(height: 16),
          Text(
            footer,
            style: const TextStyle(
              fontSize: 12,
              color: Color(0xFF94A3B8),
            ),
          ),
        ],
      ),
    );
  }
}

class _SparklinePainter extends CustomPainter {
  _SparklinePainter({required this.series, required this.accent});

  final List<dynamic> series;
  final Color accent;

  @override
  void paint(Canvas canvas, Size size) {
    if (series.isEmpty) return;
    final paint = Paint()
      ..color = accent
      ..strokeWidth = 3
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    final fillPaint = Paint()
      ..color = accent.withOpacity(0.15)
      ..style = PaintingStyle.fill;

    final counts = series.map((e) => (e['count'] as num).toDouble()).toList();
    final maxValue = counts.reduce((a, b) => a > b ? a : b);
    final minValue = counts.reduce((a, b) => a < b ? a : b);
    final range = (maxValue - minValue).abs() < 0.1 ? 1 : maxValue - minValue;
    final stepX = size.width / (counts.length - 1);

    final path = Path();
    for (var i = 0; i < counts.length; i++) {
      final x = stepX * i;
      final y = size.height - ((counts[i] - minValue) / range) * size.height;
      if (i == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    }

    final fillPath = Path.from(path)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();

    canvas.drawPath(fillPath, fillPaint);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}

class _LoadingState extends StatelessWidget {
  const _LoadingState();

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: 3,
      separatorBuilder: (_, __) => const SizedBox(height: 16),
      itemBuilder: (_, __) => Container(
        height: 120,
        decoration: BoxDecoration(
          color: const Color(0xFFF8FAFC),
          borderRadius: BorderRadius.circular(24),
        ),
        child: const Center(
          child: CircularProgressIndicator(),
        ),
      ),
    );
  }
}

class _ErrorState extends StatelessWidget {
  const _ErrorState({required this.message, required this.onRetry});

  final String message;
  final VoidCallback onRetry;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            message,
            style: const TextStyle(color: Colors.redAccent),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 12),
          FilledButton(onPressed: onRetry, child: const Text('Retry')),
        ],
      ),
    );
  }
}

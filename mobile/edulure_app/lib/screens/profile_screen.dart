import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Profile')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            Card(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32)),
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Row(
                  children: [
                    const CircleAvatar(
                      radius: 48,
                      backgroundImage: NetworkImage('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'),
                    ),
                    const SizedBox(width: 24),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text('Dr. Priya Singh', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w700)),
                          SizedBox(height: 8),
                          Text('Principal Instructor · Data Science & Responsible AI', style: TextStyle(color: Colors.grey)),
                        ],
                      ),
                    ),
                    Wrap(
                      spacing: 12,
                      children: const [
                        Chip(label: Text('Community Architect')),
                        Chip(label: Text('Top Instructor')),
                        Chip(label: Text('Curriculum Innovator')),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),
            Expanded(
              child: Row(
                children: [
                  Expanded(
                    child: Card(
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32)),
                      child: const Padding(
                        padding: EdgeInsets.all(24),
                        child: Text(
                          'Priya leads global data science communities with a focus on ethical AI adoption. She has built multi-language cohorts that helped 40k learners transition into AI-first roles.',
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 24),
                  Expanded(
                    child: Card(
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(32)),
                      child: Padding(
                        padding: const EdgeInsets.all(24),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text('Programs', style: TextStyle(fontWeight: FontWeight.w700)),
                            SizedBox(height: 12),
                            Text('• Responsible AI Leadership · 8-week cohort · 96% completion'),
                            SizedBox(height: 8),
                            Text('• Data Ethics Masterclass · On-demand course · 2.8k learners'),
                            SizedBox(height: 8),
                            Text('• AI Readiness Playbook · Enterprise advisory track'),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

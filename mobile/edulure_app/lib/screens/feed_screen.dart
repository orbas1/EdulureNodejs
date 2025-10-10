import 'package:flutter/material.dart';

class FeedScreen extends StatelessWidget {
  const FeedScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Community Feed'),
        actions: const [Icon(Icons.message_outlined), SizedBox(width: 12), Icon(Icons.notifications_outlined), SizedBox(width: 16)],
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Wrap(
              spacing: 12,
              children: [
                FilledButton.tonal(onPressed: () {}, child: const Text('Communities')),
                FilledButton.tonal(onPressed: () {}, child: const Text('Classrooms')),
                FilledButton.tonal(onPressed: () {}, child: const Text('E-Books')),
                FilledButton.tonal(onPressed: () {}, child: const Text('Tutors')),
                FilledButton.tonal(onPressed: () {}, child: const Text('Dashboard')),
              ],
            ),
            const SizedBox(height: 24),
            Expanded(
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    flex: 2,
                    child: ListView(
                      children: [
                        Card(
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                          child: Padding(
                            padding: const EdgeInsets.all(16),
                            child: Row(
                              children: [
                                CircleAvatar(
                                  radius: 28,
                                  backgroundColor: colorScheme.primary,
                                  child: const Text('PS'),
                                ),
                                const SizedBox(width: 16),
                                Expanded(
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                                    decoration: BoxDecoration(
                                      color: Colors.blueGrey.shade50,
                                      borderRadius: BorderRadius.circular(20),
                                    ),
                                    child: Text(
                                      'Share something brilliant with your community...',
                                      style: Theme.of(context).textTheme.bodyMedium?.copyWith(color: Colors.blueGrey.shade600),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 12),
                                FilledButton(onPressed: () {}, child: const Text('Post')),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 16),
                        for (final post in _mockPosts)
                          Card(
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                            child: Padding(
                              padding: const EdgeInsets.all(24),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      CircleAvatar(backgroundImage: NetworkImage(post['avatar']!)),
                                      const SizedBox(width: 12),
                                      Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(post['author']!, style: const TextStyle(fontWeight: FontWeight.w600)),
                                          Text(post['role']!, style: const TextStyle(color: Colors.grey)),
                                        ],
                                      ),
                                      const Spacer(),
                                      Text(post['timestamp']!, style: const TextStyle(color: Colors.grey, fontSize: 12)),
                                    ],
                                  ),
                                  const SizedBox(height: 16),
                                  Text(post['content']!, style: Theme.of(context).textTheme.bodyMedium),
                                  const SizedBox(height: 12),
                                  TextButton(onPressed: () {}, child: const Text('Discuss →')),
                                ],
                              ),
                            ),
                          ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 24),
                  Expanded(
                    child: ListView(
                      children: [
                        Card(
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                          clipBehavior: Clip.antiAlias,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Image.network(
                                'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
                                height: 140,
                                width: double.infinity,
                                fit: BoxFit.cover,
                              ),
                              Padding(
                                padding: const EdgeInsets.all(24),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: const [
                                    Text('AI Educators Hub', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18)),
                                    SizedBox(height: 4),
                                    Text('Weekly workshops, live AMAs, and lesson plans for the future of classrooms.'),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 16),
                        Card(
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Leaderboard', style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.w700)),
                                const SizedBox(height: 12),
                                for (final entry in _leaderboard)
                                  ListTile(
                                    contentPadding: EdgeInsets.zero,
                                    title: Text('#${entry['rank']} ${entry['name']}'),
                                    trailing: Text('${entry['points']} pts', style: TextStyle(color: colorScheme.primary)),
                                  ),
                              ],
                            ),
                          ),
                        ),
                      ],
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

const _mockPosts = [
  {
    'author': 'Dr. Priya Singh',
    'role': 'Data Science Mentor',
    'avatar': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    'timestamp': '2 hours ago',
    'content': 'Just dropped a new live curriculum on responsible AI. Includes project briefs and ready-to-teach slides!'
  },
  {
    'author': 'Team Edulure',
    'role': 'Community Managers',
    'avatar': 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=200&q=80',
    'timestamp': '4 hours ago',
    'content': 'We are onboarding 12 new micro-communities this week. Nominate your peers to lead a new chapter in your city.'
  }
];

const _leaderboard = [
  {'rank': 1, 'name': 'Janet Fletcher', 'points': 1820},
  {'rank': 2, 'name': 'Diego Alonso', 'points': 1740},
  {'rank': 3, 'name': 'Aisha Bello', 'points': 1688},
];

import 'package:flutter/material.dart';

const _intentions = [
  'Launch courses',
  'Build a community',
  'Offer video lessons',
  'Run live cohorts',
  'Host tutoring sessions',
];

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final Set<String> _selectedIntentions = {};

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(title: const Text('Create your workspace')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Center(
          child: Container(
            constraints: const BoxConstraints(maxWidth: 900),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(36),
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  blurRadius: 36,
                  offset: const Offset(0, 24),
                  color: Colors.black.withOpacity(.05),
                ),
              ],
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (MediaQuery.of(context).size.width > 960)
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.all(32),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [colorScheme.primary, colorScheme.primaryContainer],
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                        ),
                        borderRadius: const BorderRadius.horizontal(left: Radius.circular(36)),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text(
                            'Create your Edulure workspace',
                            style: TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w700),
                          ),
                          SizedBox(height: 16),
                          Text(
                            'Bring your courses, community, and operations into one unified platform built to scale with you.',
                            style: TextStyle(color: Colors.white70),
                          ),
                          SizedBox(height: 32),
                          Text('• Unified dashboard for courses, communities, and cohorts', style: TextStyle(color: Colors.white70)),
                          SizedBox(height: 12),
                          Text('• Built-in analytics, automations, and messaging', style: TextStyle(color: Colors.white70)),
                          SizedBox(height: 12),
                          Text('• Priority success team for growth and enterprise', style: TextStyle(color: Colors.white70)),
                        ],
                      ),
                    ),
                  ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(32),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Founder onboarding',
                          style: Theme.of(context).textTheme.titleSmall?.copyWith(color: colorScheme.primary, letterSpacing: 2),
                        ),
                        const SizedBox(height: 16),
                        Wrap(
                          spacing: 16,
                          runSpacing: 16,
                          children: const [
                            _InputField(label: 'First name', hint: 'Jordan'),
                            _InputField(label: 'Last name', hint: 'Lee'),
                            _InputField(label: 'Work email', hint: 'you@school.com'),
                            _InputField(label: 'Create password', hint: 'Minimum 8 characters', obscureText: true),
                            _InputField(label: 'Headquarters location', hint: 'San Francisco, CA'),
                            _InputField(label: 'Team size', hint: '12', keyboardType: TextInputType.number),
                          ],
                        ),
                        const SizedBox(height: 24),
                        Text(
                          'What will you build on Edulure?',
                          style: Theme.of(context).textTheme.titleSmall?.copyWith(fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(height: 12),
                        Wrap(
                          spacing: 12,
                          runSpacing: 12,
                          children: [
                            for (final intention in _intentions)
                              ChoiceChip(
                                label: Text(intention),
                                selected: _selectedIntentions.contains(intention),
                                onSelected: (selected) {
                                  setState(() {
                                    if (selected) {
                                      _selectedIntentions.add(intention);
                                    } else {
                                      _selectedIntentions.remove(intention);
                                    }
                                  });
                                },
                              ),
                          ],
                        ),
                        const SizedBox(height: 32),
                        FilledButton(
                          onPressed: () {},
                          style: FilledButton.styleFrom(
                            minimumSize: const Size.fromHeight(52),
                            shape: const StadiumBorder(),
                          ),
                          child: const Text('Create workspace'),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _InputField extends StatelessWidget {
  const _InputField({required this.label, required this.hint, this.keyboardType, this.obscureText = false});

  final String label;
  final String hint;
  final TextInputType? keyboardType;
  final bool obscureText;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 320,
      child: TextField(
        keyboardType: keyboardType,
        obscureText: obscureText,
        decoration: InputDecoration(
          labelText: label,
          hintText: hint,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(24)),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class PandaGuide extends StatelessWidget {
  const PandaGuide({super.key});

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 100,
      right: 20,
      child: GestureDetector(
        onTap: () {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('团团熊猫：正在为您监测九界因果平衡...')),
          );
        },
        child: Column(
          children: [
            Container(
              decoration: SovereignTheme.getGlassDecoration(),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              child: const Text('我有话要说', style: TextStyle(fontSize: 10, color: Colors.white70)),
            ),
            const SizedBox(height: 5),
            Container(
              width: 60,
              height: 60,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: SovereignTheme.pink.withOpacity(0.1),
                border: Border.all(color: SovereignTheme.pink.withOpacity(0.3)),
                boxShadow: [BoxShadow(color: SovereignTheme.pink.withOpacity(0.2), blurRadius: 20)],
              ),
              child: const Center(child: Text('🐼', style: TextStyle(fontSize: 30))),
            ),
          ],
        ),
      ),
    );
  }
}

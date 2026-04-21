import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class ResultPage extends StatelessWidget {
  const ResultPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        decoration: const BoxDecoration(
          gradient: RadialGradient(
            center: Alignment.center,
            radius: 1.0,
            colors: [Color(0xFF1E1E2E), Color(0xFF050510)],
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Victory Text
            Text(
              'VICTORY',
              style: SovereignTheme.brandStyle(size: 80, bold: true, color: SovereignTheme.pink),
            ),
            const Text('始源对局 · 功德圆满', style: TextStyle(letterSpacing: 10, color: Colors.white38)),
            
            const SizedBox(height: 60),
            
            // KDA Stats
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                 _StatCircle('K', '14'),
                 const SizedBox(width: 40),
                 _StatCircle('D', '0'),
                 const SizedBox(width: 40),
                 _StatCircle('A', '25'),
              ],
            ),
            
            const SizedBox(height: 60),
            
            // Rank Progress
            Container(
              width: 300,
              padding: const EdgeInsets.all(20),
              decoration: SovereignTheme.glassDecoration,
              child: Column(
                children: [
                  Text('修仙位阶：大乘 -> 金仙', style: SovereignTheme.brandStyle(size: 14, color: SovereignTheme.pink)),
                  const SizedBox(height: 15),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(5),
                    child: const LinearProgressIndicator(
                      value: 0.85,
                      minHeight: 8,
                      backgroundColor: Colors.white10,
                      valueColor: AlwaysStoppedAnimation<Color>(SovereignTheme.pink),
                    ),
                  ),
                ],
              ),
            ),
            
            const SizedBox(height: 80),
            
            // Back Button
            GestureDetector(
              onTap: () => Navigator.pushNamed(context, '/'),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 15),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  border: Border.all(color: SovereignTheme.pink),
                ),
                child: Text('重返觉醒营地', style: SovereignTheme.brandStyle(color: SovereignTheme.pink)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _StatCircle(String label, String val) {
    return Column(
      children: [
        Text(val, style: SovereignTheme.brandStyle(size: 32, bold: true)),
        Text(label, style: const TextStyle(fontSize: 10, color: Colors.white24)),
      ],
    );
  }
}

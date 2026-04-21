import 'package:flutter/material.dart';

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Colors.black, Color(0xFF111111)],
          ),
        ),
        child: Stack(
          children: [
            // Background Glow
            Positioned(
              top: -100, right: -100,
              child: Container(
                width: 300, height: 300,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.amber.withOpacity(0.05),
                ),
              ),
            ),
            
            // Content
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 40),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('LING YUE', style: TextStyle(fontSize: 16, letterSpacing: 10, color: Colors.amber, fontWeight: FontWeight.w900)),
                  const SizedBox(height: 10),
                  const Text('不朽始源\n灵魂契约', style: TextStyle(fontSize: 48, fontWeight: FontWeight.w900, height: 1.1)),
                  const SizedBox(height: 30),
                  const Opacity(
                    opacity: 0.6,
                    child: Text(
                      '2026 全球首款全年龄段 MOBA 手游。\n支持 512MB RAM 级优化，全马零延迟。',
                      style: TextStyle(fontSize: 14, height: 1.6),
                    ),
                  ),
                  const SizedBox(height: 60),
                  
                  // Action Buttons
                  ElevatedButton(
                    onPressed: () => Navigator.pushNamed(context, '/combat'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.amber,
                      foregroundColor: Colors.black,
                      minimumSize: const Size(double.infinity, 60),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                    ),
                    child: const Text('立即觉醒 (AWAKEN)', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
                  ),
                  const SizedBox(height: 20),
                  OutlinedButton(
                    onPressed: () {},
                    style: OutlinedButton.styleFrom(
                      minimumSize: const Size(double.infinity, 60),
                      side: const BorderSide(color: Colors.white24),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                    ),
                    child: const Text('灵约营地 (CAMP)', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
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

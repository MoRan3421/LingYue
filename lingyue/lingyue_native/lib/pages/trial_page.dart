import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class TrialPage extends StatelessWidget {
  const TrialPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('九转试炼 (TRIAL OF NINE)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: PageView.builder(
        itemCount: 9,
        itemBuilder: (context, i) {
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 60),
            child: Container(
              decoration: SovereignTheme.getGlassDecoration(),
              padding: const EdgeInsets.all(30),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('第 ${i + 1} 转', style: SovereignTheme.brandStyle(size: 14, color: SovereignTheme.pink)),
                  const SizedBox(height: 20),
                  const Icon(Icons.auto_awesome, color: SovereignTheme.blue, size: 100),
                  const SizedBox(height: 40),
                  Text(
                    i == 0 ? '始源觉醒：学习基础操作' : '试炼章节: ${i + 1}',
                    textAlign: TextAlign.center,
                    style: SovereignTheme.brandStyle(size: 24, bold: true),
                  ),
                  const SizedBox(height: 20),
                  const Text(
                    '在这场试炼中，你将掌握如何调度九常资产并施放业火技能。只有通过九转，你才能真正拥有契约之印。',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white38, fontSize: 13, height: 1.6),
                  ),
                  const Spacer(),
                  ElevatedButton(
                    onPressed: () => Navigator.pushNamed(context, '/combat'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: SovereignTheme.pink,
                      padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 15),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                    ),
                    child: const Text('开始试炼', style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
                  )
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

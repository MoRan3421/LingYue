import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class BattlePassPage extends StatelessWidget {
  const BattlePassPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('九道祭典 (BATTLE PASS)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: Column(
        children: [
          // Header
          Container(
            height: 180,
            width: double.infinity,
            padding: const EdgeInsets.all(25),
            decoration: const BoxDecoration(
              gradient: LinearGradient(colors: [SovereignTheme.purple, SovereignTheme.pink]),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Text('当前等级: 42', style: SovereignTheme.brandStyle(size: 24, bold: true, color: Colors.white)),
                const SizedBox(height: 10),
                ClipRRect(
                  borderRadius: BorderRadius.circular(5),
                  child: const LinearProgressIndicator(
                    value: 0.7,
                    backgroundColor: Colors.white24,
                    color: Colors.white,
                    minHeight: 10,
                  ),
                ),
                const SizedBox(height: 10),
                const Text('距离解锁：始源武僧·业火限定皮肤 还有 8 级', style: TextStyle(fontSize: 12, color: Colors.white70)),
              ],
            ),
          ),
          
          // Rewards List
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(20),
              itemCount: 100,
              itemBuilder: (context, i) {
                bool isUnlocked = i <= 42;
                return Container(
                  margin: const EdgeInsets.only(bottom: 15),
                  padding: const EdgeInsets.all(15),
                  decoration: SovereignTheme.glassDecoration.copyWith(
                    color: isUnlocked ? SovereignTheme.blue.withOpacity(0.05) : Colors.white.withOpacity(0.02),
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(shape: BoxShape.circle, color: isUnlocked ? SovereignTheme.blue : Colors.white10),
                        child: Center(child: Text('${i + 1}', style: const TextStyle(fontWeight: FontWeight.bold))),
                      ),
                      const SizedBox(width: 20),
                      Expanded(
                        child: Text(
                          i % 5 == 0 ? '始源宝箱 (LARGE)' : '灵约石 x100',
                          style: TextStyle(color: isUnlocked ? Colors.white : Colors.white24),
                        ),
                      ),
                      if (isUnlocked) const Icon(Icons.check_circle, color: SovereignTheme.blue, size: 20),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}

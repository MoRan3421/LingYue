import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class DragonPage extends StatelessWidget {
  const DragonPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('龙魂圣域 (DRAGON SANCTUARY)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          children: [
            // Active Dragon Summary
            Container(
              padding: const EdgeInsets.all(30),
              decoration: SovereignTheme.glassDecoration,
              child: Column(
                children: [
                   Row(
                     mainAxisAlignment: MainAxisAlignment.center,
                     children: [
                       const Icon(Icons.local_fire_department, color: SovereignTheme.accentRed, size: 60),
                       Text('始源火龙 · 共鸣', style: SovereignTheme.brandStyle(size: 24, bold: true)),
                     ],
                   ),
                   const SizedBox(height: 10),
                   const Text('当前阶段：3 / 3 (全属性 +500%)', style: TextStyle(color: Colors.white54)),
                ],
              ),
            ),
            
            const SizedBox(height: 30),
            
            // 525 Effects Matrix Preview
            Text('525 龙魂共鸣矩阵 (EFFS)', style: SovereignTheme.brandStyle(size: 16, bold: true)),
            const SizedBox(height: 20),
            ListView.separated(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: 7,
              separatorBuilder: (_, __) => const SizedBox(height: 15),
              itemBuilder: (context, i) => Container(
                padding: const EdgeInsets.all(20),
                decoration: SovereignTheme.glassDecoration,
                child: Row(
                  children: [
                    CircleAvatar(backgroundColor: [Colors.red, Colors.blue, Colors.green, Colors.yellow, Colors.purple, Colors.orange, Colors.cyan][i], radius: 10),
                    const SizedBox(width: 20),
                    Expanded(child: Text('${['始源', '死咒', '极寒', '狂雷', '青木', '暗影', '混元'][i]}龙魂 - 已同步', style: SovereignTheme.brandStyle(size: 14))),
                    const Icon(Icons.check_circle, color: Colors.green, size: 20),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

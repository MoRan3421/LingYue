import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class ArcanaPage extends StatelessWidget {
  const ArcanaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('灵瑞圣坛 (ARCANA MATRIX)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          children: [
            // Arcana Board Grid
            Container(
              padding: const EdgeInsets.all(20),
              decoration: SovereignTheme.glassDecoration,
              child: GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 6,
                mainAxisSpacing: 10,
                crossAxisSpacing: 10,
                children: List.generate(30, (i) => Container(
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(colors: [
                       [SovereignTheme.pink, Colors.blueAccent, Colors.redAccent, Colors.purpleAccent, Colors.greenAccent][i % 5],
                       Colors.transparent
                    ]),
                  ),
                  child: const Center(child: Text('Lv.150', style: TextStyle(fontSize: 8, fontWeight: FontWeight.bold))),
                )),
              ),
            ),
            
            const SizedBox(height: 40),
            
            // Upgrade Stats
            _InfoSection(
              title: '瑞符共鸣强度',
              val: '+108% 始源攻击',
              color: SovereignTheme.pink,
            ),
            const SizedBox(height: 20),
            
            // Upgrade Button
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: SovereignTheme.pink,
                minimumSize: const Size(double.infinity, 60),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
              ),
              child: const Text('立即强化 (UPGRADE)', style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _InfoSection({required String title, required String val, required Color color}) {
    return Container(
      padding: const EdgeInsets.all(25),
      decoration: SovereignTheme.glassDecoration,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(title, style: SovereignTheme.brandStyle()),
          Text(val, style: SovereignTheme.brandStyle(color: color, bold: true)),
        ],
      ),
    );
  }
}

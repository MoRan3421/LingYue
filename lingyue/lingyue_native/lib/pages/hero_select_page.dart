import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class HeroSelectPage extends StatelessWidget {
  const HeroSelectPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('召唤觉醒者 (SELECT HERO)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: Column(
        children: [
          // Filters
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 20),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Row(
                children: ['全部', '业火', '寒霜', '雷鸣', '灵木'].map((f) => Container(
                  margin: const EdgeInsets.only(right: 10),
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
                  decoration: BoxDecoration(
                    color: f == '全部' ? SovereignTheme.pink : Colors.white10,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: f == '全部' ? Colors.transparent : Colors.white12),
                  ),
                  child: Text(f, style: TextStyle(color: f == '全部' ? Colors.black : Colors.white54, fontSize: 12, fontWeight: FontWeight.bold)),
                )).toList(),
              ),
            ),
          ),
          
          // Hero Grid
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.all(20),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
                crossAxisSpacing: 15,
                mainAxisSpacing: 15,
                childAspectRatio: 0.7,
              ),
              itemCount: 12, // Simulation
              itemBuilder: (context, i) {
                return GestureDetector(
                  onTap: () => Navigator.pushNamed(context, '/combat'),
                  child: Container(
                    decoration: SovereignTheme.glassDecoration.copyWith(
                      border: Border.all(color: SovereignTheme.pink.withOpacity(0.1)),
                    ),
                    child: Column(
                      children: [
                        Expanded(
                          child: Stack(
                            alignment: Alignment.center,
                            children: [
                               // 3D Avatar Simulation
                               Transform.scale(
                                 scale: 1.2,
                                 child: const Icon(Icons.person_3_outlined, color: Colors.white10, size: 80),
                               ),
                               if (i == 0) // Monk Warrior
                                 Image.network(
                                   'https://via.placeholder.com/100x100/1e1e2e/fbbf24?text=MONK', // Real Asset Render
                                   fit: BoxFit.contain,
                                 ),
                            ],
                          ),
                        ),
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            gradient: LinearGradient(colors: [Colors.black54, SovereignTheme.pink.withOpacity(0.1)]),
                            borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20)),
                          ),
                          child: Column(
                            children: [
                              Text(i == 0 ? '始源武僧' : '英雄_$i', textAlign: TextAlign.center, style: SovereignTheme.brandStyle(size: 12, bold: true)),
                              Text(i == 0 ? '法刺' : '重装', style: const TextStyle(fontSize: 8, color: Colors.white38)),
                            ],
                          ),
                        )
                      ],
                    ),
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

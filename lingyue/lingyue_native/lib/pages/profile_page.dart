import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('觉醒者空间 (PLAYER HUB)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Stack(
              clipBehavior: Clip.none,
              children: [
                // Hero Background (Large 3D Model)
                Container(
                  height: 250,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(30),
                    image: const DecorationImage(
                      image: NetworkImage('https://via.placeholder.com/600x250/1e1e2e/fbbf24?text=3D+PORTRAIT'),
                      fit: BoxFit.cover,
                    ),
                  ),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(30),
                      gradient: const LinearGradient(
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                        colors: [SovereignTheme.background, Colors.transparent],
                      ),
                    ),
                  ),
                ),
                // Avatar & Info Overlay
                Positioned(
                  bottom: -30,
                  left: 20,
                  right: 20,
                  child: Container(
                    decoration: SovereignTheme.getGlassDecoration(),
                    padding: const EdgeInsets.all(20),
                    child: Row(
                      children: [
                        const HeroAvatar(level: 142),
                        const SizedBox(width: 20),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('灵约觉醒者_108', style: SovereignTheme.brandStyle(size: 24, bold: true)),
                            Row(
                               children: [
                                 const Icon(Icons.stars, color: SovereignTheme.pink, size: 14),
                                 const SizedBox(width: 5),
                                 Text('大乘金仙 · 始源契约者', style: SovereignTheme.brandStyle(size: 12, color: SovereignTheme.pink)),
                               ],
                            ),
                          ],
                        )
                      ],
                    ),
                  ),
                ),
              ],
            ),
            
            const SizedBox(height: 60),
            
            // Progression
            Text('修行进度 (Lv.142 / 500)', style: SovereignTheme.brandStyle(size: 16)),
            const SizedBox(height: 15),
            ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: const LinearProgressIndicator(
                value: 142 / 500,
                minHeight: 12,
                backgroundColor: Colors.white10,
                valueColor: AlwaysStoppedAnimation<Color>(SovereignTheme.pink),
              ),
            ),
            
            const SizedBox(height: 40),
            
            // Medals
            Text('勋章荣耀 (MEDALS)', style: SovereignTheme.brandStyle(size: 16, bold: true)),
            const SizedBox(height: 20),
            GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: 4,
              mainAxisSpacing: 15,
              crossAxisSpacing: 15,
              children: List.generate(8, (i) => Container(
                decoration: BoxDecoration(
                  color: i < 3 ? SovereignTheme.pink.withOpacity(0.1) : Colors.white10,
                  borderRadius: BorderRadius.circular(15),
                  border: Border.all(color: i < 3 ? SovereignTheme.pink : Colors.white10),
                ),
                child: Icon(Icons.shield, color: i < 3 ? SovereignTheme.pink : Colors.white24, size: 24),
              )),
            ),
            
            const SizedBox(height: 40),
            
            // Stats (Nine Paths of Assets)
            Text('九道资产 (SOVEREIGN ASSETS)', style: SovereignTheme.brandStyle(size: 16, bold: true)),
            const SizedBox(height: 15),
            GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: 3,
              mainAxisSpacing: 10,
              crossAxisSpacing: 10,
              childAspectRatio: 2.5,
              children: const [
                _AssetMiniCard('灵约石', '1,420'),
                _AssetMiniCard('功德', '5,200'),
                _AssetMiniCard('业力', '980'),
                _AssetMiniCard('因果', '12k'),
                _AssetMiniCard('鸿蒙', '450'),
                _AssetMiniCard('混沌', '210'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _AssetMiniCard extends StatelessWidget {
  final String label;
  final String value;
  const _AssetMiniCard(this.label, this.value);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.03),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.white10),
      ),
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(label, style: const TextStyle(fontSize: 10, color: Colors.white38)),
            Text(value, style: SovereignTheme.brandStyle(size: 14, bold: true, color: SovereignTheme.pink)),
          ],
        ),
      ),
    );
  }
}

class HeroAvatar extends StatelessWidget {
  final int level;
  const HeroAvatar({super.key, required this.level});

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: [
        SizedBox(
          width: 80,
          height: 80,
          child: CircularProgressIndicator(
            value: level / 500,
            strokeWidth: 4,
            backgroundColor: Colors.white10,
            color: SovereignTheme.pink,
          ),
        ),
        const CircleAvatar(radius: 34, backgroundColor: Colors.white12, child: Icon(Icons.person, color: SovereignTheme.pink)),
        Positioned(
          bottom: 0,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
            decoration: BoxDecoration(color: SovereignTheme.pink, borderRadius: BorderRadius.circular(10)),
            child: Text('LV.$level', style: const TextStyle(color: Colors.black, fontSize: 10, fontWeight: FontWeight.bold)),
          ),
        ),
      ],
    );
  }
}

class StatItem extends StatelessWidget {
  final String label;
  final String val;
  const StatItem({super.key, required this.label, required this.val});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(label, style: SovereignTheme.brandStyle(size: 10, color: Colors.white38)),
        const SizedBox(height: 5),
        Text(val, style: SovereignTheme.brandStyle(size: 18, bold: true)),
      ],
    );
  }
}

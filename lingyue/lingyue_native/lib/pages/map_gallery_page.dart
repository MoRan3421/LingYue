import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class MapGalleryPage extends StatelessWidget {
  const MapGalleryPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('九界地理 (WORLD MAPS)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(20),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 20,
          mainAxisSpacing: 20,
          childAspectRatio: 0.8,
        ),
        itemCount: 4,
        itemBuilder: (context, index) {
          final maps = [
            {'name': '始源祭坛', 'desc': '所有因果的起始地', 'img': 'assets/map_preview.png'},
            {'name': '业力荒原', 'desc': '无尽修行的试炼场', 'img': 'assets/map_preview.png'},
            {'name': '功德瑶池', 'desc': '神愈之力的源泉', 'img': 'assets/map_preview.png'},
            {'name': '天道裂隙', 'desc': '最终决战的禁地', 'img': 'assets/map_preview.png'},
          ];
          return _MapCard(
            name: maps[index]['name']!,
            desc: maps[index]['desc']!,
            // In a real app we'd use the generated image path
          );
        },
      ),
    );
  }
}

class _MapCard extends StatelessWidget {
  final String name;
  final String desc;
  const _MapCard({required this.name, required this.desc});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: SovereignTheme.getGlassDecoration(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [SovereignTheme.pink.withOpacity(0.1), SovereignTheme.purple.withOpacity(0.1)],
                ),
              ),
              child: const Icon(Icons.map_outlined, color: Colors.white24, size: 50),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: SovereignTheme.brandStyle(size: 16, bold: true, color: SovereignTheme.pink)),
                const SizedBox(height: 5),
                Text(desc, style: const TextStyle(fontSize: 10, color: Colors.white38)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

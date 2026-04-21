import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class MallPage extends StatefulWidget {
  const MallPage({super.key});

  @override
  State<MallPage> createState() => _MallPageState();
}

class _MallPageState extends State<MallPage> {
  String activeDepot = '灵约石';
  
  final List<Map<String, dynamic>> depots = [
    {'name': '灵约石', 'color': SovereignTheme.pink, 'items': ['英雄契约·始源']},
    {'name': '功德', 'color': SovereignTheme.blue, 'items': ['飞升金丹']},
    {'name': '业力', 'color': SovereignTheme.purple, 'items': ['深渊之刃']},
    {'name': '因果', 'color': const Color(0xFFFACC15), 'items': ['轮回转生证']},
    {'name': '鸿蒙', 'color': const Color(0xFF4ADE80), 'items': ['混沌初开包']},
    {'name': '混沌', 'color': const Color(0xFFF87171), 'items': ['万龙祭典']},
    {'name': '天命', 'color': const Color(0xFF38BDF8), 'items': ['命运丝线']},
    {'name': '轮回', 'color': const Color(0xFFC084FC), 'items': ['三生石']},
    {'name': '道缘', 'color': const Color(0xFF2DD4BF), 'items': ['双子塔秘钥']},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('九界大藏 (THE DEPOTS)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: Row(
        children: [
          // Sidebar
          Container(
            width: 120,
            padding: const EdgeInsets.all(10),
            child: ListView.separated(
              itemCount: depots.length,
              separatorBuilder: (_, __) => const SizedBox(height: 10),
              itemBuilder: (context, i) {
                bool isActive = activeDepot == depots[i]['name'];
                return GestureDetector(
                  onTap: () => setState(() => activeDepot = depots[i]['name']),
                  child: Container(
                    height: 80,
                    decoration: BoxDecoration(
                      color: isActive ? depots[i]['color'].withOpacity(0.1) : Colors.transparent,
                      borderRadius: BorderRadius.circular(15),
                      border: Border.all(color: isActive ? depots[i]['color'] : Colors.white10),
                    ),
                    child: Center(
                      child: Text(
                        depots[i]['name'],
                        style: SovereignTheme.brandStyle(size: 14, color: isActive ? depots[i]['color'] : Colors.white54),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          
          // Item Grid
          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.all(20),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 20,
                mainAxisSpacing: 20,
                childAspectRatio: 0.8,
              ),
              itemCount: 4,
              itemBuilder: (context, i) {
                return Container(
                  decoration: SovereignTheme.glassDecoration,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                       Container(
                         width: 80,
                         height: 80,
                         decoration: BoxDecoration(
                           gradient: RadialGradient(colors: [depots.firstWhere((d) => d['name'] == activeDepot)['color'].withOpacity(0.3), Colors.transparent]),
                         ),
                         child: const Icon(Icons.auto_awesome, color: Colors.white, size: 40),
                       ),
                       const SizedBox(height: 15),
                       Text('九界瑰宝: ${depots.firstWhere((d) => d['name'] == activeDepot)['items'][0]}', 
                         textAlign: TextAlign.center,
                         style: SovereignTheme.brandStyle(size: 11, bold: true)),
                       const SizedBox(height: 5),
                       Text('需要: 1,420 $activeDepot', style: const TextStyle(fontSize: 8, color: Colors.white38)),
                       const SizedBox(height: 20),
                       GestureDetector(
                         onTap: () {
                           ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('已消耗 $activeDepot 购买成功！')));
                         },
                         child: Container(
                           padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
                           decoration: BoxDecoration(
                             borderRadius: BorderRadius.circular(20),
                             border: Border.all(color: depots.firstWhere((d) => d['name'] == activeDepot)['color']),
                           ),
                           child: Text('购买 (BUY)', style: TextStyle(color: depots.firstWhere((d) => d['name'] == activeDepot)['color'], fontSize: 10, fontWeight: FontWeight.bold)),
                         ),
                       )
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

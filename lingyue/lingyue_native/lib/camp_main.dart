import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'theme/sovereign_theme.dart';

void main() {
  runApp(const LingYueCampApp());
}

class LingYueCampApp extends StatelessWidget {
  const LingYueCampApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '灵约：开发者营地',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: SovereignTheme.background,
        textTheme: GoogleFonts.outfitTextTheme(ThemeData.dark().textTheme),
      ),
      home: const CampHome(),
    );
  }
}

class CampHome extends StatelessWidget {
  const CampHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('觉醒营地 (CAMP)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          children: [
            // Banner
            Container(
              height: 200,
              width: double.infinity,
              decoration: SovereignTheme.glassDecoration.copyWith(
                image: const DecorationImage(image: AssetImage('assets/banner.png'), fit: BoxFit.cover),
              ),
              child: Center(child: Text('始源赛季：S1 全面开启', style: SovereignTheme.brandStyle(size: 24, bold: true))),
            ),
            
            const SizedBox(height: 30),
            
            // News Feed
            _SectionHeader('最新精彩 (FEATURED)'),
            _NewsItem('【攻略】洛神 36阶进化完全指南', '2小时前'),
            _NewsItem('【公告】平衡性调整：混沌龙魂增益下降 5%', '5小时前'),
            
            const SizedBox(height: 40),
            
            // Player Interaction
            _SectionHeader('活跃道友 (PLAYERS)'),
            Row(
              children: List.generate(4, (i) => const Padding(
                padding: EdgeInsets.only(right: 15),
                child: CircleAvatar(radius: 25, backgroundColor: Colors.white10),
              )),
            ),
          ],
        ),
      ),
    );
  }

  Widget _SectionHeader(String title) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: Row(
        children: [
          Text(title, style: SovereignTheme.brandStyle(size: 16, bold: true, color: SovereignTheme.pink)),
          const Spacer(),
          const Text('更多', style: TextStyle(fontSize: 12, color: Colors.white24)),
        ],
      ),
    );
  }

  Widget _NewsItem(String title, String time) {
    return Container(
      margin: const EdgeInsets.only(bottom: 15),
      padding: const EdgeInsets.all(20),
      decoration: SovereignTheme.glassDecoration,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(child: Text(title, style: SovereignTheme.brandStyle(size: 14))),
          Text(time, style: const TextStyle(fontSize: 10, color: Colors.white24)),
        ],
      ),
    );
  }
}

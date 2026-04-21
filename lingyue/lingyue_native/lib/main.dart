import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'theme/sovereign_theme.dart';
import 'pages/mall_page.dart';
import 'pages/profile_page.dart';
import 'pages/combat_page.dart';
import 'pages/hero_select_page.dart';
import 'pages/result_page.dart';
import 'pages/social_page.dart';
import 'pages/arcana_page.dart';
import 'pages/dragon_page.dart';
import 'pages/governance_page.dart';
import 'pages/coding_page.dart';
import 'pages/map_gallery_page.dart';
import 'pages/battle_pass_page.dart';
import 'pages/login_page.dart';
import 'pages/trial_page.dart';
import 'pages/credits_mode_page.dart';
import 'widgets/dev_console.dart';
import 'widgets/panda_guide.dart';

void main() {
  runApp(const LingYueApp());
}

class LingYueApp extends StatelessWidget {
  const LingYueApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '灵约：无量无尽',
      debugShowCheckedModeBanner: false,
      builder: (context, child) => DevConsoleOverlay(child: child!),
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: SovereignTheme.background,
        colorScheme: const ColorScheme.dark(
          primary: SovereignTheme.pink,
          secondary: SovereignTheme.accentRed,
          surface: SovereignTheme.card,
        ),
        textTheme: GoogleFonts.outfitTextTheme(
          ThemeData.dark().textTheme,
        ),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const LandingPage(),
        '/select': (context) => const HeroSelectPage(),
        '/combat': (context) => const CombatPage(),
        '/mall': (context) => const MallPage(),
        '/profile': (context) => const ProfilePage(),
        '/result': (context) => const ResultPage(),
        '/social': (context) => const SocialPage(),
        '/arcana': (context) => const ArcanaPage(),
        '/dragons': (context) => const DragonPage(),
        '/gov': (context) => const GovernancePage(),
        '/coding': (context) => const CodingPage(),
        '/maps': (context) => const MapGalleryPage(),
        '/pass': (context) => const BattlePassPage(),
        '/login': (context) => const LoginPage(),
        '/home': (context) => const MainPage(),
        '/trial': (context) => const TrialPage(),
        '/credits_mode': (context) => CreditsModePage(),
      },
    );
  }
}

class LandingPage extends StatelessWidget {
  const LandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        decoration: const BoxDecoration(
          gradient: RadialGradient(
            center: Alignment.center,
            radius: 1.2,
            colors: [Color(0xFF1E1E2E), Color(0xFF050510)],
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'LING YUE',
              style: SovereignTheme.brandStyle(size: 80, bold: true, color: SovereignTheme.pink),
            ),
            const SizedBox(height: 10),
            Text(
              '灵约：始源全量竞技 · 原生端',
              style: SovereignTheme.brandStyle(size: 16, color: Colors.white54),
            ),
            const SizedBox(height: 80),
            
            // Primary Start Button
            ActionChip(
              onPressed: () => Navigator.pushNamed(context, '/select'),
              label: const Text('进入始源对局 (START)'),
              backgroundColor: SovereignTheme.pink,
              labelStyle: const TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
              padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 15),
            ),
            
            const SizedBox(height: 30),
            
            // LING YUE CAMP CONNECTION
            GestureDetector(
              onTap: () {
                // In a real app, this would open URL or switch to Camp app
                ScaffoldMessenger.of(context).showToast('正在前往【灵约营地】...');
              },
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 12),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  border: Border.all(color: Colors.blueAccent.withOpacity(0.5)),
                  color: Colors.blueAccent.withOpacity(0.05),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(Icons.groups_outlined, color: Colors.blueAccent, size: 18),
                    const SizedBox(width: 10),
                    Text('灵约营地 (CAMP HUB)', style: SovereignTheme.brandStyle(size: 14, color: Colors.blueAccent)),
                  ],
                ),
              ),
            ),

            const SizedBox(height: 50),
            
            // Sub Navigation Grid
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 40),
              child: Wrap(
                spacing: 20,
                runSpacing: 15,
                alignment: WrapAlignment.center,
                children: [
                  _MiniLink(context, '九界商城', '/mall'),
                  _MiniLink(context, '个人传记', '/profile'),
                  _MiniLink(context, '对局结算', '/result'),
                  _MiniLink(context, '九界社交', '/social'),
                  _MiniLink(context, '瑞符强化', '/arcana'),
                  _MiniLink(context, '始源裁决', '/gov'),
                  _MiniLink(context, '灵约编程', '/coding'),
                  _MiniLink(context, '九界地理', '/maps'),
                  _MiniLink(context, '九道祭典', '/pass'),
                  _MiniLink(context, '九转试炼 (STORY)', '/trial'),
                ],
              ),
            ),
            PandaGuide(),
          ],
        ),
      ),
    );
  }

  Widget _MiniLink(BuildContext context, String label, String route) {
    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, route),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(border: Border.all(color: Colors.white10), borderRadius: BorderRadius.circular(10)),
        child: Text(label, style: SovereignTheme.brandStyle(size: 11, color: Colors.white38)),
      ),
    );
  }
}

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('灵约营地 (MAIN PAGE)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SovereignTheme.logoFX(size: 120),
            const SizedBox(height: 30),
            Text('灵约营地', style: SovereignTheme.brandStyle(size: 32, bold: true)),
            const SizedBox(height: 10),
            Text('道友互动中心', style: SovereignTheme.brandStyle(size: 14, color: Colors.white38)),
          ],
        ),
      ),
    );
  }
}

// Helper Extension for SnackBar/Toast
extension ToastHelper on ScaffoldMessengerState {
  void showToast(String msg) {
    showSnackBar(SnackBar(content: Text(msg), backgroundColor: SovereignTheme.card));
  }
}

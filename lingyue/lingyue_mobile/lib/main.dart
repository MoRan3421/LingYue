import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'pages/landing_page.dart';
import 'pages/combat_page.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => GameState()),
      ],
      child: const LingYueApp(),
    ),
  );
}

class Currencies {
  int spiritStone = 88888;
  int daoYuan = 5000;
  int merit = 3000;
  int karma = 2500;
  int causality = 1200;
  int destiny = 800;
  int reincarnation = 600;
  int hongmeng = 300;
  int chaos = 150;
}

class GameState extends ChangeNotifier {
  String lang = 'CN';
  String selectedHero = '始源之光 · 灵源';
  Color accentColor = const Color(0xFFFBBF24);
  int vipLevel = 36;
  int nobleLevel = 10;
  Currencies currencies = Currencies();

  void toggleLang() {
    lang = lang == 'CN' ? 'EN' : 'CN';
    notifyListeners();
  }
}

class LingYueApp extends StatelessWidget {
  const LingYueApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '灵约：不朽始源',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: Colors.black,
        textTheme: GoogleFonts.outfitTextTheme(ThemeData.dark().textTheme),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFFFBBF24),
          secondary: Color(0xFF3B82F6),
        ),
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const LandingPage(),
        '/combat': (context) => const CombatPage(),
      },
    );
  }
}

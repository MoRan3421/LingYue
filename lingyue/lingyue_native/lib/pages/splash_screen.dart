import 'package:flutter/material.dart';
import 'dart:async';
import '../theme/sovereign_theme.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 3),
    );

    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: const Interval(0.0, 0.5, curve: Curves.easeIn)),
    );

    _scaleAnimation = Tween<double>(begin: 0.8, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: const Interval(0.0, 1.0, curve: Curves.elasticOut)),
    );

    _controller.forward();

    Timer(const Duration(seconds: 4), () {
      Navigator.pushReplacementNamed(context, '/login'); // Navigate to Login After Splash
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: SovereignTheme.background,
      body: Center(
        child: FadeTransition(
          opacity: _fadeAnimation,
          child: ScaleTransition(
            scale: _scaleAnimation,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // LOGO FX
                Container(
                  width: 150,
                  height: 150,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: SovereignTheme.pink.withOpacity(0.5),
                        blurRadius: 40,
                        spreadRadius: 10,
                      )
                    ],
                  ),
                  child: Center(
                    child: Text(
                      '灵',
                      style: SovereignTheme.brandStyle(size: 80, bold: true, color: SovereignTheme.pink),
                    ),
                  ),
                ),
                const SizedBox(height: 40),
                Text(
                  '始源工作室 (ORIGIN STUDIO)',
                  style: SovereignTheme.brandStyle(size: 14, color: Colors.white38),
                ),
                const SizedBox(height: 100),
                // Loading Bar
                SizedBox(
                  width: 200,
                  child: Column(
                    children: [
                      const LinearProgressIndicator(
                        backgroundColor: Colors.white10,
                        color: SovereignTheme.blue,
                        minHeight: 2,
                      ),
                      const SizedBox(height: 10),
                      Text('正在连接始源因果网...', style: SovereignTheme.brandStyle(size: 10, color: Colors.white24)),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                const Text('VER 1.0.8-ORIGIN', style: TextStyle(fontSize: 8, color: Colors.white12)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

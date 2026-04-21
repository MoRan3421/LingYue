import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';
import 'dart:math';

class CreditsModePage extends StatefulWidget {
  const CreditsModePage({super.key});

  @override
  State<CreditsModePage> createState() => _CreditsModePageState();
}

class _CreditsModePageState extends State<CreditsModePage> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  final List<String> _credits = [
    '始源架构师: TuanTuanPanda',
    '核心引擎: AURA v1.0',
    'AI 引导: 团团熊猫',
    '世界观: 吉隆坡仙城',
    '技术栈: Flutter / React / C',
    '感谢所有觉醒者',
    '万世无量 · 始源永恒'
  ];

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(seconds: 15))..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          // Background Stars
          ...List.generate(50, (i) {
            final r = Random(i);
            return Positioned(
              left: r.nextDouble() * MediaQuery.of(context).size.width,
              top: r.nextDouble() * MediaQuery.of(context).size.height,
              child: Container(width: 2, height: 2, color: Colors.white24),
            );
          }),

          // Scrolling Credits
          AnimatedBuilder(
            animation: _controller,
            builder: (context, child) {
              return Positioned(
                top: MediaQuery.of(context).size.height - (_controller.value * (MediaQuery.of(context).size.height + 1000)),
                left: 0,
                right: 0,
                child: Column(
                  children: _credits.map((t) => Padding(
                    padding: const EdgeInsets.symmetric(vertical: 40),
                    child: Text(t, style: SovereignTheme.brandStyle(size: 24, bold: true, color: SovereignTheme.pink)),
                  )).toList(),
                ),
              );
            },
          ),

          // Close button
          Positioned(
            top: 50,
            right: 30,
            child: IconButton(
              icon: const Icon(Icons.close, color: Colors.white54),
              onPressed: () => Navigator.pop(context),
            ),
          )
        ],
      ),
    );
  }
}

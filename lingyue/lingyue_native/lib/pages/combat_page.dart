import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';
import '../game/map_engine.dart';
import '../services/performance_controller.dart';

class CombatPage extends StatefulWidget {
  const CombatPage({super.key});

  @override
  State<CombatPage> createState() => _CombatPageState();
}

class _CombatPageState extends State<CombatPage> {
  late PerformanceController _perf;

  @override
  void initState() {
    super.initState();
    _perf = PerformanceController();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: LayoutBuilder(
        builder: (context, constraints) {
          final isDesktop = constraints.maxWidth > 900;
          return Stack(
            children: [
              // 3.5D Map Engine
              Positioned.fill(
                child: CustomPaint(
                  painter: SquareMapEngine(),
                ),
              ),
              
              // Cinematic Fog
              Container(
                decoration: BoxDecoration(
                  gradient: RadialGradient(
                    colors: [Colors.transparent, Colors.black.withOpacity(0.9)],
                    radius: 1.8,
                  ),
                ),
              ),

              // 3D Hero Rendering
              Center(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    _buildHeroMesh(),
                    if (!_perf.isLowSpecMode) const SkillCastingRing(),
                    const SizedBox(height: 20),
                    _buildHUDBar(),
                  ],
                ),
              ),
              
              // Responsive UI Controls
              _buildControls(isDesktop),
              
              // Top Overlay
              _buildTopHUD(),
            ],
          );
        },
      ),
    );
  }

  Widget _buildHeroMesh() {
    return Transform(
      transform: Matrix4.identity()
        ..setEntry(3, 2, 0.001)
        ..rotateX(-0.15)
        ..rotateY(0.1),
      alignment: Alignment.center,
      child: Container(
        width: 320,
        height: 420,
        decoration: BoxDecoration(
          boxShadow: _perf.isLowSpecMode ? [] : [
            BoxShadow(color: SovereignTheme.pink.withOpacity(0.3), blurRadius: 60, spreadRadius: 5)
          ],
        ),
        child: Image.asset(
          'assets/hero_3d_render.png', 
          errorBuilder: (c, e, s) => Container(
            color: Colors.white.withOpacity(0.05),
            child: const Center(child: Icon(Icons.person_pin, color: SovereignTheme.pink, size: 100)),
          ),
          fit: BoxFit.contain,
        ),
      ),
    );
  }

  Widget _buildHUDBar() {
    return Container(
      width: 140,
      height: 8,
      decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(4)),
      child: FractionallySizedBox(
        alignment: Alignment.centerLeft,
        widthFactor: 0.85,
        child: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [Colors.greenAccent, Colors.greenAccent.withOpacity(0.5)]),
            borderRadius: BorderRadius.circular(4),
          ),
        ),
      ),
    );
  }

  Widget _buildControls(bool isDesktop) {
    return Stack(
      children: [
        Positioned(
          left: isDesktop ? 80 : 40,
          bottom: isDesktop ? 80 : 40,
          child: _buildJoystick(),
        ),
        Positioned(
          right: isDesktop ? 80 : 30,
          bottom: isDesktop ? 80 : 30,
          child: _buildSkillMatrix(isDesktop),
        ),
      ],
    );
  }

  Widget _buildJoystick() {
    return Container(
      width: 160,
      height: 160,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.white.withOpacity(0.04),
        border: Border.all(color: Colors.white10),
      ),
      child: Center(
        child: Container(
          width: 65,
          height: 65,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: SovereignTheme.pink.withOpacity(0.6),
            boxShadow: [BoxShadow(color: SovereignTheme.pink.withOpacity(0.4), blurRadius: 20)],
            gradient: RadialGradient(colors: [SovereignTheme.pink, SovereignTheme.pink.withOpacity(0.6)]),
          ),
        ),
      ),
    );
  }

  Widget _buildSkillMatrix(bool isDesktop) {
    final scale = isDesktop ? 1.2 : 1.0;
    return SizedBox(
      width: 260 * scale,
      height: 260 * scale,
      child: Stack(
        alignment: Alignment.bottomRight,
        children: [
           Positioned(top: 0, right: 20, child: SkillButton(color: SovereignTheme.pink, label: 'ULT', size: 80 * scale)),
           const Positioned(bottom: 110, right: 110, child: SkillButton(color: Colors.blueAccent, label: '1')),
           const Positioned(bottom: 25, right: 140, child: SkillButton(color: Colors.purpleAccent, label: '2')),
           const Positioned(bottom: 0, right: 40, child: SkillButton(color: Colors.orangeAccent, label: '3')),
        ],
      ),
    );
  }

  Widget _buildTopHUD() {
    return Positioned(
      top: 50,
      left: 30,
      right: 30,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _buildScoreboard(),
          _buildMiniMap(),
          IconButton(
            onPressed: () => Navigator.pop(context),
            icon: const Icon(Icons.exit_to_app, color: Colors.white54, size: 28),
          ),
        ],
      ),
    );
  }

  Widget _buildScoreboard() {
    return Row(
      children: [
        const CircleAvatar(radius: 24, backgroundColor: Colors.white10, child: Icon(Icons.person, color: Colors.white24)),
        const SizedBox(width: 15),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('24 : 12', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white)),
            const SizedBox(height: 5),
            SovereignTheme.auraEntropyBar(entropy: 0.0075),
          ],
        )
      ],
    );
  }

  Widget _buildMiniMap() {
    return Container(
      width: 120,
      height: 120,
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Colors.black45,
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: Colors.white10),
      ),
      child: Stack(
        children: [
          CustomPaint(size: const Size(120, 120), painter: MapPainter()),
          const Center(child: Icon(Icons.circle, color: Colors.green, size: 8)),
        ],
      ),
    );
  }
}

class MapPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = Colors.white.withOpacity(0.05)..strokeWidth = 1;
    for (int i = 0; i <= 8; i++) {
       double pos = i * (size.width / 8);
       canvas.drawLine(Offset(0, pos), Offset(size.width, pos), paint);
       canvas.drawLine(Offset(pos, 0), Offset(pos, size.height), paint);
    }
  }
  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class SkillCastingRing extends StatefulWidget {
  const SkillCastingRing({super.key});
  @override
  State<SkillCastingRing> createState() => _SkillCastingRingState();
}

class _SkillCastingRingState extends State<SkillCastingRing> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(milliseconds: 2500))..repeat();
  }
  @override
  void dispose() { _controller.dispose(); super.dispose(); }
  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, child) => Transform.scale(
        scale: 1.0 + (_controller.value * 1.5),
        child: Opacity(
          opacity: 1.0 - _controller.value,
          child: Container(
            width: 250,
            height: 50,
            decoration: BoxDecoration(
              borderRadius: const BorderRadius.all(Radius.elliptical(125, 25)),
              border: Border.all(color: SovereignTheme.pink.withOpacity(0.8), width: 3),
              boxShadow: [BoxShadow(color: SovereignTheme.pink.withOpacity(0.4), blurRadius: 30)],
            ),
          ),
        ),
      ),
    );
  }
}

class SkillButton extends StatelessWidget {
  final Color color;
  final String label;
  final double size;
  const SkillButton({super.key, required this.color, required this.label, this.size = 65});
  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color.withOpacity(0.1),
        border: Border.all(color: color.withOpacity(0.6), width: 2.5),
        boxShadow: [BoxShadow(color: color.withOpacity(0.3), blurRadius: 15)],
      ),
      child: Center(child: Text(label, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18))),
    );
  }
}

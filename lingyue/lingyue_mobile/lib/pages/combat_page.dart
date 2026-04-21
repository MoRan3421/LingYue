import 'dart:math';
import 'package:flutter/material.dart';

class CombatPage extends StatefulWidget {
  const CombatPage({super.key});

  @override
  State<CombatPage> createState() => _CombatPageState();
}

class _CombatPageState extends State<CombatPage> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  Offset _playerPos = const Offset(200, 300);
  Offset _targetPos = const Offset(200, 300);
  final List<Offset> _enemies = [const Offset(400, 200), const Offset(500, 400)];
  int _dragonsCount = 0;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(seconds: 1))..repeat();
    _controller.addListener(_updatePhysics);
  }

  void _updatePhysics() {
    setState(() {
      double dx = _targetPos.dx - _playerPos.dx;
      double dy = _targetPos.dy - _playerPos.dy;
      double dist = sqrt(dx * dx + dy * dy);
      if (dist > 5) {
        _playerPos += Offset(dx / dist * 4, dy / dist * 4);
      }
      
      // Simulate dragon growth every few seconds
      if (Random().nextInt(500) == 1 && _dragonsCount < 7) {
        _dragonsCount++;
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    bool isResonating = _dragonsCount == 7;

    return Scaffold(
      body: Stack(
        children: [
          // 3D Visual Layer (Native Paint)
          GestureDetector(
            onPanUpdate: (details) => setState(() => _targetPos = details.localPosition),
            onTapDown: (details) => setState(() => _targetPos = details.localPosition),
            child: CustomPaint(
              size: MediaQuery.of(context).size,
              painter: LingYuePainter(playerPos: _playerPos, enemies: _enemies, targetPos: _targetPos, isResonating: isResonating),
            ),
          ),
          
          if (isResonating) 
            Positioned.fill(
              child: Container(
                color: Colors.amber.withOpacity(0.05),
                child: const Center(
                  child: Text('万龙之主', style: TextStyle(fontSize: 80, fontWeight: FontWeight.w900, color: Colors.amber, letterSpacing: 20)),
                ),
              ),
            ),

          // Mobile HUD
          Positioned(
            bottom: 40,
            left: 20,
            right: 20,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  width: 100, height: 100,
                  decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white24), color: Colors.black38),
                  child: const Center(child: Icon(Icons.gamepad, color: Colors.white54)),
                ),
                Row(
                  children: [
                    _skillBtn('一'),
                    const SizedBox(width: 10),
                    _skillBtn('二'),
                    const SizedBox(width: 10),
                    _skillBtn('终', isUlt: true),
                  ],
                )
              ],
            ),
          ),
          
          // Top HUD (7 Dragons Tracking)
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('12:44', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Colors.amber)),
                      Row(
                        children: List.generate(7, (i) => Icon(
                          Icons.stars_sharp, 
                          size: 20, 
                          color: i < _dragonsCount ? Colors.amber : Colors.white10
                        )),
                      ),
                      IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close)),
                    ],
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  Widget _skillBtn(String label, {bool isUlt = false}) {
    return Container(
      width: 55, height: 55,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: isUlt ? Colors.amber.withOpacity(0.2) : Colors.black54,
        border: Border.all(color: isUlt ? Colors.amber : Colors.white24),
      ),
      child: Center(child: Text(label, style: const TextStyle(fontWeight: FontWeight.bold))),
    );
  }
}

class LingYuePainter extends CustomPainter {
  final Offset playerPos;
  final Offset targetPos;
  final List<Offset> enemies;
  final bool isResonating;

  LingYuePainter({required this.playerPos, required this.enemies, required this.targetPos, required this.isResonating});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = isResonating ? Colors.amber : const Color(0xFFFBBF24);
    
    // Draw Grid
    final gridPaint = Paint()..color = Colors.white.withOpacity(0.05)..strokeWidth = 1;
    for (double i = 0; i < size.width; i += 40) canvas.drawLine(Offset(i, 0), Offset(i, size.height), gridPaint);
    for (double j = 0; j < size.height; j += 40) canvas.drawLine(Offset(0, j), Offset(size.width, j), gridPaint);

    // Draw Player
    if (isResonating) canvas.drawCircle(playerPos, 30, Paint()..color = Colors.amber.withOpacity(0.2));
    canvas.drawCircle(playerPos, 20, paint);
    
    // Draw Enemies
    final enemyPaint = Paint()..color = Colors.redAccent;
    for (var e in enemies) {
      canvas.drawCircle(e, 15, enemyPaint);
    }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => true;
}

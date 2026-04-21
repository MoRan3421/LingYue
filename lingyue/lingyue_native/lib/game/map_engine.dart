import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class SquareMapEngine extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final Rect mapRect = Offset.zero & size;
    final paint = Paint();

    // 1. Draw Ground (Deep Purple/Black)
    paint.color = const Color(0xFF0F0F1A);
    canvas.drawRect(mapRect, paint);

    // 2. Draw Jungle Quadrants (Distinguished by darker color/patterns)
    paint.color = Colors.black.withOpacity(0.3);
    const double quadSize = 35; // % of total size
    
    // Top-Left Jungle
    canvas.drawRect(Rect.fromLTWH(size.width * 0.1, size.height * 0.1, size.width * 0.3, size.height * 0.3), paint);
    // Bottom-Right Jungle
    canvas.drawRect(Rect.fromLTWH(size.width * 0.6, size.height * 0.6, size.width * 0.3, size.height * 0.3), paint);

    // 3. Draw River (Diagonal)
    paint.color = Colors.blue.withOpacity(0.1);
    final Path riverPath = Path()
      ..moveTo(0, size.height)
      ..lineTo(size.width, 0)
      ..lineTo(size.width * 0.8, 0)
      ..lineTo(0, size.height * 0.8)
      ..close();
    canvas.drawPath(riverPath, paint);

    // 4. Draw Lanes (Neon Gold)
    final lanePaint = Paint()
      ..color = SovereignTheme.pink.withOpacity(0.2)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10;
    
    // Top Lane
    canvas.drawLine(const Offset(10, 10), Offset(size.width - 10, 10), lanePaint);
    canvas.drawLine(Offset(size.width - 10, 10), Offset(size.width - 10, size.height - 10), lanePaint);
    
    // Bottom Lane
    canvas.drawLine(const Offset(10, 10), Offset(10, size.height - 10), lanePaint);
    canvas.drawLine(Offset(10, size.height - 10), Offset(size.width - 10, size.height - 10), lanePaint);

    // Mid Lane
    canvas.drawLine(const Offset(10, 10), Offset(size.width - 10, size.height - 10), lanePaint);

    // 5. Draw Towers (Pulse points)
    final towerPaint = Paint()..color = SovereignTheme.pink;
    canvas.drawCircle(const Offset(100, 100), 5, towerPaint);
    canvas.drawCircle(Offset(size.width - 100, size.height - 100), 5, towerPaint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

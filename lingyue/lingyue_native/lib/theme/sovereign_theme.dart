import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SovereignTheme {
  // Palette V1.0-ORIGIN-SUPREME
  static const Color background = Color(0xFF0F172A);
  static const Color pink = Color(0xFFF472B6);
  static const Color blue = Color(0xFF38BDF8);
  static const Color purple = Color(0xFFC084FC);
  static const Color card = Color(0xFF1E1E2E);
  static const Color accentRed = Color(0xFFEF4444);

  static TextStyle brandStyle({
    double size = 16,
    bool bold = false,
    Color color = Colors.white,
  }) {
    return GoogleFonts.outfit(
      fontSize: size,
      fontWeight: bold ? FontWeight.w900 : FontWeight.w400,
      color: color,
      letterSpacing: bold ? 2.0 : 0.5,
    );
  }

  static BoxDecoration getGlassDecoration({bool lowSpec = false}) => BoxDecoration(
        color: lowSpec ? Colors.black.withOpacity(0.4) : Colors.white.withOpacity(0.05),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      );

  static BoxDecoration glassDecoration = getGlassDecoration();

  static Widget logoFX({double size = 100}) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        boxShadow: [
          BoxShadow(
            color: pink.withOpacity(0.4),
            blurRadius: 30,
            spreadRadius: 5,
          )
        ],
      ),
      child: Center(
        child: Text(
          '灵',
          style: brandStyle(size: size * 0.6, bold: true, color: pink),
        ),
      ),
    );
  }

  static Widget auraEntropyBar({required double entropy}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text('AURA 公平熵值', style: brandStyle(size: 10, color: Colors.white38)),
            Text('${(entropy * 100).toStringAsFixed(2)}%', style: brandStyle(size: 10, color: pink)),
          ],
        ),
        const SizedBox(height: 5),
        LinearProgressIndicator(
          value: entropy,
          backgroundColor: Colors.white10,
          color: pink,
          minHeight: 2,
        ),
      ],
    );
  }
}

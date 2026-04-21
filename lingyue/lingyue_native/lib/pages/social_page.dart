import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class SocialPage extends StatelessWidget {
  const SocialPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('九界社交 (WORLD SOCIAL)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          children: [
            // Marriage / Dao Companion
            _SocialCard(
              title: '道侣缘起 (MARRIAGE)',
              desc: '与心仪之人结为道侣，解锁双修技能与专属称号。',
              icon: Icons.favorite,
              color: Colors.pinkAccent,
            ),
            const SizedBox(height: 25),
            
            // Mentorship
            _SocialCard(
              title: '师徒传承 (MASTERY)',
              desc: '拜师学艺，传承衣钵。获得师父的指导属性加成。',
              icon: Icons.school,
              color: Colors.blueAccent,
            ),
            const SizedBox(height: 25),
            
            // Clan / Sect
            _SocialCard(
              title: '宗门霸业 (CLAN)',
              desc: '加入巅峰宗门，参与 36 界域宗门战，争夺始源雕像。',
              icon: Icons.shield,
              color: SovereignTheme.blue,
            ),
            const SizedBox(height: 25),

            // Sworn Brothers (New)
            _SocialCard(
              title: '桃园结义 (SWORN BROTHERS)',
              desc: '与挚友生死相随，激活“兄弟同心”被动，共闯九转轮回。',
              icon: Icons.groups,
              color: SovereignTheme.purple,
            ),
            
            const SizedBox(height: 40),
            
            // "World Chat" Preview
            Container(
              padding: const EdgeInsets.all(20),
              decoration: SovereignTheme.glassDecoration,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('全服因果 (WORLD CHAT)', style: SovereignTheme.brandStyle(size: 14, color: SovereignTheme.pink)),
                  const Divider(color: Colors.white10, height: 20),
                  _ChatLine('觉醒者_Alex', '谁来组队刷“Twin Towers”秘境？'),
                  _ChatLine('始源尊者', '业火系英雄求个灵木辅辅助！'),
                  _ChatLine('榴莲侠', '收因果币，比例 1:100'),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }

  Widget _ChatLine(String name, String msg) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: RichText(
        text: TextSpan(
          children: [
            TextSpan(text: '[$name]: ', style: const TextStyle(color: SovereignTheme.blue, fontWeight: FontWeight.bold, fontSize: 12)),
            TextSpan(text: msg, style: const TextStyle(color: Colors.white70, fontSize: 12)),
          ],
        ),
      ),
    );
  }

  Widget _SocialCard({required String title, required String desc, required IconData icon, required Color color}) {
    return Container(
      padding: const EdgeInsets.all(25),
      decoration: SovereignTheme.glassDecoration.copyWith(
        border: Border.all(color: color.withOpacity(0.3)),
      ),
      child: Row(
        children: [
          Icon(icon, color: color, size: 40),
          const SizedBox(width: 25),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: SovereignTheme.brandStyle(size: 18, bold: true, color: color)),
                const SizedBox(height: 10),
                Text(desc, style: const TextStyle(fontSize: 12, color: Colors.white54, height: 1.6)),
              ],
            ),
          ),
          const Icon(Icons.chevron_right, color: Colors.white24),
        ],
      ),
    );
  }
}

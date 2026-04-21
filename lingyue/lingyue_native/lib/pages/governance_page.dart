import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';

class GovernancePage extends StatelessWidget {
  const GovernancePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('始源裁决 (GOVERNANCE)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(25),
        child: Column(
          children: [
            // Active Proposal
            Container(
              decoration: SovereignTheme.getGlassDecoration(),
              padding: const EdgeInsets.all(25),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: SovereignTheme.pink, borderRadius: BorderRadius.circular(5)),
                    child: const Text('正在裁决', style: TextStyle(fontSize: 10, color: Colors.black, fontWeight: FontWeight.bold)),
                  ),
                  const SizedBox(height: 15),
                  Text('关于调整“始源武僧”技能伤害的提议', style: SovereignTheme.brandStyle(size: 18, bold: true)),
                  const SizedBox(height: 10),
                  const Text(
                    '该角色目前在野区的统治力过强，提议将其 Q 技能“业火破”的基础伤害降低 15%，作为补偿增加 3s 的冷却缩减。',
                    style: TextStyle(fontSize: 13, color: Colors.white60, height: 1.5),
                  ),
                  const SizedBox(height: 30),
                  const Row(
                    children: [
                      Expanded(child: _VoteBtn(label: '赞成', color: SovereignTheme.blue, percent: 64)),
                      SizedBox(width: 20),
                      Expanded(child: _VoteBtn(label: '反对', color: Colors.redAccent, percent: 36)),
                    ],
                  )
                ],
              ),
            ),
            
            const SizedBox(height: 30),
            
            // Stats
            const Row(
              children: [
                _SmallStatCard('已完成裁决', '1,082'),
                SizedBox(width: 15),
                _SmallStatCard('信誉值要求', '100'),
              ],
            )
          ],
        ),
      ),
    );
  }
}

class _VoteBtn extends StatelessWidget {
  final String label;
  final Color color;
  final int percent;
  const _VoteBtn({required this.label, required this.color, required this.percent});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: double.infinity,
          height: 50,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            border: Border.all(color: color.withOpacity(0.5)),
          ),
          child: Center(child: Text(label, style: TextStyle(color: color, fontWeight: FontWeight.bold))),
        ),
        const SizedBox(height: 8),
        Text('$percent%', style: TextStyle(fontSize: 12, color: color)),
      ],
    );
  }
}

class _SmallStatCard extends StatelessWidget {
  final String label;
  final String val;
  const _SmallStatCard(this.label, this.val);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        decoration: SovereignTheme.getGlassDecoration(),
        padding: const EdgeInsets.all(15),
        child: Column(
          children: [
            Text(label, style: const TextStyle(fontSize: 10, color: Colors.white38)),
            const SizedBox(height: 5),
            Text(val, style: SovereignTheme.brandStyle(size: 18, bold: true, color: SovereignTheme.pink)),
          ],
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';
import '../services/performance_controller.dart';
import 'package:glassmorphism_ui/glassmorphism_ui.dart';

class OptimizationPage extends StatefulWidget {
  const OptimizationPage({super.key});

  @override
  State<OptimizationPage> createState() => _OptimizationPageState();
}

class _OptimizationPageState extends State<OptimizationPage> {
  final _perf = PerformanceController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('性能与优化 (OPTIMIZATION)', style: SovereignTheme.brandStyle(size: 20, bold: true)),
        backgroundColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(30),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('适配低端设备', style: SovereignTheme.brandStyle(size: 18, color: SovereignTheme.pink)),
            const SizedBox(height: 10),
            const Text('开启该模式将大幅降低显存和内存占用，适合旧款 PC 或低配手机。', style: TextStyle(color: Colors.white38, fontSize: 13)),
            const SizedBox(height: 30),
            
            // Toggle
            SwitchListTile(
              title: const Text('极简性能模式 (Low-Spec Mode)', style: TextStyle(fontWeight: FontWeight.bold)),
              subtitle: const Text('关闭 3D 英雄渲染、毛玻璃滤镜及高频率粒子效果', style: TextStyle(fontSize: 10, color: Colors.white24)),
              value: _perf.isLowSpecMode,
              activeThumbColor: SovereignTheme.blue,
              onChanged: (val) {
                setState(() => _perf.toggleLowSpecMode(val));
              },
            ),
            
            const Divider(color: Colors.white10, height: 40),
            
            _OptItem('纹理压缩', '已将所有 PNG 图片转换至 WebP 高效格式'),
            _OptItem('内存回收', '每场对局后自动清理 C 核心数据缓冲区'),
            _OptItem('算力分流', 'AURA 算法主要由云端承担，降低本地 CPU 负载'),
          ],
        ),
      ),
    );
  }

  Widget _OptItem(String tit, String desc) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.check_circle_outline, color: Colors.greenAccent, size: 16),
              const SizedBox(width: 10),
              Text(tit, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
            ],
          ),
          const SizedBox(height: 5),
          Padding(
            padding: const EdgeInsets.only(left: 26),
            child: Text(desc, style: const TextStyle(fontSize: 12, color: Colors.white24)),
          ),
        ],
      ),
    );
  }
}

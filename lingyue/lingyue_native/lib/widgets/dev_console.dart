import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class DevConsoleOverlay extends StatefulWidget {
  final Widget child;
  const DevConsoleOverlay({super.key, required this.child});

  @override
  State<DevConsoleOverlay> createState() => _DevConsoleOverlayState();
}

class _DevConsoleOverlayState extends State<DevConsoleOverlay> {
  bool _isVisible = false;
  final TextEditingController _controller = TextEditingController();
  final List<String> _logs = ["[SYSTEM] AURA CORE READY"];

  @override
  void initState() {
    super.initState();
    HardwareKeyboard.instance.addHandler(_handleKey);
  }

  bool _handleKey(KeyEvent event) {
    if (event is KeyDownEvent && event.logicalKey == LogicalKeyboardKey.backquote) {
      setState(() => _isVisible = !_isVisible);
      return true;
    }
    return false;
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        widget.child,
        if (_isVisible)
          Material(
            color: Colors.black.withOpacity(0.8),
            child: Container(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text("LING YUE DEV CONSOLE (AURA v1.0)", style: TextStyle(color: Colors.greenAccent, fontWeight: FontWeight.bold)),
                  Expanded(
                    child: ListView.builder(
                      itemCount: _logs.length,
                      itemBuilder: (context, i) => Text(_logs[i], style: const TextStyle(color: Colors.white70, fontSize: 12)),
                    ),
                  ),
                  TextField(
                    controller: _controller,
                    style: const TextStyle(color: Colors.white),
                    decoration: const InputDecoration(hintText: "Enter command (e.g. /add_gold 9999)"),
                    onSubmitted: (val) {
                      setState(() {
                        _logs.insert(0, "> $val");
                        if (val == "/clear") _logs.clear();
                        _controller.clear();
                      });
                    },
                  )
                ],
              ),
            ),
          )
      ],
    );
  }
}

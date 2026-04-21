import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';
import '../engine/lingyue_engine.dart';

class CodingPage extends StatefulWidget {
  const CodingPage({super.key});

  @override
  State<CodingPage> createState() => _CodingPageState();
}

class _CodingPageState extends State<CodingPage> {
  final TextEditingController _controller = TextEditingController(text: """-- 灵约 Scripting Demo
-- Similar to Roblox Luau

local Game = {
    GetService = function(self, name)
        print("Getting Service: " .. name)
    end
}

local Workspace = Game:GetService("Workspace")

function onPlayerAdded(player)
    print("Welcome to Ling Yue: " .. player.Name)
end

print("Ling Yue Engine Initialized!")
""");

  String _output = "Ready to execute...\n";
  late LingyueEngine _engine;
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    try {
      _engine = LingyueEngine();
      _engine.init();
      setState(() => _isInitialized = true);
    } catch (e) {
      _output = "Error loading engine: $e\n";
    }
  }

  void _runScript() {
    setState(() {
      _output = "Executing...\n";
    });

    try {
      final success = _engine.runScript(_controller.text);
      if (success) {
        setState(() {
          _output += "Script execution successful (C Core Simulation)\n";
        });
      } else {
        setState(() {
          _output += "Error: ${_engine.getLastError()}\n";
        });
      }
    } catch (e) {
      setState(() {
        _output += "Runner Error: $e\n";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('始源控制台 (LING SCRIPT)', style: SovereignTheme.brandStyle(size: 18)),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      extendBodyBehindAppBar: true,
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF0F0F1A), Color(0xFF1A1A2E)],
          ),
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Editor Label
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('SCRIPT EDITOR', style: SovereignTheme.brandStyle(size: 12, color: SovereignTheme.pink)),
                    if (!_isInitialized)
                      const Text('ENGINE OFFLINE', style: TextStyle(color: Colors.red, fontSize: 10)),
                  ],
                ),
                const SizedBox(height: 10),

                // Script Editor
                Expanded(
                  flex: 3,
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.black.withOpacity(0.3),
                      gradient: LinearGradient(
                        colors: [Colors.white.withOpacity(0.1), Colors.white.withOpacity(0.05)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      border: Border.fromBorderSide(BorderSide(color: Colors.white.withOpacity(0.1))),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    padding: const EdgeInsets.all(15),
                    child: TextField(
                      controller: _controller,
                      maxLines: null,
                      style: const TextStyle(
                        fontFamily: 'monospace',
                        color: Color(0xFFE0E0E0),
                        fontSize: 13,
                      ),
                      decoration: const InputDecoration(
                        border: InputBorder.none,
                        contentPadding: EdgeInsets.all(15),
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 15),

                // Controls
                Row(
                  children: [
                    Expanded(
                      child: ElevatedButton.icon(
                        onPressed: _isInitialized ? _runScript : null,
                        icon: const Icon(Icons.play_arrow),
                        label: const Text('RUN SCRIPT'),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: SovereignTheme.pink,
                          foregroundColor: Colors.black,
                          padding: const EdgeInsets.symmetric(vertical: 15),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    IconButton(
                      onPressed: () => _controller.clear(),
                      icon: const Icon(Icons.delete_outline, color: Colors.white38),
                    ),
                  ],
                ),

                const SizedBox(height: 15),

                // Console Output
                Text('CONSOLE OUTPUT', style: SovereignTheme.brandStyle(size: 12, color: Colors.white38)),
                const SizedBox(height: 10),
                Expanded(
                  flex: 1,
                  child: Container(
                    padding: const EdgeInsets.all(15),
                    decoration: BoxDecoration(
                      color: Colors.black.withOpacity(0.5),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.white10),
                    ),
                    child: SingleChildScrollView(
                      child: Text(
                        _output,
                        style: const TextStyle(
                          fontFamily: 'monospace',
                          color: Colors.greenAccent,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

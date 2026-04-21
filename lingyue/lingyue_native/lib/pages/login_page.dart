import 'package:flutter/material.dart';
import '../theme/sovereign_theme.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _userC = TextEditingController();
  final _passC = TextEditingController();
  bool _loading = false;

  Future<void> _handleLogin() async {
    setState(() => _loading = true);
    try {
      final response = await http.post(
        Uri.parse('http://localhost:3000/api/auth/login'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'username': _userC.text, 'password': _passC.text}),
      );

      if (response.statusCode == 200) {
        if (mounted) Navigator.pushReplacementNamed(context, '/home');
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('因果校验失败：道号或密文错误')),
          );
        }
      }
    } catch (e) {
       if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('无法连接至始源服务器')),
          );
        }
    } finally {
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [SovereignTheme.background, SovereignTheme.purple.withOpacity(0.1)],
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 40),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SovereignTheme.logoFX(size: 100),
              const SizedBox(height: 40),
              Text('始源之路', style: SovereignTheme.brandStyle(size: 24, bold: true)),
              const SizedBox(height: 30),
              
              TextField(
                controller: _userC,
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  hintText: '输入道号 (Username)',
                  hintStyle: const TextStyle(color: Colors.white24),
                  prefixIcon: const Icon(Icons.person_outline, color: SovereignTheme.blue),
                  filled: true,
                  fillColor: Colors.white.withOpacity(0.05),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(15), borderSide: BorderSide.none),
                ),
              ),
              const SizedBox(height: 20),
              TextField(
                controller: _passC,
                obscureText: true,
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  hintText: '输入密文 (Password)',
                  hintStyle: const TextStyle(color: Colors.white24),
                  prefixIcon: const Icon(Icons.lock_outline, color: SovereignTheme.pink),
                  filled: true,
                  fillColor: Colors.white.withOpacity(0.05),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(15), borderSide: BorderSide.none),
                ),
              ),
              const SizedBox(height: 40),
              
              if (_loading) 
                const CircularProgressIndicator(color: SovereignTheme.pink)
              else
                GestureDetector(
                  onTap: _handleLogin,
                  child: Container(
                    width: double.infinity,
                    decoration: SovereignTheme.getGlassDecoration(),
                    padding: const EdgeInsets.symmetric(vertical: 18),
                    child: Center(
                      child: Text('开启修行 (LOGIN)', style: SovereignTheme.brandStyle(size: 16, bold: true, color: SovereignTheme.pink)),
                    ),
                  ),
                ),
                
              const SizedBox(height: 30),
              const Text('初始帐号: TuanTuan / panda123', style: TextStyle(color: Colors.white24, fontSize: 10)),
            ],
          ),
        ),
      ),
    );
  }
}

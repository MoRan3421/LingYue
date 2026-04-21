import 'dart:async';

class SovereignDB {
  static final SovereignDB _instance = SovereignDB._internal();
  factory SovereignDB() => _instance;
  SovereignDB._internal();

  // Mocking Firebase Firestore for V1.0-ORIGIN
  final Map<String, dynamic> _mockData = {
    'assets': {
      '灵约石': 1420,
      '功德': 5200,
      '业力': 980,
    },
    'social': {
      'sworn_brothers': ['始源尊者', '梦幻仙子'],
      'sect': '始源圣殿',
    }
  };

  Future<Map<String, dynamic>> getUserProfile() async {
    await Future.delayed(const Duration(milliseconds: 500));
    return _mockData;
  }

  Future<void> updateAsset(String type, int amount) async {
    _mockData['assets'][type] = (_mockData['assets'][type] ?? 0) + amount;
    print('[SovereignDB] Asset $type updated to ${_mockData['assets'][type]}');
  }
}

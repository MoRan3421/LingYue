import 'package:flutter/material.dart';

class PerformanceController extends ChangeNotifier {
  static final PerformanceController _instance = PerformanceController._internal();
  factory PerformanceController() => _instance;
  PerformanceController._internal();

  bool _isLowSpecMode = false;
  bool get isLowSpecMode => _isLowSpecMode;

  void toggleLowSpecMode(bool value) {
    _isLowSpecMode = value;
    notifyListeners();
    print('[Performance] Low-Spec Mode: ${_isLowSpecMode ? "ENABLED" : "DISABLED"}');
  }

  // Visual constraints for low-end devices
  double get blurIntensity => _isLowSpecMode ? 0.0 : 20.0;
  int get fpsTarget => _isLowSpecMode ? 30 : 60;
  bool get show3DHero => !_isLowSpecMode;
}

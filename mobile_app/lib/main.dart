import 'package:flutter/material.dart';
import 'screens/login_screen.dart';

void main() {
  runApp(const MeWashkarApp());
}

class MeWashkarApp extends StatelessWidget {
  const MeWashkarApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MeWashkar',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const LoginScreen(),
    );
  }
}

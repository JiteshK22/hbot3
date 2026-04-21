import 'package:flutter/material.dart';
import 'customer_home.dart';
import 'rider_home.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  void _goByRole(BuildContext context, String role) {
    if (role == 'CUSTOMER') {
      Navigator.push(context, MaterialPageRoute(builder: (_) => const CustomerHome()));
    } else {
      Navigator.push(context, MaterialPageRoute(builder: (_) => const RiderHome()));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Role Login')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(onPressed: () => _goByRole(context, 'CUSTOMER'), child: const Text('Login as Customer')),
            const SizedBox(height: 12),
            ElevatedButton(onPressed: () => _goByRole(context, 'RIDER'), child: const Text('Login as Rider')),
          ],
        ),
      ),
    );
  }
}

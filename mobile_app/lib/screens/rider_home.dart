import 'package:flutter/material.dart';

class RiderHome extends StatelessWidget {
  const RiderHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Rider Dashboard')),
      body: const Center(child: Text('Accept jobs, navigate, and close deliveries here.')),
    );
  }
}

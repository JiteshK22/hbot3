'use client';

import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { KPI } from '../../components/KPI';

type Summary = {
  totalOrders: number;
  revenue: number;
  activeRiders: number;
  delayedOrders: number;
};

export default function DashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    api.get('/dashboard/summary').then((res) => setSummary(res.data));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-slate-800">MeWashkar Operations Dashboard</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPI title="Orders Today" value={summary?.totalOrders ?? 0} />
        <KPI title="Revenue" value={`₹${summary?.revenue ?? 0}`} />
        <KPI title="Active Riders" value={summary?.activeRiders ?? 0} />
        <KPI title="Delayed Orders" value={summary?.delayedOrders ?? 0} />
      </section>
    </main>
  );
}

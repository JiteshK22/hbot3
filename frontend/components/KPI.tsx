export function KPI({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
      <p className="text-sm text-slate-500">{title}</p>
      <h2 className="mt-1 text-2xl font-bold text-blue-700">{value}</h2>
    </div>
  );
}

const statusColors: Record<string, string> = {
  PENDING: 'bg-gray-400',
  PICKUP_ASSIGNED: 'bg-blue-500',
  PICKED: 'bg-orange-500',
  PROCESSING: 'bg-purple-500',
  READY: 'bg-teal-500',
  OUT_FOR_DELIVERY: 'bg-yellow-500',
  DELIVERED: 'bg-green-500',
  ISSUE: 'bg-red-500',
};

export function StatusTag({ status }: { status: keyof typeof statusColors }) {
  return <span className={`px-2 py-1 text-xs text-white rounded-full ${statusColors[status]}`}>{status}</span>;
}

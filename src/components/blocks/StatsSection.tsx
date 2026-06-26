export default function StatsSection() {
  const stats = [
    { label: "Motor Tersedia", value: "2.400+" },
    { label: "Penjual Terverifikasi", value: "1.800+" },
    { label: "Transaksi Sukses", value: "15.000+" },
    { label: "Rating Rata-rata", value: "4.9★" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <h4 className="text-2xl font-bold text-blue-500">{stat.value}</h4>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
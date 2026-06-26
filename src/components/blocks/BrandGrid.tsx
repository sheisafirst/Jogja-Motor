// (Grid logo merek) dashboard

export default function BrandGrid() {
  const brands = [
    { name: "HONDA", color: "bg-red-50 text-red-700 border-red-100" },
    { name: "YAMAHA", color: "bg-blue-50 text-blue-700 border-blue-100" },
    { name: "KAWASAKI", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "SUZUKI", color: "bg-orange-50 text-orange-700 border-orange-100" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Merek Motor</h2>
        <p className="text-gray-500 mt-1">Pilih motor dari merek favorit Anda</p>
      </div>

      {/* Grid Logo Merek */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand, i) => (
          <div 
            key={i} 
            className={`${brand.color} border p-8 rounded-2xl flex flex-col items-center justify-center transition-all hover:scale-[1.02] cursor-pointer`}
          >
            <h3 className="text-xl font-bold tracking-wide">{brand.name}</h3>
            <span className="text-sm font-medium mt-2 opacity-80 hover:underline">
              Lihat Semua →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
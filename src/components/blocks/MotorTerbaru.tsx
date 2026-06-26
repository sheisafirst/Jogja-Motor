import { allMotors } from "./MotorData";

export default function MotorTerbaru() {
  // Mengambil 8 data pertama saja
  const latestMotors = allMotors.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Motor Terbaru</h2>
        <p className="text-gray-500 mt-1">
          Temukan daftar motor terbaru hari ini
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {latestMotors.map((motor) => (
          <div
            key={motor.id}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            {/* Label Status */}
            <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded font-bold uppercase mb-3 inline-block">
              {motor.condition}
            </span>

            {/* Gambar */}
            <img
              src={motor.image}
              alt={motor.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            {/* Info Utama */}
            <h3 className="font-bold text-gray-900 truncate">{motor.name}</h3>
            <p className="text-blue-700 font-bold text-lg mb-3">
              {motor.price}
            </p>

            {/* Detail Singkat */}
            <div className="text-xs text-gray-500 space-y-1">
              <p>
                📅 {motor.year} • ⏱ {motor.km}
              </p>
              <p>📍 {motor.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

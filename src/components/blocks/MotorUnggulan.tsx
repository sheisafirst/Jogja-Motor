import { allMotors } from "./MotorData";
import MotorCard from "../ui/MotorCard";

export default function MotorUnggulan() {
  const featuredMotors = allMotors.slice(0, 4); 

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Motor Unggulan</h2>
          <p className="text-gray-500 mt-1">Pilihan terbaik minggu ini</p>
        </div>
        <a href="/semua-motor" className="text-blue-600 font-semibold hover:underline">Lihat Semua →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {featuredMotors.map((motor) => (
          // HAPUS div lama, GANTI dengan ini:
          <MotorCard key={motor.id} motor={motor} />
        ))}
      </div>
    </section>
  );
}
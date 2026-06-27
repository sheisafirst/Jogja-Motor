import { allMotors } from "./MotorData";
import MotorCard from "../ui/MotorCard";

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
          // 2. Ganti div manual dengan MotorCard
          <MotorCard key={motor.id} motor={motor} />
        ))}
      </div>
    </section>
  );
}
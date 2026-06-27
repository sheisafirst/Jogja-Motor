// Pastikan semua ini ada di bagian atas file
import { useParams, Link } from "react-router-dom";
import { allMotors } from "../components/blocks/MotorData";
import MotorCard from "../components/ui/MotorCard"; // <--- TAMBAHKAN INI (Sesuaikan path)
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";
import {
  MapPin,
  Calendar,
  Gauge,
  Settings,
  ShieldCheck,
  ChevronLeft,
  MessageSquare, // <--- PASTIKAN INI ADA
  Phone,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

export default function DetailMotor() {
  const { id } = useParams();
  const motor = allMotors.find((m) => String(m.id) === id);

  if (!motor)
    return <div className="p-20 text-center">Motor tidak ditemukan!</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Tombol Kembali */}
        <Link
          to="/"
          className="flex items-center text-gray-500 hover:text-blue-600 mb-6 font-medium"
        >
          <ChevronLeft size={20} /> Kembali ke Beranda
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Gambar & Detail */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gambar Utama */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <img
                src={motor.image}
                alt={motor.name}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Header Informasi */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-gray-900">
                  {motor.name}
                </h1>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold uppercase">
                  {motor.type}
                </span>
              </div>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {motor.price}
              </p>

              {/* Statistik Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 bg-gray-50 p-6 rounded-2xl">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="text-blue-500 mb-2" />{" "}
                  <p className="text-xs text-gray-500">Tahun</p>
                  <p className="font-bold">{motor.year}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Gauge className="text-blue-500 mb-2" />{" "}
                  <p className="text-xs text-gray-500">Kilometer</p>
                  <p className="font-bold">{motor.km}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Settings className="text-blue-500 mb-2" />{" "}
                  <p className="text-xs text-gray-500">Transmisi</p>
                  <p className="font-bold">{motor.transmission}</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <MapPin className="text-blue-500 mb-2" />{" "}
                  <p className="text-xs text-gray-500">Lokasi</p>
                  <p className="font-bold">{motor.location}</p>
                </div>
              </div>
              <p className="flex items-center gap-2 text-gray-400 mt-4 text-sm font-medium">
                <MapPin size={16} /> {motor.fullLocation}
              </p>
            </div>

            {/* Deskripsi */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4">Deskripsi Motor</h2>
              <p className="text-gray-600 leading-relaxed">
                {motor.description}
              </p>
            </div>

            {/* Tabel Spesifikasi */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Spesifikasi</h2>
              <div className="grid grid-cols-2 border border-gray-100 rounded-xl overflow-hidden">
                {[
                  { label: "Merek", value: "Honda" }, // Sesuaikan data
                  { label: "Tipe", value: motor.type },
                  { label: "Tahun", value: motor.year },
                  { label: "Warna", value: motor.color },
                  { label: "Transmisi", value: motor.transmission },
                  { label: "Mesin", value: motor.engine },
                  { label: "Kilometer", value: motor.km },
                  { label: "Kondisi", value: motor.condition },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className={`p-4 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} flex justify-between border-b border-gray-100`}
                  >
                    <span className="text-gray-500 text-sm">{spec.label}</span>
                    <span className="font-bold text-sm text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Sidebar */}
          <div className="lg:col-span-1">
            {/* Kontainer sticky yang membungkus keduanya */}
            <div className="sticky top-24 space-y-6">
              {/* Card Tombol Aksi */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <Link to={`/booking/${id}`} className="block w-full">
                  <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold mb-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                    <Calendar size={20} /> Booking Janji Temu
                  </button>
                </Link>
                {/* Link dibungkus di sini */}
                <Link to={`/hubungi/${id}`} className="block w-full mb-3">
                  <button className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                    <MessageSquare size={20} /> Hubungi Penjual
                  </button>
                </Link>
                <button className="w-full py-4 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
                  <Phone size={20} /> Telepon Penjual
                </button>

                <div className="mt-6 p-4 bg-green-50 rounded-2xl space-y-3">
                  {[
                    "Transaksi Aman JogjaMotor",
                    "Penjual terverifikasi",
                    "Dokumen surat kendaraan asli",
                    "Garansi kepuasan pembeli",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-green-700 text-sm font-medium"
                    >
                      <ShieldCheck
                        size={18}
                        className="text-green-600 shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Informasi Penjual */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Informasi Penjual</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    BS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Budi Santoso</p>
                    <div className="flex items-center gap-1 text-orange-400 text-sm font-bold">
                      <Star size={16} fill="currentColor" /> 4.8
                      <span className="text-gray-400 font-normal"> / 5.0</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} /> Bergabung sejak Maret 2021
                  </div>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <CheckCircle size={16} /> Penjual Terverifikasi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Motor Serupa */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Motor Serupa</h2>
            <Link
              to="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Lihat Semua {">"}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allMotors
              .filter((m) => m.type === motor.type && m.id !== motor.id) // Filter tipe sama, kecualikan motor saat ini
              .slice(0, 4) // Ambil maksimal 4 motor
              .map((m) => (
                <MotorCard key={m.id} motor={m} />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

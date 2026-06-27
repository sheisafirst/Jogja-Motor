import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle,
  Home,
  Search,
  Download,
  MapPin,
  Phone,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";

export default function BookingSuccess() {
  const location = useLocation();
  const { motor, date, time } = location.state || {};

  const formattedDate = date
    ? new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "28 Juni 2026"; // Fallback jika tidak ada data

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Card Berhasil */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center mb-6">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-2xl font-bold mb-2">Booking Berhasil!</h1>
          <p className="text-gray-600 mb-6">
            Janji temu Anda telah dikonfirmasi. Penjual akan menghubungi Anda
            untuk konfirmasi lebih lanjut.
          </p>
          <div className="inline-block bg-green-50 text-green-700 px-6 py-2 rounded-full font-bold">
            ID Booking: JM865951
          </div>
        </div>

        {/* Detail Booking */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-6">
          <h2 className="font-bold text-lg mb-4">Detail Booking</h2>
          <div className="flex gap-4 mb-6 items-center">
            <img
              src={motor?.image || "/path-to-motor-image.jpg"}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <p className="font-bold text-lg">
                {motor?.name || "Honda Vario 160"}
              </p>
              <p className="text-blue-600 font-bold">
                {motor?.price || "Rp 28.500.000"}
              </p>
              <p className="text-sm text-gray-500">
                2023 · 5.200 km · Sleman, Yogyakarta
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
              <CalendarIcon className="text-blue-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Tanggal</p>
                <p className="font-bold text-sm">{formattedDate}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
              <Clock className="text-blue-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Jam</p>
                <p className="font-bold text-sm">{time || "14:00"}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
              <MapPin className="text-blue-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Lokasi Temu</p>
                <p className="font-bold text-sm">
                  Alamat Penjual (sesuai iklan)
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
              <Phone className="text-blue-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Telepon Penjual</p>
                <p className="font-bold text-sm">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Pertemuan */}
        <div className="bg-[#fdfbf7] p-6 rounded-3xl border border-amber-100 mb-8">
          <h3 className="font-bold mb-3">Tips Pertemuan</h3>
          <ul className="text-sm space-y-2 text-gray-700 list-decimal ml-4">
            <li>Datang tepat waktu sesuai jadwal yang disepakati.</li>
            <li>Bawa KTP dan uang tunai / transfer jika jadi beli.</li>
            <li>Silakan lakukan pengecekan mesin dan surat-surat.</li>
            <li>Jika ada kendala, hubungi penjual atau CS JogjaMotor.</li>
          </ul>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2"
          >
            <Home size={18} /> Kembali ke Beranda
          </Link>
          <div className="flex gap-3">
            <Link
              to="/CariMotor"
              className="flex-1 py-4 border border-gray-200 rounded-2xl font-bold text-center flex items-center justify-center gap-2"
            >
              <Search size={18} /> Cari Motor Lain
            </Link>
            <button className="flex-1 py-4 border border-gray-200 rounded-2xl font-bold flex items-center justify-center gap-2">
              <Download size={18} /> Simpan Bukti
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

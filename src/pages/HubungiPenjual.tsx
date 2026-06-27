import { useParams, Link } from "react-router-dom";
import { allMotors } from "../components/blocks/MotorData";
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";
import {
  Phone,
  MessageSquare,
  Send,
  Star,
  CheckCircle,
  ChevronLeft,
  Calendar,
} from "lucide-react";

export default function HubungiPenjual() {
  const { id } = useParams();
  const motor = allMotors.find((m) => String(m.id) === id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">
            Beranda
          </Link>{" "}
          {">"}
          <Link to={`/motor/${id}`} className="hover:text-blue-600">
            Cari Motor
          </Link>{" "}
          {">"}
          <span className="font-bold text-gray-900">Hubungi Penjual</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Chat Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  BS
                </div>
                <div>
                  <h2 className="font-bold text-lg">Budi Santoso</h2>
                  <p className="text-green-500 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
                    Online sekarang
                  </p>
                </div>
              </div>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-600">
                <Phone size={18} /> Telepon
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
              <img
                src={motor?.image}
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div>
                <p className="font-bold">{motor?.name}</p>
                <p className="text-blue-600 font-bold">{motor?.price}</p>
                <p className="text-sm text-gray-500">
                  {motor?.year} · {motor?.km}
                </p>
              </div>
              <Link
                to={`/motor/${id}`}
                className="ml-auto text-blue-600 font-medium"
              >
                Lihat Detail
              </Link>
            </div>

            {/* Chat Box */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 min-h-75">
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none w-fit text-gray-700">
                  Halo! Ada yang bisa saya bantu mengenai motor ini? 😊
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none w-fit text-gray-700">
                  Motor masih tersedia dan kondisi sangat bagus. Silakan
                  tanya-tanya dulu ya!
                </div>
              </div>
              <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
                {[
                  "Masih tersedia?",
                  "Boleh nego?",
                  "Kapan bisa test ride?",
                ].map((t, i) => (
                  <button
                    key={i}
                    className="border border-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-50"
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <input
                  className="flex-1 bg-gray-50 border rounded-full px-6 py-3"
                  placeholder="Ketik pesan Anda..."
                />
                <button className="bg-blue-600 text-white p-4 rounded-lg">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Profil */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4">Profil Penjual</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  BS
                </div>
                <div>
                  <p className="font-bold">Budi Santoso</p>
                  <div className="flex text-orange-400 gap-1">
                    <Star size={16} fill="currentColor" /> 4.8/5
                  </div>
                </div>
              </div>
              <div className="text-sm space-y-2 mb-6">
                <p className="text-green-600 flex items-center gap-2">
                  <CheckCircle size={16} /> Penjual Terverifikasi
                </p>
                <p className="text-blue-600 flex items-center gap-2">
                  <CheckCircle size={16} /> Respons cepat ( 1 jam)
                </p>
              </div>
              <button className="w-full bg-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                +62 812-3456-7890
              </button>
            </div>
            {/* Card Tambahan: Mau lihat langsung? */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2">Mau lihat langsung?</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Booking janji temu dengan penjual untuk melihat dan test ride
                motor ini secara langsung.
              </p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Calendar size={20} /> Booking Janji Temu
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

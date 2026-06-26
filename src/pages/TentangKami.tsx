import {
  Shield,
  Star,
  Headphones,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";

export default function TentangKami() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="bg-blue-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Tentang JogjaMotor</h1>
        <p className="max-w-2xl mx-auto text-blue-50 opacity-90">
          Kami adalah marketplace motor terpercaya yang menghubungkan ribuan
          pembeli dan penjual motor di Yogyakarta dan sekitarnya sejak 2020.
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Visi & Misi + Statistik */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
            <p className="text-gray-600 mb-8">
              Menjadi platform jual beli motor paling terpercaya dan terdepan di
              Indonesia, dimulai dari jantung Yogyakarta. Kami percaya bahwa
              setiap orang berhak mendapatkan motor impiannya dengan cara yang
              mudah, aman, dan transparan.
            </p>
            <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Menyediakan platform jual beli motor yang aman dan terpercaya",
                "Memverifikasi semua penjual dan dokumen kendaraan",
                "Memberikan pengalaman pengguna terbaik di kelasnya",
                "Mendukung pertumbuhan ekonomi digital lokal Yogyakarta",
              ].map((misi, i) => (
                <li key={i} className="flex gap-2">
                  <span>✓</span> {misi}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Tahun Berdiri", val: "2020" },
              { label: "Motor Terdaftar", val: "2.400+" },
              { label: "Penjual Aktif", val: "1.800+" },
              { label: "Transaksi Sukses", val: "15.000+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-blue-600">
                  {stat.val}
                </div>
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nilai-Nilai Kami */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
          <p className="text-gray-500">
            Fondasi yang membangun JogjaMotor menjadi platform terpercaya
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Integritas",
              desc: "Kami menjaga kepercayaan pengguna dengan transparansi dan kejujuran dalam setiap transaksi.",
            },
            {
              icon: Star,
              title: "Kualitas",
              desc: "Hanya motor berkualitas dan penjual terverifikasi yang kami izinkan di platform kami.",
            },
            {
              icon: Headphones,
              title: "Pelayanan",
              desc: "Dukungan pelanggan 24/7 untuk memastikan pengalaman jual beli terbaik.",
            },
            {
              icon: Users,
              title: "Komunitas",
              desc: "Membangun komunitas pecinta motor yang solid dan saling menguntungkan.",
            },
          ].map((nilai, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              {/* Ikon sekarang berubah sesuai nilai */}
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <nilai.icon size={24} />
              </div>
              <h3 className="font-bold mb-3">{nilai.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {nilai.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bagian Tim Kami */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
          <p className="text-gray-500">
            Orang-orang berdedikasi di balik JogjaMotor
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              name: "Syaiful Bahri",
              role: "CEO & Founder",
              initial: "SB",
              color: "bg-blue-500",
            },
            {
              name: "Umiyati",
              role: "Head of Operations",
              initial: "UY",
              color: "bg-purple-500",
            },
            {
              name: "Jessika Olivia",
              role: "Lead Developer",
              initial: "JO",
              color: "bg-green-500",
            },
            {
              name: "Syahara Olivia",
              role: "Customer Relations",
              initial: "SO",
              color: "bg-orange-500",
            },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              <div
                className={`w-16 h-16 ${person.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg`}
              >
                {person.initial}
              </div>
              <h3 className="font-bold text-lg">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>

        {/* Bagian Hubungi Kami */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-500">
            Ada pertanyaan? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: MapPin,
              title: "Alamat",
              desc: "Jl. Malioboro No. 88, Yogyakarta 55213",
            },
            {
              icon: Phone,
              title: "Telepon",
              desc: "+62 274-123-4567\nMo-Sa, 08:00–20:00",
            },
            {
              icon: Mail,
              title: "Email",
              desc: "info@jogjamotor.id\nsupport@jogjamotor.id",
            },
          ].map((info, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon size={24} />
              </div>
              <h3 className="font-bold mb-3">{info.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {info.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

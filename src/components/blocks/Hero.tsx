export default function Hero() {
  return (
    <section className="relative w-full h-150 flex items-center">
      {/* Gambar Background */}
      <img
        src="/hero1.png" // Pastikan gambar ini ada di folder public
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Gelap agar teks terbaca */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Konten (Teks & Search) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl text-white">
          {/* Badge */}
          <span className="inline-block px-4 py-1 mb-6 text-sm bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
            ● Marketplace Motor #1 di Bengkulu
          </span>

          {/* Judul */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Temukan Motor <span className="text-yellow-500">Impian</span> Anda
            di Sini
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Ribuan pilihan motor Honda, Yamaha, Kawasaki, dan Suzuki dari
            penjual terpercaya di Bengkulu dan sekitarnya.
          </p>

          {/* Search Box - Diperkecil & Sejajar */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl shadow-xl w-full max-w-lg mt-6">
            <input
              type="text"
              placeholder="Cari Honda Beat, Yamaha NMAX..."
              className="w-full px-4 py-2.5 text-gray-800 outline-none rounded-2xl bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition whitespace-nowrap">
              Cari Motor
            </button>
          </div>

          {/* Tag Populer */}
          <div className="mt-6 text-sm text-gray-300">
            <span className="mr-2">Populer:</span>
            {["Vario 160", "NMAX", "Ninja 250", "PCX 160"].map((item) => (
              <a
                key={item}
                href="#"
                className="mr-4 hover:text-white underline underline-offset-4"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

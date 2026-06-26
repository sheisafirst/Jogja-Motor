export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Mencari Kendaraan Anda?
        </h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Pasang sekarang dan jangkau ribuan calon pembeli di Bengkulu. Gratis dan mudah!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-xl transition">
            Pasang Iklan Gratis
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition border border-white/20">
            Cari Motor Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
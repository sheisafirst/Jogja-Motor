import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <img
                src="/logo1.png"
                className="h-10 w-10 rounded-full"
                alt="Logo"
              />
            </div>
            <span className="text-white text-xl font-bold">JogjaMotor</span>
          </div>
          <p className="text-sm leading-relaxed">
            Marketplace motor terpercaya di Yogyakarta. Temukan motor impian
            Anda dengan mudah, aman, dan terpercaya.
          </p>
          <div className="flex space-x-3 pt-2">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
              <img src="/ig.png" className="h-5 w-5" alt="IG" />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
              <img src="/tiktok.png" className="h-5 w-5" alt="tiktok" />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
              <img src="/telegram.png" className="h-5 w-5" alt="telegram" />
            </div>
          </div>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
            Tautan Cepat
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Cari Motor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Masuk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Daftar Akun
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Merek Motor */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
            Merek Motor
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Honda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Yamaha
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Kawasaki
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Suzuki
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                TVS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Vespa
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Hubungi Kami */}
        <div className="space-y-4 text-sm">
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
            Hubungi Kami
          </h3>
          <p className="flex items-start gap-2">
            <span>📍</span> Jl. Pulaubai No. 88, Kota Bengkulu, BKL 55213
          </p>
          <p className="flex items-center gap-2">
            <span>📞</span> +62 274-123-4567
          </p>
          <p className="flex items-center gap-2">
            <span>✉️</span> info@jogjamotor.id
          </p>
        </div>
      </div>

      {/* Garis Pembatas */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 my-10"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 JogjaMotor. Hak cipta dilindungi undang-undang.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-white">
            Syarat & Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
}

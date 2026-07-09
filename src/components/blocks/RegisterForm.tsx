import React from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik tombol "Buat Akun"
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman secara default

    // Di sini Anda bisa menambahkan logika API/validasi akun
    console.log("Akun berhasil dibuat!");

    // Arahkan ke halaman login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-sm w-full max-w-sm text-center border border-slate-100">
        {/* Logo */}
        <img src="/logo1.png" alt="Logo" className="w-24 mx-auto mb-6" />

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Buat Akun Baru
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Daftar gratis dan mulai mencari motor impian
        </p>

        <form onSubmit={handleRegister} className="text-left space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="contoh@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor Telepon
            </label>
            <input
              type="tel"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="08xx-xxxx-xxxx"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kata Sandi
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Minimal 8 karakter"
            />
            <div className="flex gap-1 mt-2">
              <div className="h-1 flex-1 bg-red-500 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-400 mt-1">Kekuatan sandi: Lemah</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="password"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ulangi kata sandi"
            />
          </div>

          <div className="flex items-start gap-2 text-xs text-gray-500 mt-4">
            <input type="checkbox" className="mt-1" />
            <p>
              Saya setuju dengan{" "}
              <span className="text-blue-500 font-semibold cursor-pointer">
                Syarat & Ketentuan
              </span>{" "}
              dan{" "}
              <span className="text-blue-500 font-semibold cursor-pointer">
                Kebijakan Privasi
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition"
          >
            Buat Akun
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 font-bold cursor-pointer"
          >
            Masuk sekarang
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ==========================
    // LOGIN ADMIN
    // ==========================
    if (email === "admin@gmail.com" && password === "admin123") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login successful!",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
        allowOutsideClick: false,
      }).then(() => {
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("role", "admin");

        navigate("/admin");
      });

      return;
    }

    // ==========================
    // LOGIN USER
    // ==========================
    if (email === "user@gmail.com" && password === "user123") {
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
        text: "Selamat datang di JogjaMotor!",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
        allowOutsideClick: false,
      }).then(() => {
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("role", "user");

        navigate("/home");
      });

      return;
    }

    // ==========================
    // LOGIN GAGAL
    // ==========================
    Swal.fire({
      title: "Error!",
      text: "Email atau password salah.",
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div className="flex justify-center items-center py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Selamat Datang Kembali
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Masuk ke akun JogjaMotor Anda
        </p>

        {/* Email */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contoh@email.com"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">
              Kata Sandi
            </label>

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lupa kata sandi?
            </a>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Remember */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />

          <label className="ml-2 text-sm text-gray-600">
            Ingat saya selama 30 hari
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
        >
          Masuk
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>

          <span className="px-4 text-gray-400 text-sm">
            atau
          </span>

          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100"
        >
          <img src="/google.png" className="w-5 h-5" alt="google" />

          <span className="font-medium text-gray-700">
            Masuk dengan Google
          </span>
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Daftar sekarang
          </a>
        </p>
      </form>
    </div>
  );
}
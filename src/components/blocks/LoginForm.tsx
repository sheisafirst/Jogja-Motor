
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword,setShowPassword]=useState(false);
  const navigate=useNavigate();

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(email==="admin@gmail.com"&&password==="admin123"){
      Swal.fire({icon:"success",title:"Success",text:"Login successful!",confirmButtonColor:"#2563eb"}).then(()=>{
        localStorage.setItem("isLogin","true");
        localStorage.setItem("role","admin");
        navigate("/admin");
      });return;
    }
    if(email==="user@gmail.com"&&password==="user123"){
      Swal.fire({icon:"success",title:"Login Berhasil",text:"Selamat datang di JogjaMotor!",confirmButtonColor:"#2563eb"}).then(()=>{
        localStorage.setItem("isLogin","true");
        localStorage.setItem("role","user");
        navigate("/home");
      });return;
    }
    Swal.fire({icon:"error",title:"Error!",text:"Email atau password salah.",confirmButtonColor:"#2563eb"});
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-107.5 bg-white border border-gray-200 rounded-3xl shadow-sm p-8">
        <div className="flex justify-center mb-6">
          <img src="/logo1.png" className="w-24 object-contain" alt="logo"/>
        </div>
        <h1 className="text-3xl font-bold text-center">Selamat Datang</h1>
        <p className="text-center text-gray-500 mt-2 mb-8">Masuk ke akun JogjaMotor Anda</p>

        <label className="text-sm font-semibold">Email</label>
        <div className="relative mt-2 mb-5">
          <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Masukkan email" className="w-full bg-gray-50 border rounded-xl pl-12 pr-4 py-3"/>
        </div>

        <div className="flex justify-between mb-2">
          <label className="text-sm font-semibold">Kata Sandi</label>
          <a href="#" className="text-sm text-blue-600">Lupa kata sandi?</a>
        </div>

        <div className="relative mb-5">
          <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type={showPassword?"text":"password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Masukkan kata sandi" className="w-full bg-gray-50 border rounded-xl pl-12 pr-12 py-3"/>
          <button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {showPassword?<EyeOff size={20}/>:<Eye size={20}/>}
          </button>
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox"/>
          <span className="ml-2 text-sm text-gray-600">Ingat saya selama 30 hari</span>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold">Masuk</button>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-4 text-gray-400 text-sm">atau</span>
          <div className="flex-1 border-t"></div>
        </div>

        <button type="button" className="w-full border rounded-xl py-3 flex items-center justify-center gap-3">
          <img src="/google.png" className="w-5 h-5" alt="google"/>
          <span>Masuk dengan Google</span>
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Belum punya akun? <Link to="/register" className="text-blue-600 font-semibold">Daftar sekarang</Link>
        </p>
      </form>
    </div>
  );
}

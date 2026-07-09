import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-white">
      {/* Background */}
      <img
        src="/splash-bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <img
          src="/logo2.png"
          alt="JogjaMotor"
          className="w-125 h-auto mb-10"
        />

        <h1 className="text-[26px] font-medium text-[#404040] mb-10 text-center">
          Jual Beli Motor Bekas Mudah dan Terpercaya
        </h1>

        <button
          onClick={() => navigate("/login")}
          className="w-72.5 h-14.5 rounded-[14px] bg-[#4B82F4] text-white text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-200"
        >
          Masuk
        </button>
      </div>
    </div>
  );
}

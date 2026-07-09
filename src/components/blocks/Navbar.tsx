import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(
    () => localStorage.getItem("isLogin") === "true",
  );

  const [role, setRole] = useState(() => localStorage.getItem("role") || "");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("role");

    navigate("/");

    // agar Navbar langsung update
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="w-full px-16 lg:px-28 py-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo1.png" className="h-10 w-10 rounded-full" alt="Logo" />

          <span className="text-2xl font-bold text-gray-900">
            Jogja
            <span className="text-blue-600">Motor</span>
          </span>
        </Link>

        {/* Burger */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg">
          ☰
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:flex-1 md:justify-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link
                to="/home"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Beranda
              </Link>
            </li>

            <li>
              <Link
                to="/CariMotor"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Cari Motor
              </Link>
            </li>

            <li>
              <Link
                to="/TentangKami"
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          {!isLogin ? (
            <>
              <Link
                to="/login"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                Masuk
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Daftar
              </Link>
            </>
          ) : (
            <>
              {role === "admin" && (
                <span className="bg-red-100 text-red-600 text-xs font-bold uppercase px-2 py-1 rounded">
                  Admin
                </span>
              )}

              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-600 bg-transparent border border-red-600 hover:bg-red-50 rounded-lg px-4 py-2 transition-all duration-200"
              >
                Keluar
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

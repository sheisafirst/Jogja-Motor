import { useState } from "react";

export default function Navbar({
  userRole = null,
}: {
  userRole?: "admin" | "user" | null;
}) {
  // State untuk mengontrol apakah menu dibuka atau ditutup (untuk mobile)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      {/* Menggunakan w-full dan px untuk memberikan padding aman di kanan-kiri */}
      <div className="w-full px-16 lg:px-28 py-4 flex flex-wrap items-center justify-between">
        {/* ================= 1. BAGIAN KIRI: LOGO ================= */}
        <div className="flex items-center min-w-50">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo1.png"
              className="h-10 w-10 rounded-full"
              alt="Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
              Jogja
              <span
                className="text-blue-600
              "
              >
                Motor
              </span>
            </span>
          </a>
        </div>

        {/* ================= RESPONSIVE: TOMBOL BURGER (MOBILE) ================= */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* ================= 2. BAGIAN TENGAH: MENU UTAMA ================= */}
        {/* md:flex-1 dan justify-center membuat bagian menu ini otomatis menguasai area tengah */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:flex-1 md:justify-center md:items-center md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-blue-700 rounded md:bg-transparent md:p-0 dark:text-blue-500"
                aria-current="page"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/CariMotor"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Cari Motor
              </a>
            </li>
            <li>
              <a
                href="/TentangKami"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>

        {/* ================= 3. BAGIAN KANAN: LOGIN/DAFTAR ATAU LOGOUT ================= */}
        <div className="hidden md:flex items-center space-x-4 min-w-50 justify-end">
          {userRole === null ? (
            // Tampilan BELUM LOGIN
            <>
              <a
                href="/login"
                className="text-sm font-medium text-blue-600 bg-transparent border border-blue-600 hover:bg-blue-50 rounded-lg px-4 py-2 transition-all"
              >
                Masuk
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 transition-all"
              >
                Daftar
              </a>
            </>
          ) : (
            // Tampilan SUDAH LOGIN (User atau Admin)
            <div className="flex items-center gap-4">
              {userRole === "admin" && (
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold uppercase">
                  Admin
                </span>
              )}
              <button className="text-sm font-medium text-red-600 hover:text-red-700 hover:underline transition-all">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

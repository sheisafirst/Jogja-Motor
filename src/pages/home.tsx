import { useState } from "react";
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";
import Hero from "../components/blocks/Hero";
import StatsSection from "../components/blocks/StatsSection";
import BrandGrid from "../components/blocks/BrandGrid";
import MotorUnggulan from "../components/blocks/MotorUnggulan";
import MotorTerbaru from "../components/blocks/MotorTerbaru";
import FeatureSection from "../components/blocks/FeatureSection";
import CTASection from "../components/blocks/CTASection";

export default function Home() {
  // Gunakan userRole untuk menampung status login
const [userRole, setUserRole] = useState<"admin" | "user" | null>(null);
  // --- DEFINISIKAN FUNGSI DI SINI ---
  const handleLogout = () => {
    setUserRole(null);
    console.log("User telah logout");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar userRole={userRole} />

      {/* Semua konten di sini */}
      <main>
        <Hero />

        <div className="py-20">
          <StatsSection />
        </div>

        <BrandGrid />
        <MotorUnggulan />

        <FeatureSection />

        <MotorTerbaru />
        <CTASection />

        {/* Tambahkan tombol ini di dalam main untuk simulasi */}
        <button onClick={handleLogout} className="text-red-500 underline">
          Simulasi Klik Logout
        </button>
      </main>

      <Footer />
    </div>
  );
}

import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";
import Hero from "../components/blocks/Hero";
import StatsSection from "../components/blocks/StatsSection";
import BrandGrid from "../components/blocks/BrandGrid";
import MotorUnggulan from "../components/blocks/MotorUnggulan";
import MotorTerbaru from "../components/blocks/MotorTerbaru";
import FeatureSection from "../components/blocks/FeatureSection";
import CTASection from "../components/blocks/CTASection";

export default function Dashboard() {
  const currentRole = null;
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar userRole={currentRole} />

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
      </main>

      <Footer />
    </div>
  );
}

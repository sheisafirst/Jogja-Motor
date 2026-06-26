import { useState } from "react";
import { allMotors } from "../components/blocks/MotorData"; 
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";
import MotorCard from "../components/blocks/MotorCard";

interface Motor {
  id: number;
  name: string;
  price: string;
  type: string;
  year: string;
  km: string;
  transmission: string;
  location: string;
  fullLocation: string;
  color: string;
  engine: string;
  condition: string;
  image: string;
  description: string;
}

export default function CariMotor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Terbaru");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("Semua Harga");
  const [selectedYear, setSelectedYear] = useState("Semua Tahun");
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi");

  const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, ""));

  const filteredMotors = allMotors
    .filter((motor) => {
      const matchesSearch = motor.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(b => motor.name.toLowerCase().includes(b.toLowerCase()));
      
      const priceValue = parsePrice(motor.price);
      let matchesPrice = true;
      if (priceRange === "Di bawah Rp 15 juta") matchesPrice = priceValue < 15000000;
      else if (priceRange === "Rp 15 juta – Rp 25 juta") matchesPrice = priceValue >= 15000000 && priceValue <= 25000000;
      else if (priceRange === "Rp 25 juta – Rp 40 juta") matchesPrice = priceValue > 25000000 && priceValue <= 40000000;
      else if (priceRange === "Di atas Rp 40 juta") matchesPrice = priceValue > 40000000;

      const matchesYear = selectedYear === "Semua Tahun" || motor.year === selectedYear;
      const matchesLocation = selectedLocation === "Semua Lokasi" || motor.location === selectedLocation;

      return matchesSearch && matchesBrand && matchesPrice && matchesYear && matchesLocation;
    })
    .sort((a, b) => {
      if (sortOption === "Termurah") return parsePrice(a.price) - parsePrice(b.price);
      if (sortOption === "Termahal") return parsePrice(b.price) - parsePrice(a.price);
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Cari nama atau merek motor..." 
            className="flex-1 p-4 rounded-xl border border-gray-200 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="px-4 rounded-xl border border-gray-200 bg-white" onChange={(e) => setSortOption(e.target.value)}>
            <option value="Terbaru">Terbaru</option>
            <option value="Termurah">Termurah</option>
            <option value="Termahal">Termahal</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4">Merek Motor</h3>
              {["Honda", "Yamaha", "Kawasaki", "Suzuki"].map((b) => (
                <label key={b} className="flex items-center gap-3 mb-2 cursor-pointer">
                  <input type="checkbox" onChange={(e) => {
                    setSelectedBrands(e.target.checked ? [...selectedBrands, b] : selectedBrands.filter(x => x !== b));
                  }} /> {b}
                </label>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4">Rentang Harga</h3>
              {["Semua Harga", "Di bawah Rp 15 juta", "Rp 15 juta – Rp 25 juta", "Rp 25 juta – Rp 40 juta", "Di atas Rp 40 juta"].map((p) => (
                <label key={p} className="flex items-center gap-3 mb-2 cursor-pointer">
                  <input type="radio" name="harga" checked={priceRange === p} onChange={() => setPriceRange(p)} /> {p}
                </label>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Tahun Keluaran</h3>
              <select className="w-full p-2 border rounded-lg mb-4" onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="Semua Tahun">Semua Tahun</option>
                {[...new Set(allMotors.map(m => m.year))].map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              
              <h3 className="font-bold mb-2">Lokasi</h3>
              <select className="w-full p-2 border rounded-lg" onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="Semua Lokasi">Semua Lokasi</option>
                {[...new Set(allMotors.map(m => m.location))].map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </aside>

          <section className="flex-1">
            <p className="mb-4 font-bold text-gray-700">Ditemukan {filteredMotors.length} motor</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMotors.map((motor: Motor) => (
                <MotorCard key={motor.id} motor={motor} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
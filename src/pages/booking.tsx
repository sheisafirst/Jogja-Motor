import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { allMotors } from "../components/blocks/MotorData";
import Navbar from "../components/blocks/Navbar";
import Footer from "../components/blocks/Footer";
import { MapPin, Calendar as CalendarIcon, Clock } from "lucide-react";

export default function Booking() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const motor = allMotors.find((m) => String(m.id) === id);

  const timeSlots = ["09:00", "11:00", "13:00", "15:00", "17:00"];

  const handleConfirm = () => {
    navigate("/booking-success", {
      state: {
        motor,
        date: date.toISOString(), // Simpan dalam format string
        time: selectedTime,
      },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">
            Beranda
          </Link>{" "}
          {">"}
          <Link to={`/motor/${id}`} className="hover:text-blue-600">
            {motor?.name}
          </Link>{" "}
          {">"}
          <span className="font-bold text-gray-900">Booking Janji Temu</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kiri: Ringkasan Booking */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Ringkasan Booking</h2>
            <div className="flex gap-4 mb-6">
              <img
                src={motor?.image}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <p className="font-bold text-lg">{motor?.name}</p>
                <p className="text-blue-600 font-bold">{motor?.price}</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <CalendarIcon size={18} /> Tanggal:
                </span>
                <span className="font-bold text-blue-600">
                  {date.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <Clock size={18} /> Jam:
                </span>
                <span className="font-bold text-blue-600">
                  {selectedTime || "-"}
                </span>
              </div>
              {/* Tambahan Lokasi */}
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <MapPin size={18} /> Lokasi:
                </span>
                <span className="font-bold text-right text-sm">
                  Alamat Penjual
                  <br />
                  (sesuai iklan)
                </span>
              </div>
            </div>
            {/* Tambahan Catatan */}
            <p className="mt-8 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
              Booking gratis. Pembatalan boleh dilakukan maksimal 2 jam sebelum
              jadwal pertemuan.
            </p>
          </div>

          {/* Kanan: Kalender & Pilih Jam */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-center">
                  Pilih Tanggal
                </h3>
                <Calendar
                  onChange={(value) => {
                    if (value instanceof Date) setDate(value);
                  }}
                  value={date}
                  className="w-full border-none shadow-none"
                  minDate={new Date()}
                />
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-center">
                  Pilih Jam
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 rounded-xl border font-bold ${selectedTime === time ? "bg-blue-600 text-white" : "bg-white"}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="w-full mt-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700"
        >
          Konfirmasi Booking
        </button>
      </main>
      <Footer />
    </div>
  );
}

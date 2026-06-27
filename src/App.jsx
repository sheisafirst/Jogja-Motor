import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashbard from "./pages/dashboard";
import Login from "./pages/login";
import Home from "./pages/home";
import CariMotor from "./pages/CariMotor";
import TentangKami from "./pages/TentangKami";
import DetailMotor from "./pages/DetailMotor";
import HubungiPenjual from "./pages/HubungiPenjual";
import Booking from "./pages/booking";
import BookingSuccess from "./pages/BookingSuccess";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CariMotor" element={<CariMotor />} />{" "}
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/motor/:id" element={<DetailMotor />} />
        <Route path="/hubungi/:id" element={<HubungiPenjual />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

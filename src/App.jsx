import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashbard from "./pages/dashboard";
import Login from "./pages/login";
import Home from "./pages/home";
import CariMotor from "./pages/CariMotor";
import TentangKami from "./pages/TentangKami";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CariMotor" element={<CariMotor />} />{" "}
        <Route path="/TentangKami" element={<TentangKami />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

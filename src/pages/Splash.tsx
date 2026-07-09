import React from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

const Splash: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-page">
      {/* Background */}
      <img
        src="/splash-bg.png"
        alt="Background"
        className="splash-bg"
      />

      {/* Content */}
      <div className="splash-content">
        <img
          src="/logo1.png"
          alt="JogjaMotor"
          className="splash-logo"
        />

        <h1 className="splash-title">
          Jual Beli Motor Bekas Mudah dan Terpercaya
        </h1>

        <button
          className="splash-btn"
          onClick={() => navigate("/login")}
        >
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Splash;
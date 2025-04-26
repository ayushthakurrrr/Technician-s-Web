import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate("/about");
  };

  const handleServiceClick = () => {
    navigate("/services");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="title" onClick={handleTitleClick}>
          <p className="welcome-text">Welcome to</p>
          <h1 className="kanchan-title">
            Kanchan <span>Refrigeration</span>
          </h1>
        </div>

        <img
          src="/images/home-page-logo.png"
          alt="Technician Illustration"
          className="center-image"
        />

        <button className="home-services-button" onClick={handleServiceClick}>
          Services
        </button>

      </div>
    </div>
  );
};

export default Home;

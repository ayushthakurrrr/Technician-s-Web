import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleTitleClick = () => {
    navigate("/about");
  };

  const handleServiceClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/services");
    }, 1000); // simulate loading time
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="title" onClick={handleTitleClick}>
          <p className="welcome-text">Welcome to</p>
          <h1 className="kanchan-title">
            Kanchan <span>Technician</span>
          </h1>
        </div>

        <img
          src="/images/home-page-logo.png"
          alt="Technician Illustration"
          className="center-image"
        />

        {loading ? (
          <img
            src="/images/loading-circle.png"
            alt="Loading..."
            className="loading-animation"
          />
        ) : (
          <button className="home-services-button" onClick={handleServiceClick}>
            Services
          </button>
        )}

        <p className="description-text">
          Exclusive services provided by experts as technician at
        </p>

        <img
          src="/images/samsung-logo.png"
          alt="Samsung Logo"
          className="samsung-logo"
        />
      </div>
    </div>
  );
};

export default Home;

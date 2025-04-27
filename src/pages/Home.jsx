import React from "react";
import "../css/home.css";
import Loader from "../components/Loader";

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="title">
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

        <Loader/>

      </div>
    </div>
  );
};

export default Home;

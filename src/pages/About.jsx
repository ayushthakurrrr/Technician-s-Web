import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/About.css";

// import ashImage from "../public/images/ash-logo.png"; // replace with your path
// import profilePic from "../public/images/profile.jpeg"; // replace with your path

// Use public URLs directly

const ashImage = "/images/ash-logo.png";
const profilePic = "/images/profile.jpeg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Header */}
      <div className="about-header">
        <span className="back-arrow" onClick={() => navigate(-1)}>&larr;</span>
        <h1>About Us</h1>
      </div>

      <hr className="separator" />

      {/* Profile Section */}
      <div className="profile-section">
        <img src={profilePic} alt="Priyansh Kanchan" className="profile-pic" />
        <h2>Priyansh Kanchan</h2>
        <p className="work-title">Works at Samsung</p>
      </div>

      <hr className="separator" />

      {/* About Description */}
      <div className="description-section">
        <p>
          I am certified in appliance repair and service management, specializing in Samsung products. I manage service operations for various appliances like TVs, fridges, washing machines, and more with quality assurance and customer satisfaction.
        </p>

        <div className="image-block">
          <img src={ashImage} alt="ASH" className="logo-img" />
          <p className="image-caption">ASH Certified Technician</p>
        </div>
      </div>
    </div>
  );
};

export default About;

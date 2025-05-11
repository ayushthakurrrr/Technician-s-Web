

import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../css/about.css";
import PageHeader from "../components/PageHeader"; // Import custom header component

const About = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleWebsiteClick = () => {
    window.open("https://ashservices.space/", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/kanchanrefrigeration/", "_blank");
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="about-container">
      <PageHeader title={"About Us"} />

      <div className="about-content">
        <p className="about-text">
          We built this platform to make home appliance services easier, faster, and
          more trustworthy. Whether it’s installation, repair, or regular maintenance,
          our goal is to bring skilled service directly to your doorstep—without the
          hassle. With a system designed for clarity, speed, and communication,
          customers can now book confidently and expect reliable help, every time.
          We’re not just fixing appliances—we’re fixing the service experience.
        </p>
        <div className="owner-profile">
          <div className="owner-image-container">
            <img src="/images/client-profile-picture.png" alt="Owner" className="owner-image" />
          </div>
          <p className="owner-name">-Priyansh Kanchan</p>
        </div>
        <p className="owner-subtitle">Owner</p>
        <p className="owner-subtitle">Works at Samsung</p>
        <p className="owner-description">
          Skilled home appliance and refrigeration technician
        </p>

        <div className="follow-us">
          <p>Follow us...</p>
          <img
            src="/images/insta-logo.png"
            alt="Instagram"
            className="instagram-icon"
            onClick={handleInstagramClick}
          />
        </div>
      </div>
      <hr className="divider" />

      <div className="developer-section" onClick={handleWebsiteClick}>
        <p className="developer-text">Built for growth by</p>
        {/* <img
            src="/images/ash-logo.png"
            alt="ash. Logo"
            className="ash-logo"
        /> */}
        <p className="ash-logo">ash.</p>
        <p className="developer-subtext">
          redefining the aspects of your digital requirements...
        </p>
      </div>
      <div className="connect-feedback-section">
        <p className="connect-link-text">
          Click <a href="https://ashservices.space" target="_blank">HERE</a> to connect to us.
        </p>
        <p className="feedback-link-text">
          Send us your feedback <a href="https://ashservices.space/feedback" target="_blank">HERE</a>.
        </p>
      </div>

    </div>
  );
};

export default About;


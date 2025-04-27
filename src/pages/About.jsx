// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/About.css";

// // import ashImage from "../public/images/ash-logo.png"; // replace with your path
// // import profilePic from "../public/images/profile.jpeg"; // replace with your path

// // Use public URLs directly

// const ashImage = "/images/ash-logo.png";
// const profilePic = "/images/profile.jpeg";

// const About = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="about-container">
//       {/* Header */}
//       <div className="about-header">
//         <span className="back-arrow" onClick={() => navigate(-1)}>&larr;</span>
//         <h1>About Us</h1>
//       </div>

//       <hr className="separator" />

//       {/* Profile Section */}
//       <div className="profile-section">
//         <img src={profilePic} alt="Priyansh Kanchan" className="profile-pic" />
//         <h2>Priyansh Kanchan</h2>
//         <p className="work-title">Works at Samsung</p>
//       </div>

//       <hr className="separator" />

//       {/* About Description */}
//       <div className="description-section">
//         <p>
//           I am certified in appliance repair and service management, specializing in Samsung products. I manage service operations for various appliances like TVs, fridges, washing machines, and more with quality assurance and customer satisfaction.
//         </p>

//         <div className="image-block">
//           <img src={ashImage} alt="ASH" className="logo-img" />
//           <p className="image-caption">ASH Certified Technician</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

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
    window.open("https://www.instagram.com/ashservices.space/?igsh=MWNocWYzYjdqZmdweA%3D%3D#", "_blank");
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

        <p className="owner-name">-Priyansh Kanchan</p>
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

        <hr className="divider" />

        <div className="developer-section" onClick={handleWebsiteClick}>
          {/* <p className="developer-text">Designed and Developed by</p> */}
          <img
            src="/images/ash-logo.png"
            alt="Developer Logo"
            className="developer-logo"
          />
          {/* <p className="developer-subtext">
            redefining the aspects of your digital requirements...
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;


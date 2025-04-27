import React from "react";
import "../css/contact.css";
import PageHeader from "../components/PageHeader";
// Import the external CSS file

const Contact = () => {
  const whatsappNumber = "+916265317106"; // Replace with actual number
  const phoneNumber = "+916265317106";   // Replace with actual number

  return (
    <div className="contact-container">
      <PageHeader title="Contact"/>
      {/* <h1 className="contact-header">Contact</h1> */}

      <p className="connect-text">Connect via</p>

      <div className="button-group">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="contact-button whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="contact-button call-button"
        >
          Call
        </a>
      </div>

      <hr className="divider-line" />

      <p className="urgent-text">
        Any urgent service availed after 
        8 P.M will be charged
        more as premium fee.</p>

        {/* 🖼️ Add Developer Logo at the bottom
      <img
        src="/images/ash-logo.png"
        alt="Developer Logo"
        className="developer-logo"
      /> */}
    </div>
  );
};

export default Contact;

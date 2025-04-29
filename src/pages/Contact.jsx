import React from "react";
import "../css/contact.css";
import PageHeader from "../components/PageHeader";
import { useParams } from 'react-router-dom'
// Import the external CSS file

const Contact = () => {
  const whatsappNumber = "+916265317106"; // Replace with actual number
  const phoneNumber = "+916265317106";   // Replace with actual number
  const { id } = useParams();
  return (
    <div className="contact-container">
      <PageHeader title="Contact" />
      {/* <h1 className="contact-header">Contact</h1> */}

      <p className="connect-text"><b>Connect via</b></p>

      <div className="button-group">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I need repair or servicing for my ${id}. Kindly contact me to discuss further. Thanks!`)}`}
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
        <b>Note -</b><br/> 
        Any service if not availed  <br/>
        then visiting charges  of ₹ 200/-is applicable.<br/>
        Any urgent service availed after<br/>
        8 P.M will be charged<br/>
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

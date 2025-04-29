import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/pageHeader.css";

const PageHeader = ({ title, showBackIcon = true }) => {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      {showBackIcon ? (
        <img
          src="/images/back-icon.png"
          alt="Back"
          className="back-icon"
          onClick={() => navigate(-1)}
        />
      ) : (
        <div className="back-icon header-placeholder"></div>
      )}
      
      <h2 className="header-title">{title}</h2>
      {/* Invisible icon to balance the layout */}
      <div className="back-icon header-placeholder"></div>
    </div>
  );
};

export default PageHeader;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/pageHeader.css";

const PageHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      <img
        src="/images/back-icon.png"
        alt="Back"
        className="back-icon"
        onClick={() => navigate(-1)}
      />
      <h2 className="header-title">{title}</h2>
      {/* Invisible icon to balance the layout */}
      <div className="back-icon header-placeholder"></div>
    </div>
  );
};

export default PageHeader;

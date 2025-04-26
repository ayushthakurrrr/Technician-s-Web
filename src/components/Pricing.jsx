import React from "react";
import "../css/pricing.css";

const Pricing = ({ title, description, price }) => {
    return (
      <div className="pricing">
        <h2 className="pricing-heading">{title}</h2>
        <p className="pricing-description">{description}</p>
        <span className="pricing-price">{price}</span>
      </div>
    );
  };

export default Pricing;

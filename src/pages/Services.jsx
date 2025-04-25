// import React from "react";

// const Services = () => {
//   return <h1>Services Page</h1>;
// };

// export default Services;

import React from 'react';
import '../css/services.css'; 
import ApplianceCard from '../components/Appliance-Card'; 
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const cardData = [
    { id: 'air-conditioner', name: 'Air Conditioner', image: '/images/air-conditioner.png' },
    { id: 'refrigerator', name: 'Refrigerator', image: '/images/refrigerator.png' },
    { id: 'washing-machine', name: 'Washing Machine', image: '/images/washing-machine.png' },
    { id: 'water-purifier', name: 'Water Purifier', image: '/images/water-purifier.png' },
    { id: 'microwave', name: 'Microwave Oven', image: '/images/microwave.png' },
  ];

  return (
    <div className="homepage-container">
      <div className="top-bar">Home Page</div>

      <h1 className="main-heading">Welcome to Kanchan Technician</h1>
      
      <hr className="separator-line" />

      <p className="sub-text">Service for any brand available</p>
      <p className="sub-text">
        Exclusive services provided by experts as technician at
        {/* image */}
      </p>

      <div className="cards-wrapper">
        {cardData.map((card) => (
          <ApplianceCard
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            onClick={() => navigate(`/${card.id}`)}
          />
        ))}
      </div>

      <button className="blue-btn" onClick={() => navigate('/about')}>
        About Us
      </button>
    </div>
  );
};

export default Services;

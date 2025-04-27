
import React from 'react';
import '../css/services.css'; 
import '../App.css'; 
import ApplianceCard from '../components/Appliance-Card'; 
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

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
      <PageHeader title="Services" />
      <h1 className="main-heading">Welcome to <span class="kanchan">Kanchan</span> <span class="refrigeration">Refrigeration</span></h1>
      
      <hr className="separator-line"/>

      <p className="sub-text">Service for any brand available</p>

      <div className="cards-wrapper">
        {cardData.map((card) => (
          <ApplianceCard
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            onClick={() => navigate(`/services/${card.id}`)}
          />
        ))}
      </div>

      <button className="blue-btn" onClick={() => navigate('/about')}>
        About us...
      </button>
    </div>
  );
};

export default Services;

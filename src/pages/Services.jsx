import React, { useState, useEffect } from 'react';
import '../css/services.css';
import '../App.css';
import ApplianceCard from '../components/Appliance-Card';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Home from './Home';
import { hasServicePageLoaded, markServicePageAsLoaded } from '../data/loaderControls'; // 🛑 import

const Services = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(!hasServicePageLoaded()); // 🛑 check first

  const cardData = [
    { id: 'air-conditioner', name: 'Air Conditioner', image: '/images/air-conditioner.png' },
    { id: 'refrigerator', name: 'Refrigerator', image: '/images/refrigerator.png' },
    { id: 'washing-machine', name: 'Washing Machine', image: '/images/washing-machine.png' },
    { id: 'water-purifier', name: 'Water Purifier', image: '/images/water-purifier.png' },
    { id: 'microwave', name: 'Microwave Oven', image: '/images/microwave.png' },
    {id: 'tv', name: 'Televisions', image: '/images/image.png'}
  ];

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        markServicePageAsLoaded(); // 🛑 Mark as loaded after 0.5 sec
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return <Home />;
  }

  return (
    <div className="homepage-container">
      <PageHeader title="Home Page" />
      <h1 className="main-heading">Welcome to <span className="kanchan">Kanchan</span> <span className="refrigeration">Refrigeration</span></h1>

      <hr className="separator-line" />

      <p className="sub-text">Service for any brand available</p>

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
        About us...
      </button>
    </div>
  );
};

export default Services;

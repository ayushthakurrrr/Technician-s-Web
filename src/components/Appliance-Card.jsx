import React from 'react';
import './appliance-card.css';

const CardComponent = ({ id, name, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-name">{name}</div>
    </div>
  );
};

export default CardComponent;
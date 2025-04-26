import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import ApplianceCard from '../components/Appliance-Card';
import PageHeader from '../components/PageHeader';
import Pricing from '../components/Pricing';
import '../css/servicedetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="service-details">
      <PageHeader title={product.name} />

      <ApplianceCard name={product.name} image={product.image} />

      <p className="info-line">Service for any brand available.</p>

      <div className="pricing-section">
        {product.services.map((service, index) => (
          <div key={index} className="pricing-item">
            <Pricing
              title={service.title}
              description={service.description}
              price={service.price}
            />
            {index !== product.services.length - 1 && (
              <div className="pricing-separator"></div>
            )}
          </div>
        ))}
      </div>

      <p className="note-text">Note - Any service if not availed then visiting charges of ₹ 200/- is applicable.</p>

      <button className="blue-btn" onClick={() => navigate('/contact')}>
        Contact Us
      </button>
    </div>
  );
};

export default ServiceDetails;

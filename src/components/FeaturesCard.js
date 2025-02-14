import React from 'react';
import './FeaturesCard.css';

const FeaturesCard = ({title, content}) => {
  return (
    <div className="features-card">
      <div className="card-icon">⭐</div> 
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default FeaturesCard;
import React from 'react';
import './Subcomponent.css';

const Subcomponent = ({title, content}) => {
  return (
    <div className="subcomponent">
      <div className="card-icon">🔔</div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Subcomponent;
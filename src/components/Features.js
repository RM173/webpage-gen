import React from 'react';
import { useLocation } from "react-router-dom";
import FeaturesCard from './FeaturesCard';
import './Features.css';

import config from "../config";

const Features = () => {
  const location = useLocation();
  const pathName = location.pathname.substring(1).toLowerCase();
  return (
    <div className="features">
      <FeaturesCard title={config[pathName]?.feature1Header} content={config[pathName]?.feature1Paragraph} />
      <FeaturesCard title={config[pathName]?.feature2Header} content={config[pathName]?.feature2Paragraph} />
      <FeaturesCard title={config[pathName]?.feature3Header} content={config[pathName]?.feature3Paragraph} />
      <FeaturesCard title={config[pathName]?.feature4Header} content={config[pathName]?.feature4Paragraph} />
      <FeaturesCard title={config[pathName]?.feature5Header} content={config[pathName]?.feature5Paragraph} />
      <FeaturesCard title={config[pathName]?.feature6Header} content={config[pathName]?.feature6Paragraph} />
    </div>
  );
}

export default Features;
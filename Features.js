import React from 'react';
import './Features.css'; 
const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <h2 className="feature-title">Real-time Tracking</h2>
        <p className="feature-description">
          Get up-to-the-minute updates on your shipments, allowing for better logistics planning and customer service.
        </p>
      </div>
      <div className="feature">
        <h2 className="feature-title">Cost Reduction</h2>
        <p className="feature-description">
          Our system helps identify cost-saving opportunities by optimizing routes and reducing operational overhead.
        </p>
      </div>
      <div className="feature">
        <h2 className="feature-title">Enhanced Efficiency</h2>
        <p className="feature-description">
          Streamline your processes with our comprehensive dashboard that provides insights into every aspect of your logistics.
        </p>
      </div>
    </div>
  );
};

export default Features;

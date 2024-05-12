import React from 'react';
import '../styles/aboutcard.css';

const AboutCard = () => {
  return (
    <section className="about-label-section">
      <div className="about-label-container">
        <div className="about-label-image">
          <img src="REEP_WEB.jpg" alt="about-label-image" />
          <div className="about-label-description">
            <button>View More →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
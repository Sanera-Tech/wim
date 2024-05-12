import React from 'react';
import '../styles/homesection.css';

const HomeSection = () => {
  return (
    <section className="label-section">
      <div className="label-container">
        <div className="label-image">
          <img src="car.jpg" alt="label-image" />
          <div className="label-description">
            <h2>THIS IS WHERE THE TITLE GOES</h2>
            <p>The subtitle goes here</p>
            <button>View More →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
import React from "react";
import "../../styles/home/homeherosection.css";

const HomeHeroSection = () => {
  return (
    <section className="product-section">
      <div className="product-container">
        <div className="product-image">
          <img src="car.jpg" alt="hero-image" />
          <div className="product-description">
            <h2>THIS IS WHERE THE TITLE GOES</h2>
            <p>The subtitle goes here</p>
            <button>View Product →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

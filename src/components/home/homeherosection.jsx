import React from "react";
import "../../styles/home/homeherosection.css";

const HomeHeroSection = ({ scrollToProducts }) => {
  return (
    <section className="product-section">
      <div className="product-container">
        <div className="product-image">
          <img src="wellness.jpg" alt="hero-image" />
          <div className="product-description">
            <h2>
              Conecta con ese momento del #quécomo de una manera saludable y
              divertida.
            </h2>
            <p>Celebra tu #momentoWIMdeldía</p>
            <button onClick={scrollToProducts}>Ver productos →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

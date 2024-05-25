import React from "react";
import "../../styles/home/homeherosection.css";
import FadeInObserver from "../general/FadeInObserver";

const HomeHeroSection = ({ scrollToProducts }) => {
  return (
    <section className="product-section">
      <div className="product-container">
        <div className="product-image">
          <img src="wellness.jpg" alt="hero-image" />
          <FadeInObserver>
          <div className="product-description">
            <h2>
              Conecta con ese momento del #quécomo de una manera saludable y
              divertida.
            </h2>
            <p>Celebra tu #momentoWIMdeldía</p>
            <button onClick={scrollToProducts}>Ver productos →</button>
          </div>
          </FadeInObserver>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

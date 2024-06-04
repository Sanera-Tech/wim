import React from "react";
import "../../styles/home/aboutcard.css";
import products from "../general/products";

const AboutCard = ( {index} ) => {
  return (
    <section className="about-label-section">
      <div className="about-label-container">
        <div className="about-label-image">
          <img src={products.at(index).smallimage1} alt="about-label-image" />
          <div className="about-label-description">
            <button
              onClick={() => { window.location.href = `/productos/${products.at(index).carouselLink}`; }}
            >
              Comprar →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;

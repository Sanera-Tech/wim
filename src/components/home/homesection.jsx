import React from "react";
import "../../styles/home/homesection.css";
import { useNavigate } from "react-router-dom";
import FadeInObserver from "../general/FadeInObserver";

const HomeSection = () => {
  const navigate = useNavigate();

  return (
    <section className="label-section">
      <FadeInObserver>
      <div className="label-container">
        <div className="label-image">
          <img src="car.jpg" alt="label-image" />
          <div className="label-description">
            <h2>
              <span className="first_letters">W</span>ork
            </h2>
            <h2>
              <span className="first_letters">I</span>nspire
            </h2>
            <h2>
              <span className="first_letters">M</span>otivate
            </h2>

            <a href="/nuestra-historia" className="button-link">
              Nuestra Historia →
            </a>
          </div>
        </div>
      </div>
      </FadeInObserver>
    </section>
  );
};

export default HomeSection;

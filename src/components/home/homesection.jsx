import React from "react";
import "../../styles/home/homesection.css";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const navigate = useNavigate();

  return (
    <section className="label-section">
      <div className="label-container">
        <div className="label-image">
          <img src="car.jpg" alt="label-image" />
          <div className="label-description">
            <h2>Work</h2>
            <h2>Inspire</h2>
            <h2>Motivate</h2>
            
            <button onClick={() => navigate("/nuestra-historia")}>
              Nuestra Historia →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

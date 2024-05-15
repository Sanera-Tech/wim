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
            <h2>THIS IS WHERE THE TITLE GOES</h2>
            <p>The subtitle goes here</p>
            <button onClick={() => navigate("/nuestra-historia")}>
              View More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

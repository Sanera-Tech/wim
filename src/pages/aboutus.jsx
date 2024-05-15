import React from "react";
import "../styles/about_us/aboutus.css";
import AboutCard from "../components/home/aboutcard";
import CompareSlider from "../components/product_page/image-slider";

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="horizontal-info">
        <h1>
          WE ARE <br /> <span className="brand_name">WIM</span>
        </h1>
        <p>
          We print our nutritional values in ingredients big on the front so
          that you get control over your health. Hence our name. Together we are
          making the food industry simple and functional again, rather than
          incomprehensible and addictive. Together we build a new Dutch
          standard.
        </p>
      </div>

      <div className="horizontal-slider">
        <CompareSlider />
      </div>

      <div className="vertical-info">
        <h1>WE BELIEVE THAT</h1>
        <h1>WHAT IS SINCERE WINS.</h1>
        <p>
          People want to know what the truth is. You, me, all of us. - that's
          why we have such an aversion to liars and hypocrites. You can't build
          on lies - The truth provides a hold, and a hold is needed for
          progression. That's why we at Upfront work to be as sincere and honest
          as possible, our search for the truth is never over. What is sincere
          wins.
        </p>
      </div>

      <div className="horizontal-info standout_info">
        <div className="vertical-info">
          <h1>WE GROW</h1>
          <h1>TOGETHER</h1>
          <p>
            Our logo represents our promise to you. We are sincere, and as we
            grow, you grow with us. A friendly bond, and a promise. The left
            hand is us, the right hand is you. We own 100% of our own shares,
            which is why we are free to do independently what we need to do to
            accomplish our mission.
          </p>
        </div>
        <img src="car.jpg"></img>
      </div>

      <div className="about-card-info">
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutUsSection;

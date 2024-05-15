import React from "react";
import HomeHeroSection from "../components/home/homeherosection";
import ProductsCarousel from "../components/home/products-carousel";
import HomeSection from "../components/home/homesection";

const Homepage = () => {
  return (
    <div className="home-container">
      <HomeHeroSection />
      <ProductsCarousel />
      <HomeSection />
    </div>
  );
};

export default Homepage;

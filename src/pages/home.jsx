import React, { useRef } from "react";
import HomeHeroSection from "../components/home/homeherosection";
import ProductsCarousel from "../components/home/products-carousel";
import HomeSection from "../components/home/homesection";
import FadeInObserver from "../components/general/FadeInObserver";
import '../styles/general/fade.css';

const Homepage = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    if (productsRef.current) {
      const offsetPosition = productsRef.current.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="home-container">
      <HomeHeroSection scrollToProducts={scrollToProducts} />
      <div ref={productsRef}>
        <ProductsCarousel />
      </div>
      <HomeSection />
    </div>
  );
};

export default Homepage;

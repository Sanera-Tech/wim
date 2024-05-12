import React from 'react';
import Navbar from './navbar';
import HomeHeroSection from './homeherosection';
import ProductsCarousel from './products-carousel';
import HomeSection from './homesection';
import Footer from './footer';
import '../styles/home.css';

const Homepage = () => {
  return (
    <div className="home-container">
        <Navbar />
        <HomeHeroSection />
        <ProductsCarousel />
        <HomeSection />
        <Footer />
    </div>
  );
};

export default Homepage; 
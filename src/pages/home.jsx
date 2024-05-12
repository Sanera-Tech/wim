import React from 'react';
import Navbar from '../components/navbar';
import HomeHeroSection from '../components/homeherosection';
import ProductsCarousel from '../components/products-carousel';
import HomeSection from '../components/homesection';
import Footer from '../components/footer';
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
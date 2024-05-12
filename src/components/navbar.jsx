import React, { useState, useEffect } from 'react';
import CartItemCard from './cart-item-card';
import '../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const products = [
    {
      title: "PROTEIN ICED COFFEE",
      amount: 2,
      price: 40,
    },
    {
      title: "ENERGY DRINK",
      amount: 1,
      price: 25,
    },
    {
      title: "PROTEIN BAR",
      amount: 3,
      price: 10,
    },
    {
      title: "WHEY PROTEIN POWDER",
      amount: 1,
      price: 50,
    }
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <section className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <img src="/logo.png" alt="Logo" className="navbar-logo" />
          </span>
          <span className="navbar-title">LOGO HERE</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Everything</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">All Products</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Something</a>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="navbar-button">Login</button>
          <button className="navbar-button" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="shopping-cart-icon" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M16 4H4a2 2 0 0 0-2 2v2h2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8h2V6a2 2 0 0 0-2-2zm-2 13H6v-2h8v2zm4-5H6V9h12v3z"/>
            </svg>
          </button>
        </div>
      </nav>
      {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} products={products} />}
    </section>
  );
};


const Sidebar = ({ toggleSidebar, products }) => {
  return (
    <div className="sidebar-overlay" onClick={toggleSidebar}>
      <div className="sidebar">
        <h2>In Cart Items</h2>
          {products.map((product, index) => (
            <CartItemCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Navbar;

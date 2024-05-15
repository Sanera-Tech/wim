import React, { useState, useEffect } from "react";
import CartItemCard from "./general/cart-item-card";
import "../styles/navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";

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
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <section
      className={`navbar-wrapper ${scrolled ? "scrolled" : ""} ${
        !isHomepage ? "scrolled" : ""
      }`}
    >
      <nav className="navbar">
        <div className="navbar-brand">
          <button className="navbar-logo button" onClick={() => navigate("/")}>
            <span className="navbar-logo">
              <img src="/logo.png" alt="Logo" className="navbar-logo" />
            </span>
            <span className="navbar-title"></span>
          </button>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/nuestra-historia" className="navbar-link">
              Nuestra Historia
            </Link>
          </li>
          <li className="navbar-item">
            <a href="/#products" className="navbar-link">
              Our Products
            </a>
          </li>
          <li className="navbar-item">
            <Link to="/contáctanos" className="navbar-link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="navbar-button" onClick={toggleSidebar}>
            <div className="wheel1"></div>
            <div className="wheel2"></div>
          </button>
        </div>
      </nav>
      {sidebarVisible && (
        <Sidebar toggleSidebar={toggleSidebar} products={products} />
      )}
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

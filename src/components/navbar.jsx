import React, { useState, useEffect } from "react";
import CartItemCard from "./general/cart-item-card";
import "../styles/navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import MainCart from "./cart/MainCart";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const { cartItemCount } = useCart();

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
      <nav
        className="navbar"
        style={{
          backgroundColor: `${
            sidebarVisible || scrolled || !isHomepage
              ? "var(--primary)"
              : "transparent"
          }`,
        }}
      >
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
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <a href="/nuestra-historia" className="navbar-link">
              Nuestra Historia
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
      {sidebarVisible && <MainCart toggleSidebar={toggleSidebar} />}
    </section>
  );
};

export default Navbar;

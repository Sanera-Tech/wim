import React, { useState, useEffect } from "react";
import CartItemCard from "./general/cart-item-card";
import "../styles/navbar.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import MainCart from "./cart/MainCart";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
            showMobileMenu ||
            sidebarVisible ||
            scrolled ||
            !isHomepage ||
            isHovered
              ? "var(--primary)"
              : "transparent"
          }`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-logo button">
            <span className="navbar-logo">
              <img src="/logo.png" alt="Logo" className="navbar-logo" />
            </span>
            <span className="navbar-title"></span>
          </a>
        </div>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="nav_hamburger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
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
              Contáctanos
            </Link>
          </li>
        </ul>
        <div className="navbar-actions">
          <button className="navbar-button" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="shopping_cart_count">{cartItemCount}</span>
          </button>
        </div>
      </nav>
      {sidebarVisible && <MainCart toggleSidebar={toggleSidebar} />}
      {showMobileMenu && (
        <div className="mobile_menu">
          <span className="navbar-logo">
            <img src="/logo.png" alt="Logo" className="navbar-logo" />
          </span>
          <Link to="/" className="navbar-link">
            Inicio
          </Link>

          <a href="/nuestra-historia" className="navbar-link">
            Nuestra Historia
          </a>

          <Link to="/contáctanos" className="navbar-link">
            Contáctanos
          </Link>
        </div>
      )}
    </section>
  );
};

export default Navbar;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { CartProvider } from "../contexts/CartContext";

const Layout = () => {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;

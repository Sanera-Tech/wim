import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import ProductInfo from "./pages/product-info";
import Login from "./pages/login";
import AboutUsSection from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/productos">
            <Route path="/productos/:id">
              <Route index element={<ProductInfo />} />
            </Route>
          </Route>
          <Route path="/nuestra-historia" element={<AboutUsSection />} />
          <Route path="/contáctanos" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import ProductInfo from "./pages/product-info";
import Login from "./pages/login";
import AboutUsSection from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Layout from "./components/layout";
import OrderPage from "./pages/OrderPage";
import products from "./components/general/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {products.map((product, index) => (
            <Route path={"/productos/"+product.carouselLink} key={index}>
              <Route index element={<ProductInfo index={index} key={index}/>} />
           </Route>
          ))}
          <Route path="/nuestra-historia" element={<AboutUsSection />} />
          <Route path="/contáctanos" element={<ContactUs />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

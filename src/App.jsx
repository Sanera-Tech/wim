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
import PrivacyPolicy from "./regulations/PrivacyPolicy";
import CambiosPolicy from "./regulations/CambiosPolicy";
import DeliveryPolicy from "./regulations/DeliveryPolicy";
import TermsAndConditions from "./regulations/TermsAndConditions";
import ReclaimationPolicy from "./regulations/ReclaimationPolicy";
import PaymentComplete from "./pages/PaymentComplete";

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
          <Route path="/payment-complete" element={<PaymentComplete />} />
          <Route path="/política-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/política-de-cambios-y-devoluciones" element={<CambiosPolicy />} />
          <Route path="/política-de-envíos" element={<DeliveryPolicy />} />
          <Route path="/términos-y-condiciones" element={<TermsAndConditions />} />
          <Route path="/libro-de-reclamaciones" element={<ReclaimationPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
import PolicyTextP from "./pages/regulations/PolicyTextP";
import CambiosPolicy from "./pages/regulations/CambiosPolicy";
import DeliveryPolicy from "./pages/regulations/DeliveryPolicy";
import TermsAndConditions from "./pages/regulations/TermsAndConditions";
import ReclaimationPolicy from "./pages/regulations/ReclaimationPolicy";
import PaymentComplete from "./pages/PaymentComplete";
import PaymentFailed from "./pages/PaymentFailed";
import PaymentAwait from "./pages/PaymentAwait";

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
          <Route path="/payment-complete/:orderNumber" element={<PaymentComplete />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/payment-await" element={<PaymentAwait />} />
          <Route path="/política-de-privacidad" element={<PolicyTextP />} />
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

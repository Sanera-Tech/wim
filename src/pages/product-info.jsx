import React, { useState } from "react";
import PhotosPage from "../components/product_page/PhotosPage";
import ProductInfoCard from "../components/product_page/product-info-card";
import FAQ from "../components/general/faq";
import "../styles/product_page/product-info.css";
import { useCart } from "../contexts/CartContext";
import CartItemCard from "../components/general/cart-item-card";
import FadeInObserver from "../components/general/FadeInObserver";
import products from "../components/general/products";

const ProductInfo = ( {index} ) => {
  const [showPopup, setShowPopup] = useState(false);

  const og_p = {
    item: products.at(index),
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setShowPopup(true);
    addToCart(products.at(index), 1);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="product-container-main">
      {showPopup && (
        <div className="item_popup">
          <CartItemCard
            product={og_p}
            addFromCart={handleAddToCart}
            showCount={false}
          />
        </div>
      )}
      <div className="product-image-container">
        <PhotosPage photoIndex={index} />
        <div className="product-details-container">
          <FadeInObserver>
          <div className="info-container">
            <ProductInfoCard
              product={products.at(index)}
              addToShoppingCart={handleAddToCart}
            />
          </div>
          <div className="info-container">
            <button onClick={handleAddToCart} className="purchase">
              Añadir a la Cesta
            </button>
          </div>
          </FadeInObserver>
          <div className="info-container">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

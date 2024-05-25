import React, { useState } from "react";
import PhotosPage from "../components/product_page/PhotosPage";
import ProductInfoCard from "../components/product_page/product-info-card";
import FAQ from "../components/general/faq";
import "../styles/product_page/product-info.css";
import { useCart } from "../contexts/CartContext";
import CartItemCard from "../components/general/cart-item-card";
import FadeInObserver from "../components/general/FadeInObserver";

const ProductInfo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const product = {
    name: "PROTEIN ICED COFFEE",
    main_image: "/floatingBag.png",
    id: "1021021",
    description:
      "Upfront Protein iced coffee is relatively low in sugar (1g), high in protein (22g per shake!) and contains as much caffeine as a cup of coffee. Great to start your day with, or as a refreshing drink during warm weather.",
    weight: "1",
    serving: "33",
    price: "54",
  };

  const og_p = {
    item: product,
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setShowPopup(true);
    addToCart(product, 1);
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
        <PhotosPage />
        <div className="product-details-container">
          <FadeInObserver>
          <div className="info-container">
            <ProductInfoCard
              product={product}
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

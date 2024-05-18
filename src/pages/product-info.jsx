import React from "react";
import PhotosPage from "../components/product_page/PhotosPage";
import ProductInfoCard from "../components/product_page/product-info-card";
import FAQ from "../components/general/faq";
import "../styles/product_page/product-info.css";
import { useCart } from "../contexts/CartContext";

const ProductInfo = () => {
  const product = {
    name: "PROTEIN ICED COFFEE",
    main_image: "/floatingBag.png",
    id: "1021021",
    price: "210",
    description:
      "Upfront Protein iced coffee is relatively low in sugar (1g), high in protein (22g per shake!) and contains as much caffeine as a cup of coffee. Great to start your day with, or as a refreshing drink during warm weather.",
    weight: "1",
    serving: "33",
    price: "54"
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="product-container-main">
      <div className="product-image-container">
        <PhotosPage />
        <div className="product-details-container">
          <div className="info-container">
            <ProductInfoCard
              product={product}
              addToShoppingCart={handleAddToCart}
            />
          </div>
          <div className="info-container">
            <button onClick={handleAddToCart} className="purchase">
              Add to Cart
            </button>
          </div>
          <div className="info-container">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

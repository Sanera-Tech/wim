import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.carouselImage} className="product_card_img" />
      <h2>{product.carouselTitle}</h2>
      <p>
        {product.weight} gr. | {product.serving} Bares
      </p>
    </div>
  );
};

export default ProductCard;

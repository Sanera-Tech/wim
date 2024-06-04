import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" style={{ backgroundColor: product.color }}>
      <img src={product.carouselImage} className="product_card_img" />
      <h2>{product.title}</h2>
      <h3>{product.carouselTitle}</h3>
      <p>
        {product.weight} | {product.serving}
      </p>
    </div>
  );
};

export default ProductCard;

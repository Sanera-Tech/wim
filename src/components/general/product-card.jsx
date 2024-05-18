import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} className="product_card_img" />
      <h2>{product.title}</h2>
      <p>
        {product.weight} kg | {product.servings} servings
      </p>
    </div>
  );
};

export default ProductCard;

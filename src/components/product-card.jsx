import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} style={{ height: 400, width: 300, objectFit: 'contain' }} />
      <h2>{product.title}</h2>
      <p>{product.weight} kg | {product.serving} servings</p>
    </div>
  );
};

export default ProductCard;
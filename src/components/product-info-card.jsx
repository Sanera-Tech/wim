import React, { useState } from 'react';
import "../styles/product-info-card.css";

const ProductInfoCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  return (
    <div className="product-info-area">
      <h2>{product.title}</h2>
      <h4>{product.description}</h4>
      <p>{product.weight} kg | {product.serving} servings</p>
      <h4>Choose your size:</h4>
      <div className="size-selection">
        <button
          className={selectedSize === 'medium' ? 'selected' : ''}
          onClick={() => handleSizeClick('medium')}
        >
          <span>Medium</span>
          <span>{product.serving}</span>
        </button>
        <button
          className={selectedSize === 'large' ? 'selected' : ''}
          onClick={() => handleSizeClick('large')}
        >
          <span>Large</span>
          <span>{product.serving}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfoCard;
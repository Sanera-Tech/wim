import React, { useState } from "react";
import "../../styles/home/product-info-card.css";
import products from "../general/products";

const ProductInfoCard = ({ product }) => {

  return (
    <div className="product-info-area">
      <h2>{product.name}</h2>
      <h4>{product.description}</h4>
      <p>
        {product.weight} gr. | {product.serving} Bares
      </p>
      <h4>Elige tu sabor:</h4>
      <div className="size-selection">
        {products.map((product, thisIndex) => (
        <button
          className={window.location.href.endsWith(`/productos/${product.carouselLink}`) ? "selected" : ""}
          onClick={() => { window.location.href = `/productos/${product.carouselLink}`; }}
          key={thisIndex}
        >
          <span>{product.name}</span>
        </button>
      ))}
      </div>
      <h3 className="pricing">Precio: S/{product.price}</h3>
    </div>
  );
};

export default ProductInfoCard;

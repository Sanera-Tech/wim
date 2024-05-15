import React from "react";
import "../../styles/general/cart-item-card.css";

const CartItemCard = ({ product }) => {
  return (
    <div className="cart-product-card">
      <h2>{product.title}</h2>
      <p>
        x {product.amount} | ${product.price}
      </p>
    </div>
  );
};

export default CartItemCard;

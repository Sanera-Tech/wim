import React, { useEffect } from "react";
import "../../styles/general/cart-item-card.css";

const CartItemCard = ({ product, addFromCart }) => {
  useEffect(() => {
    console.log(product.item);
  }, [product]);

  return (
    <div className="cart-product-card">
      <div className="cart_img_box">
        <img src={product.item.main_image} alt="Product Image" />
      </div>
      <div className="cart_info_box">
        <h2>{product.item.name}</h2>
        <p>Size : {product.item.size} </p>
        <p>${product.item.price}</p>
      </div>
      <div className="cart_button_box">
        <button onClick={() => addFromCart(product.item, 1)}> + </button>
        <span> x {product.count}</span>
        <button onClick={() => addFromCart(product.item, -1)}> - </button>
      </div>
    </div>
  );
};

export default CartItemCard;

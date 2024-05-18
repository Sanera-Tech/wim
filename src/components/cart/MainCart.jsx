import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import CartItemCard from "../general/cart-item-card";

const MainCart = ({ toggleSidebar }) => {
  const { cart, addToCart } = useCart();
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <h2>In Cart Items</h2>
        <div className="cart_item_box">
          {cart.map((product, index) => (
            <CartItemCard
              key={index}
              product={product}
              addFromCart={addToCart}
            />
          ))}
        </div>
        <div className="order_box"></div>
      </div>
    </div>
  );
};

export default MainCart;

import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import CartItemCard from "../general/cart-item-card";

const MainCart = ({ toggleSidebar }) => {
  const {
    cart,
    addToCart,
    calculateSubtotal,
    calculateTotal,
    calculateShippingCost,
  } = useCart();
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
        <div className="order_box">
          <div className="order_number_txt_box">
            <span>Subtotal</span>
            <span>$ {calculateSubtotal()}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Shipping Cost</span>
            <span>$ {calculateShippingCost()}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Total</span>
            <span>$ {calculateTotal()}</span>
          </div>
        </div>
        <button className="order_btn">Go To Order →</button>
      </div>
    </div>
  );
};

export default MainCart;

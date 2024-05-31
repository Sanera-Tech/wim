import React, { useEffect, useState } from "react";
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

  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setSubTotal(calculateSubtotal());
    setShipping(calculateShippingCost());
    setTotal(calculateTotal());
  }, [cart]);

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <h2>Artículos en la Cesta</h2>
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
            <span>$ {subTotal}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Delivery</span>
            <span>$ {shipping}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Total</span>
            <span>$ {total}</span>
          </div>
        </div>
        <a href="/order" className="order_btn">
            Ir a la Caja →
        </a>
      </div>
    </div>
  );
};

export default MainCart;

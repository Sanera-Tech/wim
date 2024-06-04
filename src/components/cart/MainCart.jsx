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
    const subTotal = calculateSubtotal();
    const shipping = calculateShippingCost();
    const total = calculateTotal();

    setSubTotal(formatCurrency(subTotal));
    setShipping(formatCurrency(shipping));
    setTotal(formatCurrency(total));
  }, [cart]);

  function formatCurrency(amount) {
    return amount.toFixed(2).replace(/\.(\d)$/, '.$10');
  }

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <h2>Artículos en la Cesta</h2>
        <div className="cart_item_box" style={{ maxHeight: "300px", overflowY: "auto" }}>
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
            <span>S/{subTotal}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Delivery</span>
            <span>S/{shipping}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Total</span>
            <span>S/{total}</span>
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

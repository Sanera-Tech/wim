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
    cartItemCount,
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
    return amount.toFixed(2);
  }

  return (
    <div className="sidebar-overlay">
      <div className="sidebar">
        <h2>Mi Carrito ({cartItemCount})</h2>
        <div className="free-delivery-banner" style={{ backgroundColor: "#333", color: "#fff", padding: "10px", borderRadius: "5px", marginBottom: "10px", textAlign: "center" }}>
          Te faltan S/. 90.00 para delivery gratis.
        </div>
        <div className="cart_item_box" style={{ overflowY: "auto" }}>
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

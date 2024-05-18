import React, { createContext, useContext, useState, useEffect } from "react";
import {
  addToCart as addToCartUtil,
  getCart as getCartUtil,
} from "../utils/cart";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const fetchCart = async () => {
    const { cart, itemInCart } = await getCartUtil();
    console.log(cart);
    setCart(cart);
    setCartItemCount(itemInCart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (item, count) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (cartItem) => cartItem.item.id === item.id
    );

    if (index === -1 && count > 0) {
      updatedCart.push({ item, count });
    } else if (index !== -1) {
      updatedCart[index].count += count;
      if (updatedCart[index].count <= 0) {
        updatedCart.splice(index, 1); // Remove item if count is zero or negative
      }
    }

    setCart(updatedCart);
    await addToCartUtil(item, count);
  };

  return (
    <CartContext.Provider value={{ cart, cartItemCount, addToCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

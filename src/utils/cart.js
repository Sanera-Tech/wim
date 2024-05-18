export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemInCart = cart.length;
    console.log(cart);
    return { cart, itemInCart };
  } catch (error) {
    console.error("Error getting cart from localStorage:", error);
    return { cart: [], itemInCart: 0 };
  }
};

export const addToCart = async (item, itemCount) => {
  try {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const index = cart.findIndex((cartItem) => cartItem.item.id === item.id);

    if (index === -1 && itemCount > 0) {
      cart.push({ item, count: itemCount });
    } else if (index !== -1) {
      cart[index].count += itemCount;
      if (cart[index].count <= 0) {
        cart.splice(index, 1); // Remove item if count is zero or negative
      }
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

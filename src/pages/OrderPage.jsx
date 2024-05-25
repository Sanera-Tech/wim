import React, { useEffect, useState } from "react";
import "../styles/order_page.css";
import { useCart } from "../contexts/CartContext";
import CartItemCard from "../components/general/cart-item-card";

const OrderPage = () => {
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
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [poBox, setPoBox] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("Spain");
  const [submitMessage, setSubmitMessage] = useState("");
  const endpoint =
    "https://w6e3ol5nlnx5zov7ed5nmxv7la0felyk.lambda-url.eu-north-1.on.aws/";

  useEffect(() => {
    setSubTotal(calculateSubtotal());
    setShipping(calculateShippingCost());
    setTotal(calculateTotal());
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name,
      last_name,
      email,
      phone_number,
      address,
      poBox,
      city,
      postalCode,
      message,
      subject: country,
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setPoBox("");
    setCity("");
    setPostalCode("");
    setMessage("");
    setCountry("");

    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitMessage("Message successfully sent!");
        } else {
          setSubmitMessage("Error encountered while sending message.");
        }
        setTimeout(() => {
          setSubmitMessage("");
        }, 10000);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitMessage("Error encountered while sending message.");
        setTimeout(() => {
          setSubmitMessage("");
        }, 10000);
      });
  };

  return (
    <div className="shopping_page">
      <div className="left_shopping">
        <form
          className="contact-form"
          action={endpoint}
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">Nombre: *</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={first_name}
                required
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Apellido:</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Country: *</label>
            <select
              id="subject"
              name="subject"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="Spain">Spain</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address: *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="poBox">PO Box: *</label>
            <input
              type="text"
              id="poBox"
              name="poBox"
              value={poBox}
              required
              onChange={(e) => setPoBox(e.target.value)}
            ></input>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City: *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code:</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              ></input>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Purchase Items
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
      <div className="right_shopping">
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
          <div className="coupon_box">
            <label htmlFor="coupon">Promo Code</label>
            <div className="code_input_btn">
              <input
                type="text"
                name="coupon"
                id="coupon"
                className="code_input"
              />
              <button>→ </button>
            </div>
          </div>
          <div className="order_number_txt_box">
            <span>Subtotal</span>
            <span>$ {subTotal}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Gastos de Envío</span>
            <span>$ {shipping}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Total</span>
            <span>$ {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

import React, { useEffect, useState } from "react";
import "../styles/order_page.css";
import { useCart } from "../contexts/CartContext";
import CartItemCard from "../components/general/cart-item-card";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { stringify, parse } from "flatted";
import { getDeliveryDate } from "../utils/calculateDelivery";
import { objectToFormData } from "../utils/objToForm";

const OrderPage = () => {
  const { orderNumber } = useParams();
  const navigate = useNavigate();
  const prodURI = "https://wim-backend.onrender.com/";
  const devURI = "http://localhost:3500/";
  const URI = prodURI;
  const {
    cart,
    addToCart,
    calculateSubtotal,
    calculateTotal,
    calculateShippingCost,
    setCart,
  } = useCart();
  const [token, setToken] = useState("");
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
  const [country, setCountry] = useState("PERU");
  const [countryCode, setCountryCode] = useState("PE");
  const [submitMessage, setSubmitMessage] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [usedCouponCode, setUsedCouponCode] = useState("");
  const [deliveryFree, setDeliveryFree] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endpoint =
    "https://w6e3ol5nlnx5zov7ed5nmxv7la0felyk.lambda-url.eu-north-1.on.aws/";
  const sesEndpoint =
    "https://sbzb436vud5v72mpbkhnfxivpi0lsreo.lambda-url.eu-north-1.on.aws/";

  function formatCurrencyAuto(amount) {
    return parseFloat(amount.toFixed(2));
  }

  useEffect(() => {
    setSubTotal(formatCurrencyAuto(calculateSubtotal()));
    setShipping(formatCurrencyAuto(calculateShippingCost()));
    setTotal(formatCurrencyAuto(calculateTotal()));
  }, [cart]);

  useEffect(() => {
    if (window.Culqi) {
      window.Culqi.publicKey = "pk_test_eef864e6088fcee3"; // Replace with your Culqi public key
    }
  }, []);

  window.culqi = function () {
    console.log("culqi function");
    if (Culqi.token) {
      const token = Culqi.token.id;
      setToken(token);
      console.log("Se ha creado un Token: ", token);

      const test = async () => {
        setIsLoading(true);
        const formData = new FormData();
        const inTotal = Math.round(total * 100);
        console.log(inTotal)
        const values = {
          amount: inTotal,
          currency_code: "PEN",
          email: email,
          source_id: token,
          capture: true,
          description: "Prueba",
          installments: 0,
          metadata: { dni: "70202170" },
          antifraud_details: {
            address: address,
            address_city: city,
            country_code: countryCode,
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
          },
        };

        try {
          console.log("starting");
          formData.append("values", JSON.stringify(values));
          const response = await axios.post(URI + "test/", formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(response);
          if (response.status === 201) {
            console.log("complete");
            await handlePaymentComplete();
            return true;
          } else if (response.status === 200) {
            console.log("complete 200");
            handlePaymentAwait();
            return true;
          } else {
            console.log("error");
            handlePaymentFailed();
          }
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      };

      test();
      window.Culqi.close();
    } else if (Culqi.order) {
      const order = Culqi.order;
      console.log("Se ha creado el objeto Order: ", order);
      window.Culqi.close();
    } else {
      console.log("Error : ", Culqi.error);
      window.Culqi.close();
    }
  };

  const generateTrackingId = (first_name, last_name) => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const dateFormatted = `${day}${month}${year}`;

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeFormatted = `${hours}${minutes}`;

    const firstInitial = first_name.charAt(0).toUpperCase();
    const lastInitial = last_name.charAt(0).toUpperCase();

    const newTrackingId = `${dateFormatted}${timeFormatted}${firstInitial}${lastInitial}`;
    setTrackingId(newTrackingId);
    return newTrackingId;
  };

  useEffect(() => {
    console.log(trackingId); // This will log the updated trackingId whenever it changes
  }, [trackingId]);

  const handleEmailSend = async ( data) => {

    const serializedData = JSON.stringify(data);
    console.log(serializedData);

    const fetchPromise = fetch(sesEndpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: serializedData,
    });

    fetchPromise
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
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitMessage("Error encountered while sending message.");
        setTimeout(() => {
          setSubmitMessage("");
        }, 10000);
      });
  };
  const handleOrderSubmission = async (newOrder) => {
    try {
      console.log("rqwewqkejwkjk");

      const response = await axios.post(URI + "order/", newOrder, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      if (response.status === 201) {
        console.log("complete");
        return true;
      } else {
        console.log("error");
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handlePaymentComplete = async () => {
    const newTrackingId = generateTrackingId(first_name, last_name);
    const dDate = await getDeliveryDate();
    const newOrderObj = {
      order_id: newTrackingId,
      order_details: cart,
      customer_details: {
        first_name,
        last_name,
        phone_number,
        email,
        address,
        poBox,
        city,
        postalCode,
        country,
      },
      delivery_date: dDate,
      payment_status: "paid",
      shipping_status: "processing",
      tracking_number: "",
      subTotal: subTotal,
      total: total,
      couponCode:usedCouponCode
    };

    const newOrderFormData = await objectToFormData(newOrderObj);
    await handleOrderSubmission(newOrderFormData);
    const cart_mini = cart.map((cartItem) => ({
      name: cartItem.item.name,
      weight: cartItem.item.weight,
      title: cartItem.item.title,
      price: cartItem.item.price,
      count: cartItem.count,
    }));
    console.log("CART", cart_mini);
    // Example usage of the function
    const dataReceipt = {
      first_name,
      last_name,
      email,
      phone_number,
      cart_mini,
      subTotal,
      total,
      shipping,
      newTrackingId,
    };
    console.log("Data Receipt:", dataReceipt);

    // You can call handleEmailSend with the event and data object
    await handleEmailSend( dataReceipt);
    const oldCart = JSON.parse(JSON.stringify(cart));
   
    navigate(`/payment-complete/${newTrackingId}`, {
      state: {
        trackingId: newTrackingId,
        receiptUrl: "",
        cart: oldCart,
        subTotal: subTotal,
        total: total,
        shipping: shipping,

        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        email: email,
        address: address,
        poBox: poBox,
        city: city,
        country: country,
      },
    }); 
  };

  const handlePaymentFailed = () => {
    navigate("/payment-failed");
  };

  const handlePaymentAwait = async () => {
    const newTrackingId = generateTrackingId(first_name, last_name);
    const dDate = await getDeliveryDate();
    const newOrderObj = {
      order_id: newTrackingId,
      order_details: cart,
      customer_details: {
        first_name,
        last_name,
        phone_number,
        email,
        address,
        poBox,
        city,
        postalCode,
        country,
      },
      delivery_date: dDate,
      payment_status: "underReview",
      shipping_status: "reportedPending",
      tracking_number: "",
      subTotal: subTotal,
      total: total,
      couponCode:usedCouponCode
    };

    const newOrderFormData = await objectToFormData(newOrderObj);
    await handleOrderSubmission(newOrderFormData);
    setCart([])
    navigate("/payment-await");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.Culqi) {
      console.error("Culqi is not loaded");
      return;
    }
    const inTotal = Math.round(total * 100);

    console.log(inTotal)
    window.Culqi.settings({
      title: "WIM Nutrition",
      currency: "PEN",
      description: "Purchase",
      amount: inTotal, // Amount in cents
    });

    window.Culqi.options({
      lang: "auto",
      installments: false, // Habilitar o deshabilitar el campo de cuotas
      paymentMethods: {
        tarjeta: true,
        yape: true,
        bancaMovil: true,
        agente: true,
        billetera: true,
        cuotealo: true,
      },
      style: {
        logo: "https://wimnutrition.com/LogoWithBackground.png",
        bannerColor: "#60c1c9",
        buttonBackground: "#f4c256", // hexadecimal
        menuColor: "#f6f3dd", // hexadecimal
      },
    });

    window.Culqi.open();
  };

  const handleCulqiEvent = () => {
    if (window.Culqi.token) {
      const token = window.Culqi.token.id;
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
        token,
      };

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

      window.Culqi.close();
    } else {
      console.error(window.Culqi.error);
    }
  };

  useEffect(() => {
    window.addEventListener("culqi.event", handleCulqiEvent);
    return () => {
      window.removeEventListener("culqi.event", handleCulqiEvent);
    };
  }, [
    total,
    first_name,
    last_name,
    email,
    phone_number,
    address,
    poBox,
    city,
    postalCode,
    message,
    country,
  ]);

  const handleChange = (event) => {
    setCouponCode(event.target.value);
  };

  const couponEffects = {
    MomentoWIM: {
      removeDelivery: true,
    },
  };

  const handlePromoActivate = () => {
    if (couponCode in couponEffects) {
      const effects = couponEffects[couponCode];
      if (effects.removeDelivery) {
        const newTotal = subTotal;
        setTotal(newTotal);
        setDeliveryFree(true);
        setUsedCouponCode(couponCode)
      }
      setCouponCode("");
    } else {
      console.log("Invalid coupon code");
    }
  };

  function formatCurrency(amount) {
    return amount.toFixed(2);
  }

  return (
    <div className="shopping_page">
      <div className="left_shopping">
        <form className="contact-form" onSubmit={handlePaymentComplete}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">Nombre:</label>
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
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="subject">País:</label>
            <select
              id="subject"
              name="subject"
              value={country}
              onChange={(e) => {
                const selectedCountry = e.target.value;
                setCountry(selectedCountry);
                // Set countryCode based on selectedCountry
                if (selectedCountry === "Peru") {
                  setCountryCode("PE");
                } else {
                  setCountryCode(""); // Handle 'Other' or default case
                }
              }}
              required
            >
              <option value="Perú">Perú</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">Ciudad:</label>
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
              <label htmlFor="postalCode">Distrito:</label>
              <select
                id="postalCode"
                name="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              >
                <option value="">Seleccionar Distrito</option>
                <option value="Barranco">Barranco</option>
                <option value="Chorrillos">Chorrillos</option>
                <option value="Jesús María">Jesús María</option>
                <option value="La Molina">La Molina</option>
                <option value="La Victoria">La Victoria</option>
                <option value="Lince">Lince</option>
                <option value="Magdalena">Magdalena</option>
                <option value="Miraflores">Miraflores</option>
                <option value="Pueblo Libre">Pueblo Libre</option>
                <option value="San Borja">San Borja</option>
                <option value="San Isidro">San Isidro</option>
                <option value="San Miguel">San Miguel</option>
                <option value="Surco">Surco</option>
                <option value="Surquillo">Surquillo</option>
              </select>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Pagar
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
            <label htmlFor="coupon">Código Promocional</label>
            <div className="code_input_btn">
              <input
                type="text"
                name="coupon"
                id="coupon"
                className="code_input"
                onChange={handleChange}
                value={couponCode}
              />
              <button onClick={handlePromoActivate}>→</button>
            </div>
          </div>
          <div className="order_number_txt_box">
            <span>Subtotal</span>
            <span>S/{formatCurrency(subTotal)}</span>
          </div>
          <div className="order_number_txt_box">
            <span>Delivery</span>
            <span className={deliveryFree ? "strikethrough" : ""}>
              {formatCurrency(shipping)}
            </span>
          </div>
          <div className="order_number_txt_box">
            <span>Total</span>
            <span>S/{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

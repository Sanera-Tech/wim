import React from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router
import '../styles/PaymentComplete.css';

const PaymentComplete = () => {
  const location = useLocation();
  const {
    trackingId,
    receiptUrl,
    cart,
    subTotal,
    total,
    shipping,
    first_name,
    last_name,
    phone_number,
    email,
    address,
    poBox,
    city,
    country
  } = location.state;

  const handlePrint = () => {
    window.print();
  };
  

  return (
    <div className="payment-complete-container">
      <h1>Payment Complete</h1>
      
      <div className="order-details">
        <p>Order Tracking ID: <strong>{trackingId}</strong></p>
        <button className="print-button" onClick={handlePrint}>Print Receipt</button>
        <p>A confirmation email containing your receipt has been sent to your inbox. Should you not find it in your inbox, kindly check your spam or junk folder.</p>
        <p>Your order has been placed. Thank you for your purchase! To ensure you have all the necessary details, please save a copy of your receipt by either downloading it or taking a screenshot. Don’t forget to keep your tracking number for future reference.</p>
        <p></p>
        <p>If you have any questions or need further assistance, feel free to reach out.</p>

        
        <div className="customer-info">
              <div className="customer-info-block">
                <h2 className='customer-title'>Customer Details:</h2>
                  <p>Name: {first_name} {last_name}</p>
                  <p>Phone Number: {phone_number}</p>
                  <p>Email: {email}</p>
              </div>
              
              <div className="customer-info-block">
                <h2 className='customer-title'>Billing Information:</h2>  
                <p>Address: {address}</p>
                <p>PO Box: {poBox}</p>
                <p>Location: {city}, {country}</p>
              </div>
        </div>
        <div className="cart-details" id="receipt-section">
          <h2 >Order Details:</h2>
          {cart.map((cartItem, index) => (
            <div key={index} className="cart-item">
              <div className="item-info">
                <div className="item-name">{cartItem.item.name}</div>
                <div className="item-meta">
                  <p>Weight: {cartItem.item.weight}</p>
                  <p>Title: {cartItem.item.title}</p>
                </div>
              </div>
              <div className="item-price">
                  x {cartItem.count} <span className="price-separator">S/{cartItem.item.price}</span>
              </div>

            </div>
          ))}
           <div className="cart-summary">
              <p>Subtotal: S/{subTotal}</p>
              <p>Shipping Cost: S/{shipping}</p>
              <p>Total: <strong>S/{total}</strong></p>
            </div>
        </div>

        
      </div>
    </div>
  );
}

export default PaymentComplete;

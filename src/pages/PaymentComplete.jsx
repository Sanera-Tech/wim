import React from 'react';
import '../styles/PaymentComplete.css';

const PaymentComplete = ({ trackingId, receiptUrl }) => {
  return (
    <div className="payment-complete-container">
      <h2>Payment Complete</h2>
      <div className="order-details">
        <p>Order Tracking ID: <strong>{trackingId}</strong></p>
        <p>Receipt: <a href={receiptUrl} target="_blank" rel="noopener noreferrer">View Receipt</a></p>
      </div>
    </div>
  );
}

export default PaymentComplete;

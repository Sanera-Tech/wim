import React from 'react';
import '../styles/PaymentFailed.css';
import { useNavigate } from 'react-router-dom';

const PaymentAwait = () => {
  const navigate = useNavigate();

  const getCurrentDateTimeGMT = () => {
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false,
      timeZone: 'GMT'
    };
    return new Date().toLocaleString('en-US', options);
  };

  return (
    <div className="payment-failed-container">
      <h1 className="payment-failed-header">Awaiting Payment Approval</h1>
      <div className="payment-failed-details">
        <h3>Payment Review - 201</h3>
        <p>Your payment is pending approval. Please try again or contact our support team for assistance.</p>
        <p>Transaction ID: #123456</p>
        <p>Date: {getCurrentDateTimeGMT()} GMT</p>
      </div>
      <button className="back-to-home-button" onClick={() => { navigate('/order') }}>
        Back to Checkout
      </button>
    </div>
  );
};

export default PaymentAwait;

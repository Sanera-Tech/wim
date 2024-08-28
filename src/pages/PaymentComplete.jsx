import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router
import '../styles/PaymentComplete.css';
import { useCart } from '../contexts/CartContext';

const PaymentComplete = () => {
  const {
    setCart,
  } = useCart();
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
  useEffect(() => {
    // Clear the cart
    setCart([]);
  }, []); // Empty dependency array means this runs only once after the initial render

  return (
    <div className="payment-complete-container">
      <h1>Pago Completado</h1>
      
      <div className="order-details">
        <p>ID de Seguimiento de Pedido: <strong>{trackingId}</strong></p>
        <button className="print-button" onClick={handlePrint}>Imprime tu Recibo</button>
        <p>¡Tu pedido ha sido realizado con éxito! Te hemos enviado un correo electrónico de confirmación con los detalles de tu compra. Si no lo encuentras en tu bandeja de entrada, no olvides revisar tu carpeta de spam o correo no deseado.</p>
        <p>Gracias por elegirnos para acompañarte en tus #momentosWIMdeldía. Para asegurarte de que tienes todos los detalles necesarios, guarda una copia de tu recibo descargándolo o tomando una captura de pantalla. ¡No te olvides de mantener tu número de seguimiento para futuras referencias!</p>
        <p>Si tienes alguna pregunta o necesitas más asistencia, no dudes en contactarnos. Estamos aquí para ayudarte a disfrutar de lo mejor en nutrición, con opciones saludables y deliciosas para esos momentos del #quécomo.</p>

        <div className="customer-info">
              <div className="customer-info-block">
                <h2 className='customer-title'>Detalles del Cliente:</h2>
                  <p>Nombre: {first_name} {last_name}</p>
                  <p>Teléfono: {phone_number}</p>
                  <p>Correo Electrónico: {email}</p>
              </div>
              
              <div className="customer-info-block">
                <h2 className='customer-title'>Información de Facturación:</h2>  
                <p>Dirección: {address}</p>
                <p>PO Box: {poBox}</p>
                <p>Ubicación: {city}, {country}</p>
              </div>
        </div>
        <div className="cart-details" id="receipt-section">
          <h2 >Detalles del Pedido:</h2>
          {cart.map((cartItem, index) => (
            <div key={index} className="cart-item">
              <div className="item-info">
                <div className="item-name">{cartItem.item.name}</div>
                <div className="item-meta">
                  <p>Peso: {cartItem.item.weight}</p>
                  <p>Nombre: {cartItem.item.title}</p>
                </div>
              </div>
              <div className="item-price">
                  x {cartItem.count} <span className="price-separator">S/{cartItem.item.price}</span>
              </div>

            </div>
          ))}
           <div className="cart-summary">
              <p>Subtotal: S/{subTotal}</p>
              <p>Costo de Envío: S/{shipping}</p>
              <p>Total: <strong>S/{total}</strong></p>
            </div>
        </div>

        
      </div>
    </div>
  );
}

export default PaymentComplete;

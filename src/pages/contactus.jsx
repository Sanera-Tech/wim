import React, { useState } from "react";
import "../styles/contact/ContactUs.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FadeInObserver from "../components/general/FadeInObserver";

const ContactUs = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("product");
  const [submitMessage, setSubmitMessage] = useState("");
  const endpoint =
    "https://w6e3ol5nlnx5zov7ed5nmxv7la0felyk.lambda-url.eu-north-1.on.aws/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { first_name, last_name, email, phone_number, message, subject };

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setSubject("");

    const fetchPromise = fetch(endpoint, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
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
    <div className="contact-container">
      <div className="header">
        {/* <img src="car.jpg" alt="Quest Products" className="header-image" /> */}
        <h1 className="main-title">CONTÁCTANOS</h1>
      </div>
      <div className="content">
        <div className="left-panel">
        <FadeInObserver>
          <h2>ESTAMOS AQUI PARA TI</h2>
          <p>
          Preguntas o comentarios? Comunícate con nosotros. Nos encanta escuchar a la comunidad WIM.
          </p>
          <div className="contact-methods">
            <a href="https://wa.me/+51956249586" target="_blank" className="contact-button whatsapp">
              <img
                src="social-media-icons/whatsapp.png"
                alt="WhatsApp Logo"
                className="contact-icon"
              />{" "}
              Whatsapp
            </a>
            <a
              href="https://instagram.com/wimnutrition"
              target="_blank"
              className="contact-button instagram"
            >
              <img
                src="social-media-icons/instagram.png"
                alt="Instagram Logo"
                className="contact-icon"
              />{" "}
              Instagram
            </a>
            <a
              href="mailto:wimnutritionsoporte@gmail.com"
              className="contact-button email"
            >
              <img
                src="social-media-icons/email.png"
                alt="Email Logo"
                className="contact-icon"
              />{" "}
              Email
            </a>
          </div>
          <div className="img_and_mail">
            <div className="image-section">
              <img src="/exercise.png"></img>
            </div>
          </div>
          </FadeInObserver>
        </div>
        <div className="right-panel">
        <FadeInObserver>
          <h2>ENVÍANOS UN MENSAJE</h2>

          <form className="contact-form" action={endpoint} onSubmit={handleSubmit} method="POST">
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
                <input type="text" id="last-name" name="last-name" value={last_name} onChange={(e) => setLastName(e.target.value)}></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email: *</label>
                <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input type="tel" id="phone" name="phone" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto: *</label>
              <select id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required>
                <option value="product">Preguntas/Comentarios relacionados al producto</option>
                <option value="support">Preguntas/Comentarios relacionados al envío</option>
                <option value="general">Preguntas/Comentarios en general</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" >Mensaje: *</label>
              <textarea
                type="text"
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>
          {submitMessage && <p>{submitMessage}</p>}
          </FadeInObserver>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

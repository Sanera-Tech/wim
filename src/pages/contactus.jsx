import React from "react";
import "../styles/contact/ContactUs.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="header">
        {/* <img src="car.jpg" alt="Quest Products" className="header-image" /> */}
        <h1 className="main-title">CONTACT US</h1>
      </div>
      <div className="content">
        <div className="left-panel">
          <h2>WE ARE HERE TO HELP YOU ON YOUR QUEST!</h2>
          <p>
            Questions or comments? Reach out and let us know! We love hearing
            from the Quest community.
          </p>
          <div className="contact-methods">
          <a href="https://whatsapp.com/" className="contact-button whatsapp">
              <img src="social-media-icons/whatsapp.png" alt="WhatsApp Logo" className="contact-icon" /> Whatsapp
          </a>
          <a href="https://instagram.com" className="contact-button phone">
              <img src="social-media-icons/instagram.png" alt="Instagram Logo" className="contact-icon" /> Instagram
          </a>
          <a href="mailto:example@example.com" className="contact-button email">
              <img src="social-media-icons/email.png" alt="Email Logo" className="contact-icon" /> Email
          </a>
        </div>
        <div className="image-section">
          <img src="exercise.png"></img>
        </div>

          <div className="extra-methods">
            <h3>MAIL US</h3>
            <p>Quest Nutrition, LLC</p>
            <p>Attn: Consumer Engagement</p>
            <p>777 S Aviation Blvd. Ste.100</p>
            <p>El Segundo, CA, 90245</p>
          </div>
        </div>
        <div className="right-panel">
          <h2>MESSAGE US</h2>
          
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name: *</label>
                <input type="text" id="first-name" name="first-name" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" name="last-name"></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email: *</label>
                <input type="email" id="email" name="email" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject: *</label>
              <select id="subject" name="subject" required>
                <option value="product">Product Inquiry</option>
                <option value="support">Support Request</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: *</label>
              <textarea type="text" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;

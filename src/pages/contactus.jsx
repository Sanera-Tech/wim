import React from "react";
import "../styles/ContactUs.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="header">
        <img src="car.jpg" alt="Quest Products" className="header-image" />
        <h1>CONTACT US</h1>
      </div>
      <div className="content">
        <div className="left-panel">
          <h2>WE ARE HERE TO HELP YOU ON YOUR QUEST!</h2>
          <p>
            Questions or comments? Reach out and let us know! We love hearing
            from the Quest community.
          </p>
          <div className="contact-methods">
            <button className="contact-button whatsapp">
              <i className="fa fa-whatsapp"></i> Whatsapp
            </button>
            <button className="contact-button phone">
              <i className="fa fa-phone"></i> Phone
            </button>
            <button className="contact-button email">
              <i className="fa fa-instagram"></i> Instagram
            </button>
          </div>
        </div>
        <div className="right-panel">
          <h2>MESSAGE US</h2>
          <p>
            Select the appropriate subject below and fill out the inquiry form
            so we can get back to you quickly.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <select id="subject" name="subject">
                <option value="product">Product Inquiry</option>
                <option value="support">Support Request</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
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

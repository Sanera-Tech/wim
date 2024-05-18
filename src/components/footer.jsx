import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="additional-footer-info">
        <span>
          <img src="/logo.png" altenative="logo-image"></img>
          <h4>Address Line 1</h4>
          <h4>Address Line 2, City, Zip</h4>
          <a href="/returns-warranty"> Become a partner</a>
          <div>
            <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#6B6D76" stroke-width="1.5"></rect>
              <circle cx="18" cy="6" r="1" fill="#6B6D76"></circle>
              <circle cx="12" cy="12" r="5" stroke="#6B6D76" stroke-width="1.5"></circle>
            </svg></a>
          </div>
        </span>
        <span>
          <h4>Quienes somos & Ayuda</h4>
          <div>
            <a href="/terms-and-conditions">Nuestra Historia</a>
          </div>
          <div>
            <a href="/returns-warranty"> Soporte</a>
          </div>
        </span>
      </div>
      <hr className="line-break"></hr>
      <div className="additional-footer-info">
        <span>
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms-and-conditions"> Terms and Conditions</a> |
          <a href="/returns-warranty"> Returns & Warranty</a>
        </span>
        <span>
          Copyright © {new Date().getFullYear()} Company Name. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

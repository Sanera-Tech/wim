import React from 'react';
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
    <div className='additional-footer-info'>
        <span>
            <img src="logo.png" altenative="logo-image"></img>
            <h4>Address Line 1</h4> 
            <h4>Address Line 2, City, Zip</h4> 
            <a href="/returns-warranty"> Become a partner</a>
        </span>
        <span>
            <h4>About Us & Help</h4> 
            <a href="/terms-and-conditions">Our Story</a> 
            <a href="/returns-warranty"> Support</a>
        </span>
    </div>
    <hr className="line-break"></hr>
      <div className='additional-footer-info'>
        <span>
            <a href="/privacy-policy">Privacy Policy</a> |
            <a href="/terms-and-conditions"> Terms and Conditions</a> |
            <a href="/returns-warranty"> Returns & Warranty</a>
        </span>
        <span>Copyright © {new Date().getFullYear()} Company Name. All rights reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;
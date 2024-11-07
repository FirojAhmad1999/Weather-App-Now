import React from 'react';
import "../assets/footer.css";

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p><b>FIROJ AHMAD</b> ❤️</p>
          <p>Email: <a href="mailto:firojnitinas@gmail.com">firojnitinas@gmail.com</a></p>
          <p>Mobile: <a href="tel:+919554179141">+91 9554179141</a></p>
          <p>Thank you for visiting!</p>
        </div>
        <div className="footer-right">
          <p>&copy; {currentDate}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

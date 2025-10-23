import React from "react";
import "./Footer.scss";
import logo from "./assets/logo.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h2>About Masiyanda Guest House</h2>
        <p>
          At <strong>Masiyanda Guest House</strong>, we offer comfort,
          tranquility, and a touch of elegance. Nestled in a peaceful area, our
          rooms are designed to make you feel at home — whether you’re here for
          business, leisure, or a weekend getaway.
        </p>
      </div>

      <div className="footer-logo">
        <img src={logo} alt="Masiyanda Guest House Logo" />
      </div>

      <div className="footer-info">
        <p>📍 45 Palm Street, Alex, South Africa</p>
        <p>📞 +27 71 234 5678 | ✉️ info@masiyanda.co.za</p>
        <p>© {new Date().getFullYear()} Masiyanda Guest House — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

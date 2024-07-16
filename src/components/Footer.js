import React from "react";
import "./Footer.css";

import { FaInstagram, FaTwitter, FaGoogle, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterSection className="SSB" title="Semarang Siaga Banjir" />
        <div className="footer-info">
          <a
            href="tel:701-931-6988"
            className="contact-icon"
            aria-label="Call Center"
          >
            <FaPhoneAlt />
          </a>
          <div className="footer-social-media">
            <a
              href="https://www.instagram.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              className="social-icon"
              aria-label="X (Twitter)"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:SemarangSB@gmail.com"
              className="social-icon"
              aria-label="Gmail"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Semarang Siaga Banjir © Copyright.</p>
      </div>
    </footer>
  );
}

function FooterSection({ className, title }) {
  return (
    <div className={`footer-section ${className}`}>
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default Footer;

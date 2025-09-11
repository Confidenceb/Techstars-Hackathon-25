import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + short description */}
        <div className="footer-col">
          <h2 className="footer-logo">TechStars</h2>
          <p className="footer-desc">
            Building smart solutions for everyday problems. Hackathon 2025 🚀
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact + Socials */}
        <div className="footer-col">
          <h3>FAQ</h3>
          <ul>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Referral Policy</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
        {/* Column 3: Contact + Socials */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: team@techstars.com</p>
          <p>Phone: +234 813 000 0000</p>
          <div className="footer-socials">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>© 2025 TechStars Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "../styles/Footer.css"; // Custom styles
import admin from "../images/ajith.jpg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-section admin-section">
          <h3>OUR Admin</h3>
          <img src={admin} alt="Mr. J.P. Ajith Samuel" className="admin-photo circular" />
          <p>Mr. J.P. Ajith Samuel (Admin)</p>
          <p>Business Man, Madurai.</p>
        </div>

        <div className="footer-container">
          <div className="footer-section">
            <h3>Address</h3>
            <p>No.61, P & T Nagar Main Road, (opp.SBI Bank) Madurai-625017.</p>
            <p>
              Call: <a href="tel:+919597616250">+91 9597616250</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:kingdomsfinancial12022@gmail.com">
                kingdomsfinancial12022@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Info</h3>
            <p>
              We blend advanced analytics with personalized advice to craft
              investment portfolios tailored to your unique financial goals.
            </p>
          </div>
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
          </div>
          <div className="footer-section subscribe-section">
            <h3>Subscribe</h3>
            <div className="subscribe">
              <input type="email" placeholder="Enter email" />
              <button className="btn btn-info">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved By Kingdoms Financial.</p>
      </div>
    </div>
  );
}

export default Footer;

// Admin.jsx
import React from "react";
import "../styles/Admin.css"; // New CSS file for Admin styles
import adminImage from "../images/ajith.jpg"; // Path to admin image

function Admin() {
  return (
    <div className="admin-container">
      <h3 className="admin-title">
        OUR <span className="highlighted-text">Admin</span>
      </h3>
      <img
        src={adminImage}
        alt="Mr. J.P. Ajith Samuel"
        className="admin-image"
      />
      <p className="admin-name">Mr. J.P. Ajith Samuel (Admin)</p>
      <p className="admin-role">Business Man, Madurai.</p>
    </div>
  );
}

export default Admin;

// Profile.jsx
import React from "react";
import "../styles/Profile.css"; // New CSS file for Profile styles
import profileImage from "../images/ajith.jpg"; // Path to profile image

function Profile() {
  return (
    <div className="profile-container">
      <h3 className="profile-title">
        OUR <span className="highlighted-text">Profile</span>
      </h3>
      <img
        src={profileImage}
        alt="Mr. J.P. Ajith Samuel"
        className="profile-image"
      />
      <p className="profile-name">Mr. J.P. Ajith Samuel (Profile)</p>
      <p className="profile-role">Business Man, Madurai.</p>
    </div>
  );
}

export default Profile;

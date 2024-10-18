import React from 'react';
import '../styles/About.css'; // Ensure this path points to the correct CSS file
import aboutImage from '../images/About.png'; // Update with your actual image path

function About() {
  return (
    <div id="about" className="about-wrapper">
      <div className="about-container">
        <h2 className="about-title">About <span className='about-light-blue'> Us</span></h2>
        <p className="about-description">
          We simplify financial planning with transparent, expert guidance and personalized solutions to help you achieve your goals and secure your future.
        </p>

        <div className="about-content">
          <img src={aboutImage} alt="About Us" className="about-image" />
          <div className="about-text">
            <h2 className="about-subtitle">We Are KINGDOMS FINANCIAL</h2>
            <p className="about-description">
              We believe in empowering individuals and businesses with the financial knowledge and tools they need to achieve their goals and secure their futures. Our mission is to provide comprehensive, transparent, and personalized financial services tailored to your unique needs.
            </p>
            <button className="btn btn-info read-more-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

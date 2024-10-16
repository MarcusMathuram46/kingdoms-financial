import React from 'react';
import '../styles/About.css'; // Make sure to create this CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        We simplify financial planning with transparent, expert guidance and personalized solutions to help you achieve your goals and secure your future.
      </p>
      <h2 className="about-title">We Are KINGDOMS FINANCIAL</h2>
      <p className="about-description">
        We believe in empowering individuals and businesses with the financial knowledge and tools they need to achieve their goals and secure their futures. Our mission is to provide comprehensive, transparent, and personalized financial services tailored to your unique needs.
      </p>
      <p className="about-description">
        Whether you’re seeking insurance, mutual funds, or expert financial advice, we are here to guide you every step of the way. Our team of experienced professionals is dedicated to helping you navigate the complexities of financial planning and investment.
      </p>
      <p className="about-description">
        At KINGDOMS FINANCIAL, we prioritize transparency and trust. We strive to build lasting relationships with our clients, ensuring you always have access to the information and support you need.
      </p>
      <button className="btn btn-info read-more-button">Read More</button>
    </div>
  );
}

export default About;

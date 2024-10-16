import React from 'react';
import '../styles/Why.css'; // Assuming you will create a CSS file for styling

function Why() {
  return (
    <div className="why-container">
      <h2 className="why-title">Why Choose Us</h2>
      
      <div className="why-section">
        <h3>Expert Management</h3>
        <p>
          Our expert management team combines deep financial knowledge with strategic insight to enhance your investments. We offer tailored solutions designed to maximize growth and manage risk effectively. Trust our seasoned professionals to guide you through complex financial landscapes. Achieve your goals with confidence through our expert management services.
        </p>
      </div>
      
      <div className="why-section">
        <h3>Secure Investment</h3>
        <p>
          Secure Investment ensures the safety and stability of your financial assets with our robust risk management strategies. Our team utilizes advanced techniques and thorough analysis to protect your investments from volatility. Trust in our commitment to safeguarding your wealth while aiming for steady growth. Experience peace of mind knowing your financial future is in secure hands.
        </p>
      </div>
      
      <div className="why-section">
        <h3>Instant Trading</h3>
        <p>
          Instant Trading offers real-time access to financial markets with rapid execution of trades. Our platform ensures you can act swiftly on opportunities and stay ahead of market trends. Benefit from seamless transactions and up-to-the-minute updates for efficient decision-making. Experience the convenience of immediate trading and take control of your financial strategy.
        </p>
      </div>
      
      <div className="why-section">
        <h3>Happy Customers</h3>
        <p>
          Happy Customers are the cornerstone of our success, reflecting the excellence of our services. We prioritize exceptional support and personalized solutions to ensure complete satisfaction. Our commitment to understanding and meeting your needs fosters lasting positive experiences. Join the many who have found success and contentment with our dedicated approach.
        </p>
      </div>
      
      <div className="read-more">
        <a href="#more" className="btn btn-info">Read More</a>
      </div>
    </div>
  );
}

export default Why;

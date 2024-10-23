import React from 'react';
import '../styles/Why.css';
import expertManagementImage from '../images/Why-1.png';
import secureInvestmentImage from '../images/Why-2.png';
import instantTradingImage from '../images/Why-3.png';
import happyCustomersImage from '../images/Why-4.png';

function Why() {
  return (
    <div className='bg-white'>
      <div id='why-us' className="why-container">
        <h2 className="why-title">Why Choose <span className='why-light-blue'>Us</span></h2>
        <div className="why-sections">
          <div className="why-section">
            <div className="circle">
              <img src={expertManagementImage} alt="Expert Management" className="circle-image" />
            </div>
            <h3>Expert Management</h3>
            <p>
              Our expert management team combines deep financial knowledge with strategic insight to enhance your investments. We offer tailored solutions designed to maximize growth and manage risk effectively. Trust our seasoned professionals to guide you through complex financial landscapes. Achieve your goals with confidence through our expert management services.
            </p>
          </div>

          <div className="why-section">
            <div className="circle">
              <img src={secureInvestmentImage} alt="Secure Investment" className="circle-image" />
            </div>
            <h3>Secure Investment</h3>
            <p>
              Secure Investment ensures the safety and stability of your financial assets with our robust risk management strategies. Our team utilizes advanced techniques and thorough analysis to protect your investments from volatility. Trust in our commitment to safeguarding your wealth while aiming for steady growth. Experience peace of mind knowing your financial future is in secure hands.
            </p>
          </div>

          <div className="why-section">
            <div className="circle">
              <img src={instantTradingImage} alt="Instant Trading" className="circle-image" />
            </div>
            <h3>Instant Trading</h3>
            <p>
              Instant Trading offers real-time access to financial markets with rapid execution of trades. Our platform ensures you can act swiftly on opportunities and stay ahead of market trends. Benefit from seamless transactions and up-to-the-minute updates for efficient decision-making. Experience the convenience of immediate trading and take control of your financial strategy.
            </p>
          </div>

          <div className="why-section">
            <div className="circle">
              <img src={happyCustomersImage} alt="Happy Customers" className="circle-image" />
            </div>
            <h3>Happy Customers</h3>
            <p>
              Happy Customers are the cornerstone of our success, reflecting the excellence of our services. We prioritize exceptional support and personalized solutions to ensure complete satisfaction. Our commitment to understanding and meeting your needs fosters lasting positive experiences. Join the many who have found success and contentment with our dedicated approach.
            </p>
          </div>
        </div>

        <div className="read-more">
          <a href="#more" className="btn btn-info">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Why;

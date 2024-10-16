import React from 'react';
import '../styles/Services.css'; // Assuming you will create a CSS file for styling

function Services() {
  return (
    <div id='services' className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        Empowering your financial future with expert guidance, innovative solutions, and personalized service.
      </p>

      <div className="service-item">
        <h3>Mutual Funds</h3>
        <p>
          Diversify your investments with our expertly managed mutual funds, designed for growth and tailored to your financial goals.
        </p>
        <a href="#mutual-funds" className="btn btn-info">Read More</a>
      </div>

      <div className="service-item">
        <h3>Fixed Deposits</h3>
        <p>
          Enhance your savings with fixed deposits that offer guaranteed returns and competitive interest rates for financial stability.
        </p>
        <a href="#fixed-deposits" className="btn btn-info">Read More</a>
      </div>

      <div className="service-item">
        <h3>All Types of Insurance</h3>
        <p>
          Safeguard your assets and loved ones with a broad range of insurance options, including health, life, and property coverage.
        </p>
        <a href="#insurance" className="btn btn-info">Read More</a>
      </div>

      <div className="service-item">
        <h3>Stocks and Loans</h3>
        <p>
          Invest in stocks with expert guidance and meet your needs with our flexible loan options.
        </p>
        <a href="#stocks-loans" className="btn btn-info">Read More</a>
      </div>

      <div className="service-item">
        <h3>Real Estate</h3>
        <p>
          Explore valuable real estate opportunities with expert guidance for buying, selling, or investing in property successfully.
        </p>
        <a href="#real-estate" className="btn btn-info">Read More</a>
      </div>

      <div className="service-item">
        <h3>Government Bonds</h3>
        <p>
          Opt for government bonds for secure, stable returns and minimal risk, ensuring steady income with peace of mind.
        </p>
        <a href="#government-bonds" className="btn btn-info">Read More</a>
      </div>

      <div className="view-all">
        <a href="#view-all" className="btn btn-info">View All</a>
      </div>
    </div>
  );
}

export default Services;

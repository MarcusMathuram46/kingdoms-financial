import React from "react";
import "../styles/Services.css"; 
import mutualFundsImage from '../images/mutual-funds.png';
import fixedDepositsImage from '../images/fixed-deposits.png';
import insuranceImage from '../images/insurance.png';
import stocksLoansImage from '../images/stocks-loans.png';
import realEstateImage from '../images/real-estate.png';
import governmentBondsImage from '../images/government-bonds.png';

function Services() {
  return (
    <div id="services" className="services-wrapper">
      <div className="services-container">
        <h2 className="services-title">
          <span className="our-text">Our </span>
          <span className="services-light-blue">Services</span>
        </h2>

        <p className="services-description">
          Empowering your financial future with expert guidance, innovative solutions, and personalized service.
        </p>

        <div className="services-grid">
          {[
            { image: mutualFundsImage, title: "Mutual Funds", description: "Diversify your investments with our expertly managed mutual funds, designed for growth and tailored to your financial goals." },
            { image: fixedDepositsImage, title: "Fixed Deposits", description: "Enhance your savings with fixed deposits that offer guaranteed returns and competitive interest rates for financial stability." },
            { image: insuranceImage, title: "All Types of Insurance", description: "Safeguard your assets and loved ones with a broad range of insurance options, including health, life, and property coverage." },
            { image: stocksLoansImage, title: "Stocks and Loans", description: "Invest in stocks with expert guidance and meet your needs with our flexible loan options." },
            { image: realEstateImage, title: "Real Estate", description: "Explore valuable real estate opportunities with expert guidance for buying, selling, or investing in property successfully." },
            { image: governmentBondsImage, title: "Government Bonds", description: "Opt for government bonds for secure, stable returns and minimal risk, ensuring steady income with peace of mind." }
          ].map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={`#${service.title.replace(/ /g, "-").toLowerCase()}`} className="btn btn-info">Read More</a>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="#view-all" className="btn btn-info">View All</a>
        </div>
      </div>
    </div>
  );
}

export default Services;

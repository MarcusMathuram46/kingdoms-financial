import React from "react";
import "../styles/Services.css";

// Provide default value for services prop
function Services({ services = [] }) {
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
          {services.length === 0 ? (
            <p>No services available at the moment.</p> // Fallback message
          ) : (
            services.map((service, index) => (
              <div className="service-item" key={index}>
                <img src={service.image} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;

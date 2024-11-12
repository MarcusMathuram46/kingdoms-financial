import React from "react";
import "../styles/Services.css";

function Services({ services = [] }) {
  // Debugging to ensure the data type
  console.log("Services prop:", services);

  // Ensure services is an array
  if (!Array.isArray(services)) {
    console.error(
      "Expected services to be an array but received:",
      typeof services
    );
    return <p>Error: Services data is not available</p>;
  }

  return (
    <div id="services" className="services-wrapper">
      <div className="services-container">
        <h2 className="services-title">
          <span className="our-text">Our </span>
          <span className="services-light-blue">Services</span>
        </h2>

        <p className="services-description">
          Empowering your financial future with expert guidance, innovative
          solutions, and personalized service.
        </p>

        <div className="services-grid">
          {services.length === 0 ? (
            <p>No services available at the moment.</p>
          ) : (
            services.map((service, index) => (
              <div className="service-item" key={index}>
                <img
                  // Here, we are using the image in a similar way to Home.jsx
                  src={service.image} 
                  alt={service.title} 
                  className="service-image img-fluid"
                />
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

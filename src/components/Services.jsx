import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "../styles/Services.css";

function Services({ services = [] }) {
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
                  src={service.image}
                  alt={service.title}
                  className="service-image img-fluid"
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                {/* Add the Read More button with navigation */}
                <Link to={`/service-detail/${service._id}`}>
                  <button className="btn btn-primary">Read More</button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;

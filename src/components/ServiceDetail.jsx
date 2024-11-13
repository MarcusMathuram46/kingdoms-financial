import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Services.css";

function ServiceDetail() {
  const { id } = useParams();  // Get the service ID from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the details of the service using the ID from the URL
  const fetchServiceDetail = async () => {
    try {
      // Replace with your actual backend URL
      const response = await axios.get(`http://localhost:5000/api/services/${id}`);
      setService(response.data);  // Set the service data in the state
      setLoading(false);  // Set loading to false once data is fetched
    } catch (err) {
      setError('Error fetching service details');  // Set error if request fails
      setLoading(false);  // Set loading to false even in case of an error
      console.error("Error fetching service details:", err.message);
    }
  };

  useEffect(() => {
    fetchServiceDetail();
  }, [id]);  // Re-fetch data if the service ID changes

  if (loading) {
    return <p>Loading service details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id="services" className="services-wrapper">
      <div className="services-container">
        {/* Display service details if available */}
        {service ? (
          <>
            <h2 className="services-title">
              <span className="our-text">{service.title}</span>
            </h2>
            <p className="services-description">{service.description}</p>

          </>
        ) : (
          <p>No service details available.</p>
        )}
      </div>
    </div>
  );
}

export default ServiceDetail;

{/* <div className="services-grid">
<div className="service-item">
  <img
    src={service.image}
    alt={service.title}
    className="service-image img-fluid"
  />
  <h3>{service.title}</h3>
  <p>{service.fullDescription}</p>

  <h4>Types of {service.title}</h4>
  <ul>
    {service.types && service.types.map((type, index) => (
      <li key={index}>{type}</li>
    ))}
  </ul>
</div>
</div> */}
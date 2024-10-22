import React, { useEffect } from "react";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ advertisements }) {
  useEffect(() => {
    const carouselElement = document.querySelector("#carouselExample");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: "carousel",
      });
    }
  }, [advertisements]); // Trigger effect on advertisement updates

  return (
    <div id="home" className="home-container">
      <div className="carousel-container">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {advertisements.length > 0 ? (
              advertisements.map((ad, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={ad._id}
                >
                  <div className="carousel-content">
                    <h1 className="display-4">{ad.title}</h1>
                    <p className="lead">{ad.description}</p>
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="carousel-image img-fluid"
                    />
                    <button
                      className="btn btn-info carousel-button"
                      aria-label={`Read more about ${ad.title}`}
                      onClick={() => console.log(`Clicked on: ${ad.title}`)} // Replace with actual navigation logic
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="carousel-item active">
                <div className="carousel-content">
                  <h1 className="display-4">No Advertisements Available</h1>
                  <p className="lead">
                    Please add advertisements in the admin panel.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Circle buttons for slide navigation */}
          <div className="carousel-indicators">
            {advertisements.map((_, index) => (
              <button
                key={index}
                data-bs-target="#carouselExample"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`} // Add aria-label for accessibility
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Right side: dynamically animated background image */}
      <div className="background-image"></div>
    </div>
  );
}

export default Home;

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
  }, [advertisements]);

  return (
    <div className="homes">
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
                    <div className="carousel-content d-flex align-items-center">
                      <div className="text-container">
                        <h1 className="display-4 text-black">{ad.title}</h1>
                        <p className="lead">{ad.description}</p>
                        <button className="carousel-button">Read More</button>
                      </div>
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="carousel-image img-fluid"
                      />
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
            <div className="carousel-indicators">
              {advertisements.map((_, index) => (
                <button
                  key={index}
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

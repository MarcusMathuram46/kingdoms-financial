import React, { useEffect } from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExample');
    if (carouselElement) {
      // Initialize the carousel with Bootstrap
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000, // 5 seconds interval
        ride: 'carousel', // Automatically cycle
      });
    }
  }, []);

  return (
    <div id='home' className="home-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-content d-flex flex-column justify-content-center align-items-start">
              <h2 className="display-4 fw-bold">Comprehensive Investment Solutions</h2>
              <p className="lead">
                Explore diverse investment opportunities with our expert guidance.
              </p>
              <button className="btn btn-info btn-lg text-white">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-content d-flex flex-column justify-content-center align-items-start">
              <h2 className="display-4 fw-bold">Flexible Financing Options</h2>
              <p className="lead">
                Access a range of loan options designed to fit your personal and business needs.
              </p>
              <button className="btn btn-info btn-lg text-white">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-content d-flex flex-column justify-content-center align-items-start">
              <h2 className="display-4 fw-bold">Complete Insurance Coverage</h2>
              <p className="lead">
                Protect what matters most with our comprehensive insurance solutions.
              </p>
              <button className="btn btn-info btn-lg text-white">Read More</button>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;

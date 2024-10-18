import React, { useEffect } from 'react';
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExample');
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <div id="home" className="home-container">
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-content">
                <h2 className="display-4">Comprehensive Investment Solutions</h2>
                <p className="lead">Explore diverse investment opportunities with our expert guidance.</p>
                <button className="btn btn-info carousel-button">Read More</button>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-content">
                <h2 className="display-4">Flexible Financing Options</h2>
                <p className="lead">Access a range of loan options designed to fit your personal and business needs.</p>
                <button className="btn btn-info carousel-button">Read More</button>
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-content">
                <h2 className="display-4">Complete Insurance Coverage</h2>
                <p className="lead">Protect what matters most with our comprehensive insurance solutions.</p>
                <button className="btn btn-info carousel-button">Read More</button>
              </div>
            </div>
          </div>

          {/* Circle buttons for slide navigation */}
          <div className="carousel-indicators">
            <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
            <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
            <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
          </div>
        </div>
      </div>

      {/* Right side: dynamically animated background image */}
      <div className="background-image"></div>
    </div>
  );
}

export default Home;

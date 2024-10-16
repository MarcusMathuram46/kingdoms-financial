import React from 'react';
import '../styles/Home.css'; // Make sure to have your CSS file imported
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home-container">
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {/* First slide */}
          <div className="carousel-item active">
            <div className="carousel-content d-flex flex-column justify-content-center align-items-start">
              <h2 className="display-4 fw-bold">Comprehensive Investment Solutions</h2>
              <p className="lead">
              Explore diverse investment opportunities with our expert guidance. From stocks and mutual funds to government bonds, we offer tailored strategies to grow your wealth and secure your financial future.
              </p>
              <button className="btn btn-info btn-lg text-white">Read More</button>
            </div>
          </div>

          {/* Second slide */}
          <div className="carousel-item">
            <div className="carousel-content d-flex flex-column justify-content-center align-items-start">
              <h2 className="display-4 fw-bold"> Flexible Financing Options
              </h2>
              <p className="lead">
              Access a range of loan options designed to fit your personal and business needs. Whether you're looking for a home loan, personal loan, or business financing, we provide flexible terms to help you achieve your goals.
              </p>
              <button className="btn btn-info btn-lg text-white">Read More</button>
            </div>
          </div>

          {/* Third slide */}
          <div className="carousel-item">
            <div className="carousel-content d-flex flex-column justify-content-center align-items-start">
              <h2 className="display-4 fw-bold">Complete Insurance Coverage</h2>
              <p className="lead">
              Protect what matters most with our comprehensive insurance solutions. From health and life insurance to property and auto coverage, we offer plans to safeguard your assets and provide peace of mind.
              </p>
              <button className="btn btn-info btn-lg text-white">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;

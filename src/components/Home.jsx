import React from 'react'

function Home() {
    
  return (
    <div>
        <header className="d-flex justify-content-between align-items-center p-3">
        <h1 className="fs-5 fw-bold text-white">KINGDOMS FINANCIAL</h1>
      </header>
      <main className="text-center mt-5 px-3">
        <h2 className="display-4 fw-bold">COMPLETE INSURANCE COVERAGE</h2>
        <p className="lead">
          Protect what matters most with our comprehensive insurance solutions.
          From health and life insurance to property and auto coverage, we offer
          plans to safeguard your assets and provide peace of mind.
        </p>
        <button className="btn btn-info btn-lg text-white">Read More</button>
      </main>
    </div>
  )
}

export default Home

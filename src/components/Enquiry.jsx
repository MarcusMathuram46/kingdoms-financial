// Enquiry.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Enquiry.css';

function Enquiry({ fetchEnquiries }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/enquiries", {
        name, email, mobile, subject, address, message
      });
  
      alert("Enquiry submitted successfully");
  
      // Clear form fields after submission
      setName('');
      setEmail('');
      setMobile('');
      setSubject('');
      setAddress('');
      setMessage('');
  
      // Fetch updated enquiries after submitting
      fetchEnquiries();
    } catch (error) {
      if (error.response && error.response.data) {
        // Check if it's a duplicate enquiry error
        if (error.response.data.message === 'Enquiry with this name and email already exists') {
          alert("You have already submitted an enquiry with this name and email. Please contact support if you need assistance.");
        } else {
          alert(`Failed to submit enquiry: ${error.response.data.message}`);
        }
      } else {
        console.error("Error submitting enquiry:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  
  
  
  return (
    <div className='bg-white'>
      <div id='enquiry' className="enquiry-container">
        <h2 className="enquiry-title">Get in Touch</h2>
        <p className="enquiry-description">
          If you have any queries, please contact us. We’d love to hear from you! Please fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <div className="enquiry-content">
          <div className="enquiry-form-container">
            <form onSubmit={handleSubmit} className="enquiry-form">
              {/* Form fields */}
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your Email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  placeholder="Your Number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="form-control form-select form-select-lg mb-3"
                >
                  <option value="" disabled>Select type</option>
                  <option value="Mutual-Fund">Mutual Funds</option>
                  <option value="Fixed-Deposit">Fixed Deposits</option>
                  <option value="All-Types-of-Insurance">All Types of Insurance</option>
                  <option value="Stocks-and-Loans">Stocks and Loans</option>
                  <option value="Real-Estate">Real Estate</option>
                  <option value="Government-Bonds">Government Bonds</option>
                </select>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your Address"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a message here"
                  required
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-info btn-block">Send Message</button>
            </form>
          </div>

          {/* Map Container */}
          <div className="map-container">
            <h3 className="map-title">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d503193.82865241426!2d78.222525!3d9.833413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1729074658223!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;

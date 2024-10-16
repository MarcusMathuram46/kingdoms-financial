import React, { useState } from 'react';
import '../styles/Enquiry.css'; // Assuming you will create a CSS file for styling

function Enquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to an API)
    console.log({ name, email, mobile, subject, address, message });
    // Reset the form after submission (optional)
    setName('');
    setEmail('');
    setMobile('');
    setSubject('');
    setAddress('');
    setMessage('');
  };

  return (
    <div id='enquiry' className="enquiry-container">
      <h2 className="enquiry-title">Get in Touch</h2>
      <p className="enquiry-description">
        If You Have Any Query, Please Contact Us. We’d love to hear from you! Please fill out the form below, and our team will get back to you as soon as possible.
      </p>
      
      <form onSubmit={handleSubmit} className="enquiry-form">
        <div className="form-group">
          <label>Your Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Your Name" 
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
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="">Select type</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Support">Support</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Your Address" 
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Leave a message here" 
            required 
          />
        </div>

        <button type="submit" className="btn btn-info">Submit</button>
      </form>

      {/* Google Maps iframe */}
      <div className="map-container">
        <h3 className="map-title">Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d503193.82865241426!2d78.222525!3d9.833413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1729074658223!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Enquiry;

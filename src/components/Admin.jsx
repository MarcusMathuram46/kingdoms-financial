import React, { useState } from 'react';
import '../styles/Admin.css';

function Admin({ onAddAdvertisement }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAd = { title, image, description };
    onAddAdvertisement(newAd); // Pass the new advertisement to the parent
    setTitle('');
    setImage('');
    setDescription('');
  };

  return (
    <div>
      <h1>Hi I am Marcus, Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input 
            type="text" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Advertisement</button>
      </form>
    </div>
  );
}

export default Admin;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin({ onAddAdvertisement }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null); // Change to null for file input
    const [description, setDescription] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Set the selected file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // First, upload the image
            const formData = new FormData();
            formData.append('image', image); // Append the image file

            const uploadResponse = await axios.post('https://kingdoms-financial-be.onrender.com/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imageUrl = uploadResponse.data.imageUrl; // Get the image URL from the response

            // Now create the advertisement with the uploaded image URL
            const adResponse = await axios.post('https://kingdoms-financial-be.onrender.com/api/advertisements', { 
                title, 
                image: imageUrl, // Use the uploaded image URL
                description 
            });

            // Call the onAddAdvertisement prop to update the state in App
            onAddAdvertisement(adResponse.data);

            // Reset form after submission
            setTitle('');
            setImage(null); // Reset the image input
            setDescription('');
            alert("Advertisement added successfully!");
        } catch (error) {
            console.error("Error adding advertisement:", error);
        }
    };

    return (
        <div className="admin-container">
            <h1>Welcome, Admin!</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="input-group">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="input-group">
                    <input type="file" accept="image/*" onChange={handleImageChange} required /> {/* File input for images */}
                </div>
                <div className="input-group">
                    <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <button type="submit" className="submit-button">Add Advertisement</button>
            </form>
        </div>
    );
}

export default Admin;

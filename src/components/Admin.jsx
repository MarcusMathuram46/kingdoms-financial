import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin({ onAddAdvertisement }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Loader state
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2000000) { // Example: limit file size to 2MB
            alert("File size should be less than 2MB");
            return;
        }
        setImage(file);
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Start loader
        setErrorMessage(''); // Reset error message

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

            // Reset form after successful submission
            setTitle('');
            setImage(null);
            setImagePreview(null);
            setDescription('');
            alert("Advertisement added successfully!");
        } catch (error) {
            console.error("Error adding advertisement:", error.response ? error.response.data : error.message);
            setErrorMessage("Failed to add advertisement. Please try again."); // Set error message for UI display
        } finally {
            setIsSubmitting(false); // Stop loader
        }
    };

    // Clean up object URL on unmount
    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    return (
        <div className="admin">
            <div className="admin-container">
                <h1>Welcome, Admin!</h1>
                {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                <form onSubmit={handleSubmit} className="admin-form pt-xl-5">
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                            disabled={isSubmitting} 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange} 
                            required 
                            disabled={isSubmitting} 
                        />
                    </div>
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                    <div className="input-group">
                        <textarea 
                            placeholder="Description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required 
                            disabled={isSubmitting} 
                        />
                    </div>
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            "Add Advertisement"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Admin;

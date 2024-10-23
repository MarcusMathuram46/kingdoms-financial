import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin({ onAddAdvertisement }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Loader state

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
        console.log("Submitting form with title:", title);
        console.log("Image file:", image);

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
            setImagePreview(null); // Reset the image preview
            setDescription('');
            alert("Advertisement added successfully!");
        } catch (error) {
            console.error("Error adding advertisement:", error.response ? error.response.data : error.message); // Log server error response
            alert("Failed to add advertisement. Please try again.");
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
        <div className="admin-container">
            <h1>Welcome, Admin!</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        disabled={isSubmitting} // Disable during submission
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        required 
                        disabled={isSubmitting} // Disable during submission
                    />
                </div>
                {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                <div className="input-group">
                    <textarea 
                        placeholder="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                        disabled={isSubmitting} // Disable during submission
                    />
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add Advertisement"}
                </button>
            </form>
        </div>
    );
}

export default Admin;

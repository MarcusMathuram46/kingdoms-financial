import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

function Admin({ onAddAdvertisement }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [advertisements, setAdvertisements] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchAdvertisements();
    }, []);

    const fetchAdvertisements = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/advertisements');
            setAdvertisements(response.data);
        } catch (error) {
            console.error('Error fetching advertisements:', error.message);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2000000) {
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
        setIsSubmitting(true);
        setErrorMessage('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        try {
            if (isUpdating) {
                await axios.put(`http://localhost:5000/api/advertisements/${updateId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert("Advertisement updated successfully!");
            } else {
                await axios.post('http://localhost:5000/api/advertisements', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert("Advertisement added successfully!");
            }

            resetForm();
            fetchAdvertisements(); // Refresh the advertisement list
        } catch (error) {
            console.error("Error saving advertisement:", error.response ? error.response.data : error.message);
            setErrorMessage("Failed to save advertisement. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setTitle('');
        setImage(null);
        setImagePreview(null);
        setDescription('');
        setIsUpdating(false);
        setUpdateId(null);
    };

    const handleUpdateClick = (ad) => {
        setTitle(ad.title);
        setDescription(ad.description);
        setImagePreview(ad.image);
        setUpdateId(ad._id);
        setIsUpdating(true);
    };

    const handleDeleteClick = async (id) => {
        if (window.confirm("Are you sure you want to delete this advertisement?")) {
            try {
                await axios.delete(`http://localhost:5000/api/advertisements/${id}`);
                alert("Advertisement deleted successfully!");
                fetchAdvertisements(); // Refresh the advertisement list
            } catch (error) {
                console.error("Error deleting advertisement:", error.response ? error.response.data : error.message);
                setErrorMessage("Failed to delete advertisement. Please try again.");
            }
        }
    };

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
                {errorMessage && <div className="error-message">{errorMessage}</div>}
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
                            required={!isUpdating} 
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
                            isUpdating ? "Update Advertisement" : "Add Advertisement"
                        )}
                    </button>
                </form>
                <div className="advertisement-list">
                    {advertisements.map((ad) => (
                        <div key={ad._id} className="advertisement-item">
                            <img src={ad.image} alt={ad.title} className="image-preview" style={{ width: '100px', height: 'auto' }} />
                            <div>
                                <h3>{ad.title}</h3>
                                <p>{ad.description}</p>
                            </div>
                            <div className="advertisement-actions">
                                <button onClick={() => handleUpdateClick(ad)}>Edit</button>
                                <button onClick={() => handleDeleteClick(ad._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;

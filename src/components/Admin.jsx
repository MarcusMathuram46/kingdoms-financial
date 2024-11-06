// Admin.jsx
import React, { useState } from 'react';
import SliderList from './SliderList';
import VisitorList from './VisitorList';
import '../styles/Admin.css';

const Admin = ({ onAddAdvertisement }) => {
    const [activeTab, setActiveTab] = useState('sliderList');

    return (
        <div className="admin-container">
            <h1 className="admin-title">Admin Panel</h1>
            <div className="tabs">
                <button
                    onClick={() => setActiveTab('sliderList')}
                    className={`tab-button ${activeTab === 'sliderList' ? 'active' : ''}`}
                >
                    Slider List
                </button>
                <button
                    onClick={() => setActiveTab('visitorList')}
                    className={`tab-button ${activeTab === 'visitorList' ? 'active' : ''}`}
                >
                    Visitor List
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'sliderList' && <SliderList onAddAdvertisement={onAddAdvertisement} />}
                {activeTab === 'visitorList' && <VisitorList />}
            </div>
        </div>
    );
};

export default Admin;

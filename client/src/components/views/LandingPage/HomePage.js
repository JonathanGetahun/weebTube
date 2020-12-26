import React from 'react';
import LandingPage from './LandingPage';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';

function HomePage() {
    return (
        <div className="Home">
            <Sidebar />
            <LandingPage />
        </div>
    )
}

export default HomePage

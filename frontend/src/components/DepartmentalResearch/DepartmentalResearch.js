import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashboardCard from '../DashboardCard/DashboardCard';
import './DepartmentalResearch.css';

const DepartmentalResearch = () => {
    return (
        <>
        <div className="departmental-research-container">
            <Sidebar />
            <DashboardCard />
        </div>
        </>
    );
};

export default DepartmentalResearch;

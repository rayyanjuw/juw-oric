import React from 'react';
import dashboard_icon from '../../assets/dashboard_icon.png';
import submission_icon from '../../assets/submission_icon.png';
import research_icon from '../../assets/research_icon.png';
import bookmark_icon from '../../assets/bookmark_icon.png';
import download_icon from '../../assets/download_icon.png';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/logo1.png';
import './sidebar.css';
import { Link } from 'react-router-dom';



import { GiGreekTemple } from "react-icons/gi";
import { TiDocumentText } from "react-icons/ti";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsLayoutTextSidebar } from "react-icons/bs";









const Sidebar = () => {
    const sidebarOptionStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    };

    const sideBarData = [
        {
            icon: <GiGreekTemple />,
            name: "Dasboard",
            path: "/dashboard"
        },
        {
            icon: <TiDocumentText />,
            name: "Submission",
            path: "/"
        },
        {
            icon: <IoBriefcaseOutline />,
            name: "Research Portfolio",
            path: "/researchpublication"
        },
        {
            icon: <FaRegBookmark />,
            name: "Department Research Data",
            path: "/"
        },
        {
            icon: <IoCloudDownloadOutline />,
            name: "Downloadable",
            path: "/"
        },
        {
            icon: <BsLayoutTextSidebar />,
            name: "Users & Roles",
            path: "/usermanagement"
        },
    ]

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo1} alt="Logo" />
                {/* <p>ORIC</p> */}
            </div>
            <hr/>
            <div className="sidebar-options">
                {sideBarData?.map((items, i)=> 
            (
                <div  key={i} className=''>
                    <Link className="sidebar-option">
                    {/* <img src={items.icon} alt="Dashboard" style={sidebarOptionStyle} /> */}
                    <div style={sidebarOptionStyle} className="icons-sidebar">{items.icon}</div>
                    <p className=''>{items.name}</p>
                </Link>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Sidebar;



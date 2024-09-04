import React, {useState} from 'react'
import './collaborativeWork.css';
import Sidebar from '../../Sidebar/Sidebar';
import NavBar from '../../shared-components/navbar/NavBar';
import Breadcrumb from '../../shared-components/breadcrumps/BreadCrumps';
import { useLocation } from "react-router-dom";


const CollaborativeWork = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const breadCrumps = [
        {
            label: "Publications of Faculty",
            path: "/departmental-research-data-publications-of-faculty",
        },
        {
            label: "Conferences, Workshops Attended",
            path: "/departmental-research-data-conferences-workshops-attended",
        },
        {
            label: "Collaborative Research/Academic work",
            path: "/departmental-research-data-collaborative-research-academic-work",
        },
        {
            label: "BS/MS/PhD Thesis/Project Details",
            path: "/departmental-research-data-thesis-project-details",
        },
    ];

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    console.log(text);

    return (
        <div className="collaborativework-container">
            <Sidebar />
            <div className="collaborativework">
                <div className="navbar-div">
                    <NavBar />
                </div>
                <div className="collaborativework-card">
                    <h3>Departmental Research Data | Collaborative Research/Academic work</h3>
                    <div className="collaborativework_bred-crumb">
                        <Breadcrumb items={breadCrumps} activePath={currentPath} />
                    </div>
                    <div className='collaborative-content'>
                        <h3>Collaborative Research/Academic work details:</h3>
                        <div className="textarea">
                            <label htmlFor="exampleTextarea">Short summary of the project:</label>
                            <textarea
                                id="exampleTextarea"
                                value={text}
                                onChange={handleChange}
                                rows="2"
                                cols="20"
                            />
                        </div>
                        <div className='collaborative_btn'>
                            <button className="collaborative_button">SAVE</button>
                        </div>
                    </div>
                </div>
                <div className="juw-copyright">
                    <p>© 2024, all rights reserved by Jinnah University for Women.</p>
                </div>
            </div>
        </div>
    )
}


export default CollaborativeWork

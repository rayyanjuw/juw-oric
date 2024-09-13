import React, { useState } from 'react'
import './thesisProjectDetails.css';
import Sidebar from '../../Sidebar/Sidebar';
import NavBar from '../../shared-components/navbar/NavBar';
import Breadcrumb from '../../shared-components/breadcrumps/BreadCrumps';
import { useLocation } from "react-router-dom";




const ThesisProjectDetails = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const ThesisProjectDetail = {
        Title: "",
        StudentName: "",
        PrincipalandCoPrincipalInvestigatorDetails: "",
    }



    const ResearchFundingStatus = {
        FundedornonfundedResearch: "",
        AmountIfFunded: "",
        Sourceoffunding: "",
        DateofFinalReportSubmission: ""
    }



    const [ThesisProject, setThesisProject] = useState(ThesisProjectDetail);
    const [ResearchFunding, setResearchFunding] = useState(ResearchFundingStatus);

    console.log(ThesisProject)
    console.log(ResearchFunding)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setThesisProject((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setResearchFunding((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };



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


    return (
        <div className='thesisprojectdetails-container'>
            <Sidebar />
            <div className='thesisprojectdetails'>
                <div className="thsisproject_navbar-div">
                    <NavBar />
                </div>
                <div className="thesisprojectdetails-card">
                    <h3 className="thesisprojectdetails_heading">
                        Departmental Research Data | Publications of Faculty
                    </h3>
                    <div className="thesisprojectdetails_bred-crumb">
                        <Breadcrumb items={breadCrumps} activePath={currentPath} />
                    </div>
                    <div className='thesisprojectdetails_main_heading'>
                    <h4>BS/MS/PhD thesis/project details:</h4>
                    </div>
                    <div className="thesisprojectdetails_multiInputFields">
                        <div className="thesisprojectdetails_title-input">
                            <label>Title:</label>
                            <input
                                type="text"
                                value={ThesisProjectDetail.Title}
                                name="Title"
                                onChange={handleChange}
                            />
                        </div>


                        <div className="thesisprojectdetails_multiInputFields">
                            <div className="thesisprojectdetails_InputGroup">
                                <label>Student Name:</label>
                                <input
                                    type="text"
                                    value={ThesisProjectDetail.StudentName}
                                    name="StudentName"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="thesisprojectdetails_InputGroup">
                                <label>Principal and Co-Principal Investigator Details:</label>
                                <input
                                    type="text"
                                    value={ThesisProjectDetail.PrincipalandCoPrincipalInvestigatorDetails}
                                    name="PrincipalandCoPrincipalInvestigatorDetails"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <h4 className='thesisprojectdetails_heading2'>Research funding status:</h4>

                        <div className="thesisprojectdetails_four-inputs">
                            <div className="thesisprojectdetails_InputGroup">
                                <label>Funded or non-funded research:</label>
                                <input
                                    type="text"
                                    value={ResearchFundingStatus.FundedornonfundedResearch}
                                    name="StudentName"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="thesisprojectdetails_InputGroup">
                                <label>Amount if funded:</label>
                                <input
                                    type="text"
                                    value={ResearchFundingStatus.AmountIfFunded}
                                    name="PrincipalandCoPrincipalInvestigatorDetails"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="thesisprojectdetails_InputGroup">
                                <label>Source of funding:</label>
                                <input
                                    type="text"
                                    value={ResearchFundingStatus.Sourceoffunding}
                                    name="Sourceoffunding"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="thesisprojectdetails_InputGroup">
                                <label>Date of initiation and submission of final report to BASR:</label>
                                <input
                                    type="text"
                                    value={ResearchFundingStatus.DateofFinalReportSubmission}
                                    name="DateofFinalReportSubmission"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="AIP_save-btn">
                            <button className="AIP_savebut">Save</button>
                        </div>
                    </div>
                </div>
                <div className="juw_copyright">
                    <p>© 2024, all rights reserved by Jinnah University for Women.</p>
                </div>
            </div>
        </div>
    )
}



export default ThesisProjectDetails

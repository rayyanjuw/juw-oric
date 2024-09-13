import React, { useState } from "react";
import "./honorANdAwards.css"
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import NavBar from "../shared-components/navbar/NavBar";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
import { useLocation } from "react-router-dom";

const HonorAndAwards = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();


  const personal_information = {
    AcademicAward1: "AP International Diploma (APID)",
    AcademicAward2: "AP Scholar",
    AcademicAward3: "AP Scholar with Distinction",
    AcademicAward4: "AP Scholar with Honor",
  };

  const professional_information = {
    ProfessionalAward1: "Governor’s Volunteer Award",
    ProfessionalAward2: "National Student Volunteer Award",
    ProfessionalAward3: "President’s Award for Educational Excellence",
    ProfessionalAward4: "President’s National Service Award",
  }



//   const handleEditClick = () => {
//     navigate("/add-personal-info");
//   };

  const breadCrumps = [
    {
      label: " Personal Information",
      path: "/researchportfolio",
    },
    {
      label: "Honor and Awards, Scholarship",
      path: "/honorandawards",
    },
    {
      label: "Membership",
      path: "/membership",
    },
    {
      label: "Publications",
      path: "/viewallpublications",
    },
    {
      label: "Research Grants and Contracts",
      path: "/research-grants-and-contracts",
    },
  ];


  const academic_award_title = [
    "Academic Award 1",
    "Academic Award 2",
    "Academic Award 3",
    "Academic Award 4",
  ]

  const professional_award_title = [
    "Professional Award 1",
    "Professional Award 2",
    "Professional Award 3",
    "Professional Award 4",
  ]

  const handleEditClick = () => {
    navigate("/edit-honorandawards");
  };

  return (
    <div className="honorAndAward-container">
      <Sidebar />
      <div className="honor-and-awards">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="honorAndAward-card">
          <h3 className="honorAndAward_heading">
            Research portfolio | Honor and Awards, Scholarship
          </h3>
          <div className="HA_bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div>
          {/* <div className="bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div> */}
          <hr/>
          <div className="honorAndAward-table">
            <div className="honorAndAward-section">
              <h5 className="awards_heading">
              ACADEMIC AWARDS</h5>
              <table>
                <tbody>
                  {Object.entries(personal_information).map(
                    ([key, value], subIndex) => (
                      <tr key={subIndex}>
                        {/* <td className="key-column">{key}</td> */}
                        <td className="key-column">{academic_award_title[subIndex]}</td>
                        <td className="value-column">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <hr />

              <h5 className="awards_heading">
              PROFESSIONAL AWARDS</h5>
              <table>
                <tbody>
                  {Object.entries(professional_information).map(
                    ([key, value], subIndex) => (
                      <tr key={subIndex}>
                        <td className="key-column">{professional_award_title[subIndex]}</td>
                        <td className="value-column">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>

            </div>
          </div>
          <button
            type="button"
            className="edit_button"
            onClick={handleEditClick}
          >
            EDIT
          </button>
        </div>
        <div className="juw-copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default HonorAndAwards;

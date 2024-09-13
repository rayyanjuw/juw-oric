import React, { useState } from "react";
import "./researchportfolio.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import NavBar from "../shared-components/navbar/NavBar";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
import { useLocation } from "react-router-dom";

const ResearchPortfolio = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const personal_information = {
    Name: "Administrator",
    Email: "oricadmin@juw.edu.pk",
    Address: "5c Nazimabad karachi",
    CellPhone: "03331355132",
  };

  const highest_degree = {
    MS: "2018",
  };

  const latest_experience = {
    Institution_Name: "JUW",
    Job_Title: "Developer",
    From_Date: "2024-06-27",
    To_Date: "2024-06-27",
  };

  const handleEditClick = () => {
    navigate("/edit-personal-info");
  };

  const breadCrumps = [
    {
      label: "Personal Information",
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

  return (
    <div className="personal-information-container">
      <Sidebar />
      <div className="personal-information">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="personal-information-card">
          <h3 className="research-portfolio">
            Research portfolio | Personal Information
          </h3>
          <div className="PI_bredcrumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div>
          {/* <div className="bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div> */}
          <hr />
          <div className="personal_information-table">
            <div className="personal_information-section">
              <h5 className="personal_info_heading">PERSONAL INFORMATION</h5>
              <table>
                <tbody>
                  {Object.entries(personal_information).map(
                    ([key, value], subIndex) => (
                      <tr key={subIndex}>
                        <td className="key-column">{key}</td>
                        <td className="value-column">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <hr />

              <h5 className="personal_info_heading">Highest Degree</h5>
              <table>
                <tbody>
                  {Object.entries(highest_degree).map(
                    ([key, value], subIndex) => (
                      <tr key={subIndex}>
                        <td className="key-column">{key}</td>
                        <td className="value-column">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <hr />

              <h5 className="personal_info_heading">Latest Experience</h5>
              <table>
                <tbody>
                  {Object.entries(latest_experience).map(
                    ([key, value], subIndex) => (
                      <tr key={subIndex}>
                        <td className="key-column">{key}</td>
                        <td className="value-column">{value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <button
                type="button"
                className="edit_button"
                onClick={handleEditClick}
              >
                EDIT
              </button>
            </div>
          </div>
          <div className="juw-copyright">
            <p>© 2024, all rights reserved by Jinnah University for Women.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPortfolio;

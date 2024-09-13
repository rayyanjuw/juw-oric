import React from "react";
import "./researchgrants.css";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
import NavBar from "../shared-components/navbar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

const ResearchGrants = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();



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
      // path: "/researchpublication",
      path: "/viewallpublications",
    },
    {
      label: "Research Grants and Contracts",
      path: "/research-grants-and-contracts",
    },
  ];

  const completed_research_projects = [
    {
      Title: "Anti-depressant Effect of Fluoxetine on Brain Indolamine Levels to Improve the RA Associated Depression in Adjuvant Induced Arthritic Rats",
      DateofCompletion: "0000-00-00",
      AgencyOrganization: "juw",
      TotalAwardAmount: "20.00",
    },
    {
      Title: "project saphire",
      DateofCompletion: "0000-00-00",
      AgencyOrganization: "Saphire",
      TotalAwardAmount: "1.00",
    },
    {
      Title: "project tesla",
      DateofCompletion: "0000-00-00",
      AgencyOrganization: "Tesla",
      TotalAwardAmount: "5.00",
    },
  ];

  const funded_or_inprogress = [
    {
      Title: "Test1",
      DateofAcceptance: "2026-12-06",
      AgencyOrganization: "juw",
      TotalAwardAmount: "63200.00",
    },
    {
      Title: "Test2",
      DateofAcceptance: "2026-12-06",
      AgencyOrganization: "juw",
      TotalAwardAmount: "65200.00",
    },
    {
      Title: "Test3",
      DateofAcceptance: "2027-12-04",
      AgencyOrganization: "juw",
      TotalAwardAmount: "78000.00",
    },
  ];

  const research_projects_title = [
    "Title",
    "Date of Completion",
    "Agency/Organization",
    "Total Award Amount",
  ];

  const funded_or_inprogress_title = [
    "Title",
    "Date of acceptance",
    "Agency/Organization",
    "Total Award Amount",
  ];

  const handleEditClick = () => {
    navigate("/add-research-grants-and-contracts");
  };


  return (
    <div className="ResearchGrants-container">
      <Sidebar />
      <div className="researchGrants">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="researchGrants-card">
          <h4>Research portfolio | Research Grants and Contracts</h4>
          <div className="RG_bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div>
          {/* <div className="bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div> */}
          <div className="h4-heading">
            <h4>Completed Research Projects</h4>
          </div>
          <div className="researchGrants-table1">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" className="table-heading">
                    PROJECT DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {completed_research_projects?.map((project, index) =>
                  Object.entries(project).map(([key, value], subIndex) => (
                    <tr key={subIndex}>
                      <td className="key-column">
                        {research_projects_title[subIndex]}
                      </td>
                      <td className="value-column">{value}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="h4-heading">
            <h4>Funded & In Progress, In Review</h4>
          </div>
          <div className="researchGrants-table2">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" className="table-heading">
                    PROJECT DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {funded_or_inprogress?.map((project, index) =>
                  Object.entries(project).map(([key, value], subIndex) => (
                    <tr key={subIndex}>
                      <td className="key-column">
                        {funded_or_inprogress_title[subIndex]}
                      </td>
                      <td className="value-column">{value}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
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

export default ResearchGrants;

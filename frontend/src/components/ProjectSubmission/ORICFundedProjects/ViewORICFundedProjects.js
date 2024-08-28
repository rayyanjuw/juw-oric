import React from "react";
import "./viewORICFundedProjects.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../shared-components/navbar/NavBar";

const ViewORICFundedProjects = () => {
  const ORICProjects = [
    {
      Title: "test",
      NameofPI: "test",
      NameofFaculty: "test",
      TotalBudgetRequested: "30000",
    },
    {
      Title: "test2",
      NameofPI: "test",
      NameofFaculty: "test",
      TotalBudgetRequested: "30000",
    },
    {
      Title: "test3",
      NameofPI: "test",
      NameofFaculty: "test",
      TotalBudgetRequested: "30000",
    },
    {
      Title: "test4",
      NameofPI: "test",
      NameofFaculty: "test",
      TotalBudgetRequested: "30000",
    },
  ];

  return (
    <div className="vieworicfundedproject_container">
      <Sidebar />
      <div className="vieworicfundedproject">
        <div className="vieworic_navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div>
        <div className="vieworicfundedproject-card">
          <h5>ORIC Funded Project | Proposal Cover</h5>

          <div className="vieworicfundedproject-table-data">
            <div className="vieworicfundedproject-table-container">
              {ORICProjects.map((project, index) => (
                <div key={index} className="vieworicfundedproject-list-table">
                  <div className="View_project_detail">
                    <h5>Project Details #{index + 1}</h5>
                    <button type="button">VIEW</button>
                  </div>
                  <div className="vieworicfundedproject-list-table-format title">
                    <b>Title:</b>
                    <span>{project.Title}</span>
                  </div>
                  <div className="vieworicfundedproject-list-table-format">
                    <b>Owner of IP:</b>
                    <span>{project.NameofPI}</span>
                  </div>
                  <div className="vieworicfundedproject-list-table-format">
                    <b>Address:</b>
                    <span>{project.NameofFaculty}</span>
                  </div>
                  <div className="vieworicfundedproject-list-table-format">
                    <b>Field of Invention:</b>
                    <span>{project.TotalBudgetRequested}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="juw_copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default ViewORICFundedProjects;

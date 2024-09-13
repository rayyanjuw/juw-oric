import React from "react";
import "./viewgrants.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../shared-components/navbar/NavBar";

const ViewGrants = () => {

    const Grants = [
        {
          Title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          NameofPI: "test",
          NameofPIInstitute: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          TotalBudgetRequested: "30000",
        }
      ];


  return (
    <div className="viewgrants-container">
      <Sidebar />
      <div className="viewgrants">
        {/* <div className="navbar-div">
          <NavBar />
        </div> */}
        <div className="viewgrants_navbar-div">
          <NavBar />
        </div>
        <div className="viewgrants-card">
          <h5>International/National Grants | Proposal Cover</h5>
          <div className="viewgrants-table-data">
            <div className="viewgrants-table-container">
              {Grants.map((project, index) => (
                <div key={index} className="viewgrants-list-table">
                  <div className="Viewgrants_detail">
                    <h5>Project Details #{index + 1}</h5>
                    <button type="button">VIEW</button>
                  </div>
                  <div className="viewgrants-list-table-format title">
                    <b>Title:</b>
                    <span>{project.Title}</span>
                  </div>
                  <div className="viewgrants-list-table-format">
                    <b>Name of PI:</b>
                    <span>{project.NameofPI}</span>
                  </div>
                  <div className="viewgrants-list-table-format">
                    <b>Name of PI Institute:</b>
                    <span>{project.NameofPIInstitute}</span>
                  </div>
                  <div className="viewgrants-list-table-format">
                    <b>Total Budget Requested:</b>
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

export default ViewGrants;

import React, { useState } from "react";
import "./AddORICFundedProjects.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../shared-components/navbar/NavBar";

const AddORICFundedProjects = () => {
  const InitalFundedProject = {
    Title: "",
    NameofPI: "",
    NameofFaculty: "",
    TotalBudgetRequested: "",
  };

  const [AddFundedProjects, setFundedProjects] = useState(InitalFundedProject);

  console.log(AddFundedProjects);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFundedProjects((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="addoricfundedproject_container">
      <Sidebar />
      <div className="add-oricfundedproject">
        <div className="addoric_navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div>
        {/* <div className="navbar-div">
          <h4>Submission | Intellectual Property</h4>
          <NavBar />
        </div> */}
        <div className="add-oricfundedproject-card">
          <h4>ORIC Funded Project | Proposal Cover</h4>
          <p>
            Proposal Cover / Research Project / Facilities and Funding /
            Justification for The Requested Budget Items / Estimated Budget for
            Proposed Research Period
          </p>
          {/* <div className="addintelproperty_multiInputFields"> */}
          <div className="add-oricfundedproject_multiInputFields">
            <div className="title-input">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Title"
                // value={AddFundedProjects["Title"]}
                value={AddFundedProjects.Title}
                name="Title"
                onChange={handleChange}
              />
            </div>
            <div className="InputGroup">
              <label>Name of PI:</label>
              <input
                type="text"
                value={AddFundedProjects.NameofPI}
                name="NameofPI"
                onChange={handleChange}
              />
            </div>

            <div className="two-inputs">
              <div className="InputGroup">
                <label>Name of Faculty:</label>
                <input
                  type="text"
                  value={AddFundedProjects.NameofFaculty}
                  name="NameofFaculty"
                  onChange={handleChange}
                />
              </div>
              <div className="InputGroup">
                <label>Total Budget requested:</label>
                <input
                  type="number"
                  value={AddFundedProjects.TotalBudgetRequested}
                  name="TotalBudgetRequested"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="save-btn">
              <button className="savebut">Save</button>
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

export default AddORICFundedProjects;

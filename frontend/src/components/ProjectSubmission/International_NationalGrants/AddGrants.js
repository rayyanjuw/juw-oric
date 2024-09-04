import React, { useState } from "react";
import "./addgrants.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../shared-components/navbar/NavBar";

const AddGrants = () => {
  const [proposalCover, setProposalCover] = useState({
    ProposalReferenceNo: "",
    TitleofProject: "",
    DurationofProject: "",
    TotalBudgetRequested: "",
    ThemeofProposedResearch: [],
    DisciplineofProposedResearch: [],
  });

  const [principleInvestigator, setPrincipleInvestigator] = useState({
    InstitutionName: "",
    StreetAddress: "",
    City: "",
    Name: "",
    Position_or_Title: "",
    Department: "",
    TellNo: "",
    Email: "",
    CNIC_PassportNo: "",
  });

  const [faculty, setFaculty] = useState({
    InstitutionName: "",
    StreetAddress: "",
    City: "",
    Name: "",
    Position_or_Title: "",
    Department: "",
    TellNo: "",
    Email: "",
    CNIC_PassportNo: "",
  });


  console.log(proposalCover);
  console.log(principleInvestigator);
  console.log(faculty);

  // Handle change for text inputs
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;

    if (section === "proposalCover") {
      setProposalCover((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (section === "principleInvestigator") {
      setPrincipleInvestigator((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (section === "faculty") {
      setFaculty((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Handle change for checkboxes
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const section = e.target.dataset.section;

    if (section === "proposalCover") {
      setProposalCover((prevState) => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter((item) => item !== value),
      }));
    }
  };

  return (
    <div className="addgrants-container">
      <Sidebar />
      <div className="addgrants">
        {/* <div className="navbar-div">
          <NavBar />
        </div> */}
        <div className="addgrant_navbar-div">
          <NavBar />
        </div>
        <div className="addgrants-card">
          <h5>International/National Grants | Proposal Cover</h5>
          <p>
            Proposal Cover / Executive Summary / Academic/Sectoral
            Collaborators/ Project Description/ Project Management/
            Implementation Timeline / Physical Resources and Facilities /
            Scientific Personnel / Principal Investigator's availed research
            grant details / Risk Management Strategy / List of References /
            Proposed Project Budget
          </p>
          <div className="addgrants_multiInputFields">
            <div className="title-input">
              <label>*Proposal Reference No:</label>
              <input
                value={proposalCover.ProposalReferenceNo}
                type="text"
                placeholder="(Not for completion by applicant)"
                name="ProposalReferenceNo"
                data-section="proposalCover"
                onChange={handleTextChange}
              />
            </div>
            <div className="InputGroup">
              <label>*Title of Project:</label>
              <input
                type="text"
                value={proposalCover.TitleofProject}
                name="TitleofProject"
                placeholder="NRPU:"
                data-section="proposalCover"
                onChange={handleTextChange}
              />
            </div>
            <div className="InputGroup">
              <label>Duration of Project:</label>
              <input
                type="text"
                value={proposalCover.DurationofProject}
                name="DurationofProject"
                placeholder="In months"
                data-section="proposalCover"
                onChange={handleTextChange}
              />
            </div>
            <div className="InputGroup">
              <label>Total Budget Requested:</label>
              <input
                type="text"
                value={proposalCover.TotalBudgetRequested}
                name="TotalBudgetRequested"
                placeholder="PKR million"
                data-section="proposalCover"
                onChange={handleTextChange}
              />
            </div>
            <div className="multiCheckBoxes">
              <h6>Theme of Proposed Research:</h6>
              <div className="theme_research_checkbox">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="ThemeofProposedResearch"
                      value="Basic"
                      checked={proposalCover.ThemeofProposedResearch.includes(
                        "Basic"
                      )}
                      data-section="proposalCover"
                      onChange={handleCheckboxChange}
                    />
                    Basic
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="ThemeofProposedResearch"
                      value="Applied"
                      checked={proposalCover.ThemeofProposedResearch.includes(
                        "Applied"
                      )}
                      data-section="proposalCover"
                      onChange={handleCheckboxChange}
                    />
                    Applied
                  </label>
                </div>
              </div>

              <div className="discipline_research_checkbox">
                <h6>Discipline of Proposed Research:</h6>
                {[
                  "Agriculture Sciences",
                  "Arts & Humanities",
                  "Biological and Health Sciences",
                  "Management Sciences",
                  "Education and Human Resources",
                  "Engineering and Technology",
                  "Mathematical and Physical Sciences",
                  "Social, Behavioral and Economical Sciences",
                ].map((discipline) => (
                  <div key={discipline}>
                    <label>
                      <input
                        type="checkbox"
                        name="DisciplineofProposedResearch"
                        value={discipline}
                        checked={proposalCover.DisciplineofProposedResearch.includes(
                          discipline
                        )}
                        data-section="proposalCover"
                        onChange={handleCheckboxChange}
                      />
                      {discipline}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="addgrants_multiInputFields">
              <h4>Principal Investigator Details:</h4>
              {Object.keys(principleInvestigator).map((key) => (
                <div className="InputGroup" key={key}>
                  <label>
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </label>
                  <input
                    type="text"
                    value={principleInvestigator[key]}
                    name={key}
                    data-section="principleInvestigator"
                    onChange={handleTextChange}
                  />
                </div>
              ))}
            </div>

            <div className="addgrants_multiInputFields">
              <h4>Faculty Details:</h4>
              {Object.keys(faculty).map((key) => (
                <div className="InputGroup" key={key}>
                  <label>
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </label>
                  <input
                    type="text"
                    value={faculty[key]}
                    name={key}
                    data-section="faculty"
                    onChange={handleTextChange}
                  />
                </div>
              ))}
            </div>

            <div>
              <div className="addgrant_save-btn">
                <button className="addgrant_savebut">Save</button>
              </div>
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

export default AddGrants;

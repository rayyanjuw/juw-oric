import React, { useState } from "react";
import "./add_membership.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../shared-components/navbar/NavBar";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../shared-components/breadcrumps/BreadCrumps";

const Add_membership = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  console.log(text);

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
    <div className="add-membership-container">
      <Sidebar />
      <div className="add-membership">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="add-membership-card">
          <h3>Research portfolio | Membership</h3>
          <div className="e_membership_bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div>
          {/* <div className="bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div> */}
          <h5>Membership</h5>
          <p>
            (List memberships in professional and learned Societies, indicating
            offices held, committees, or other specific assignments)
          </p>
          <div className="textarea">
            <label htmlFor="exampleTextarea">List:</label>
            <textarea
              id="exampleTextarea"
              value={text}
              onChange={handleChange}
              rows="5"
              cols="50"
            />
          </div>
          <div className="button-container">
            <button className="am_button">SAVE</button>
          </div>
        </div>
        <div className="juw-copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default Add_membership;

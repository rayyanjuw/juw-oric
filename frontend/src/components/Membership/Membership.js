import React from "react";
import "./membership.css";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../shared-components/navbar/NavBar";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
import { useLocation, useNavigate } from "react-router-dom";

const Membership = () => {
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
      path: "/viewallpublications",
    },
    {
      label: "Research Grants and Contracts",
      path: "/research-grants-and-contracts",
    },
  ];


  const handleEditClick = () => {
    navigate("/add-membership");
  };


  return (
    <div className="membership-container">
      <Sidebar />
      <div className="membership">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="membership-card">
          <h3>Research portfolio | Membership</h3>
          <div className="membership_bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div>
          {/* <div className="bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div> */}
          <hr />
          <h5>MEMBERSHIPS</h5>
          <hr />
          <p>1. Polo house 2. juw club</p>
          <button className="membership_button" onClick={handleEditClick}>EDIT</button>
        </div>
        {/* <p style={{ display: "flex", flexDirection: "row-reverse" }}> */}
        <div className="juw-copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;

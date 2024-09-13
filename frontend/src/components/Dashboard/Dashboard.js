import React, {useState} from "react";
import "./dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import publications_icon from "../../assets/publications_icon.png";
import i_icon from '../../assets/i_icon.png';
import check_icon from '../../assets/check_icon.png';
import NavBar from "../shared-components/navbar/NavBar";

const Dashboard = () => {

  return (
    <>
    <div className="dashboard-whole-page">
      <Sidebar />
      <div className="dashboard">
      <div className='navbar-div'>
        <NavBar/>
        </div>
        <div className="dashboard-card">
          <h3 className="dashboard-portfolio">
            Welcome to the member's area, admin!
          </h3>
          <div className="dashboard-subcards">
            <div className="dashboard-subcard">
              <div className="subcard-title">
                <h5>Publications</h5> 
              </div>
              <div className="subcard-number">
                <h4>10</h4>
              </div>
              <div className="subcard-img">
                <img src={publications_icon} alt="" />
              </div>
              <div className="subcard-link">
              <hr />
                {/* <hr style={{color: "black", backgroundColor: 'black', display: 'flex', width: '150%'}}/> */}
                <a href="/">Add More Publications</a>
              </div>
            </div>
            <div className="dashboard-subcard">
              <div className="subcard-title">
                <h5>Research Proposal Submitted</h5> 
              </div>
              <div className="subcard-number">
                <h4>5</h4>
              </div>
              <div className="subcard-img">
                <img src={i_icon} alt="" />
              </div>
              <div className="subcard-link">
              <hr />
                {/* <hr style={{color: "black", marginTop: '10px'}}/> */}
                <a href="/">View All Submitted Proposal</a>
              </div>
            </div>
            <div className="dashboard-subcard">
              <div className="subcard-title">
                <h5>Research Proposal Approved</h5> 
              </div>
              <div className="subcard-number">
                <h4>8</h4>
              </div>
              <div className="subcard-img">
                <img src={check_icon} alt="" />
              </div>
              <div className="subcard-link">
              <hr />
                {/* <hr style={{color: "black", marginTop: '10px'}}/> */}
                <a href="/">View All Approved Proposal</a>
              </div>
            </div>
          </div>
        </div>
        <div className="juw-copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default Dashboard;

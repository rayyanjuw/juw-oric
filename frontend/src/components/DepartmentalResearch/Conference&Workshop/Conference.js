import React, { useState } from 'react'
import './conference.css';
import { useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Breadcrumb from "../../shared-components//breadcrumps/BreadCrumps";
import NavBar from '../../shared-components/navbar/NavBar';

const Conference = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const breadCrumps = [
    {
      label: "Publications of Faculty",
      path: "/departmental-research-data-publications-of-faculty",
    },
    {
      label: "Conferences, Workshops Attended",
      path: "/departmental-research-data-conferences-workshops-attended",
    },
    {
      label: "Collaborative Research/Academic work",
      path: "/departmental-research-data-collaborative-research-academic-work",
    },
    {
      label: "BS/MS/PhD Thesis/Project Details",
      path: "/departmental-research-data-thesis-project-details",
    },
  ];

  const conferenceIntialState = () => ({
    Conferences_Workshops: "",
    Date: ""
  })

  const conferenceTitle = [
    "Conferences/Workshops",
    "Date",
  ]

  const [conference1, setConference1] = useState(conferenceIntialState())
  const [conference2, setConference2] = useState(conferenceIntialState())
  const [conference3, setConference3] = useState(conferenceIntialState())
  const [conference4, setConference4] = useState(conferenceIntialState())
  const [conference5, setConference5] = useState(conferenceIntialState())


  const handleInput = (e, setConference) => {
    setConference((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const conferences = [
    { state: conference1, setState: setConference1 },
    { state: conference2, setState: setConference2 },
    { state: conference3, setState: setConference3 },
    { state: conference4, setState: setConference4 },
    { state: conference5, setState: setConference5 },
  ];
  console.log(conferences);

  return (
    <>
      <div className='conference-main-container'>
        <Sidebar />
        <div className='conference-card'>
          <div className="conference_navbar-div">
            <NavBar />
          </div>
        <div className="conference-card-items">
            <h3>Departmental Research Data | Conferences, Workshops Attended</h3>
            <div className="conference-bredcrumb">
              <Breadcrumb items={breadCrumps} activePath={currentPath} />
            </div>

              <div className='conference-content'>
              <h4>Conferences, Workshops Attended Details:</h4>
              {conferences.map(({ state, setState }, index) => (
                <div className="conference-card-item" key={index}>
                  <div className="conference-card-title">
                    {/* <h3>Conferences/Workshops Details {index + 1}.</h3> */}
                    <p>Conferences/Workshops Details {index + 1}.</p>
                  </div>
                  <div className="conference-input-container">
                    {Object.keys(state).map((key, i) => (
                      <div key={i} className="conference-input-group">
                        <label>{conferenceTitle[i]}</label>
                        <input
                          type="text"
                          value={state[key]}
                          name={key}
                          onChange={(e) => handleInput(e, setState)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button className="conference_btn">Save</button>
            </div>
          </div>
            <div className="juw-copyright">
              <p>© 2024, all rights reserved by Jinnah University for Women.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Conference



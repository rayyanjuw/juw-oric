import React, { useState } from "react";
import "./DashboardCard.css";
import NavBar from "../shared-components/navbar/NavBar";

const DashboardCard = () => {
  const createInitialState = () => ({
    title: "",
    webOfScience: "",
    impactFactor: "",
    scopus: "",
    hec: "",
    otherIndexing: "",
    firstAuthor: "",
    secondAuthor: "",
  });

  const title = [
    "Research Paper Title and details (MLA):",
    "Web of Science (Yes/No):",
    "Impact Factor:",
    "Scopus (Yes/No):",
    "HEC (Category):",
    "Any other indexing recognized by HEC :",
    "1st Author:",
    "2nd Author:",
  ];

  const [userInfo1, setUserInfo1] = useState(createInitialState());
  const [userInfo2, setUserInfo2] = useState(createInitialState());
  const [userInfo3, setUserInfo3] = useState(createInitialState());
  const [userInfo4, setUserInfo4] = useState(createInitialState());
  const [userInfo5, setUserInfo5] = useState(createInitialState());

  const handleInput = (e, setUserInfo) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const userInfos = [
    { state: userInfo1, setState: setUserInfo1 },
    { state: userInfo2, setState: setUserInfo2 },
    { state: userInfo3, setState: setUserInfo3 },
    { state: userInfo4, setState: setUserInfo4 },
    { state: userInfo5, setState: setUserInfo5 },
  ];
  console.log(userInfos);

  return (
    <>
      <div className="dashboard-card1">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="card-content">
          <h3>Departmental Research Data | Publications of Faculty</h3>
          <p>Publications of Faculty:</p>
        </div>
        <div className="card-items">
          {userInfos.map(({ state, setState }, index) => (
            <div className="card-item" key={index}>
              <div className="card-title">
                <h4>Publication Details {index + 1}.</h4>
              </div>
              <div className="input-container">
                {Object.keys(state).map((key, i) => (
                  <div key={i} className="input-group">
                    {/* <label>{key}</label> */}
                    <label>{title[i]}</label>
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
          <button className="btn">Save</button>
        </div>
        <p style={{ display: "flex", flexDirection: "row-reverse" }}>
          © 2024, all rights reserved by Jinnah University for Women.
        </p>
      </div>
    </>
  );
};

export default DashboardCard;

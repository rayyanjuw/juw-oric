// import React, { useState } from "react";
// import "./DashboardCard.css";
// import NavBar from "../shared-components/navbar/NavBar";
// import { useLocation } from "react-router-dom";
// import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";


// const DashboardCard = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const createInitialState = () => ({
//     title: "",
//     webOfScience: "",
//     impactFactor: "",
//     scopus: "",
//     hec: "",
//     otherIndexing: "",
//     firstAuthor: "",
//     secondAuthor: "",
//   });

//   const title = [
//     "Research Paper Title and details (MLA):",
//     "Web of Science (Yes/No):",
//     "Impact Factor:",
//     "Scopus (Yes/No):",
//     "HEC (Category):",
//     "Any other indexing recognized by HEC :",
//     "1st Author:",
//     "2nd Author:",
//   ];

//   const [userInfo1, setUserInfo1] = useState(createInitialState());
//   const [userInfo2, setUserInfo2] = useState(createInitialState());
//   const [userInfo3, setUserInfo3] = useState(createInitialState());
//   const [userInfo4, setUserInfo4] = useState(createInitialState());
//   const [userInfo5, setUserInfo5] = useState(createInitialState());

//   const handleInput = (e, setUserInfo) => {
//     setUserInfo((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const userInfos = [
//     { state: userInfo1, setState: setUserInfo1 },
//     { state: userInfo2, setState: setUserInfo2 },
//     { state: userInfo3, setState: setUserInfo3 },
//     { state: userInfo4, setState: setUserInfo4 },
//     { state: userInfo5, setState: setUserInfo5 },
//   ];
//   console.log(userInfos);

//   const breadCrumps = [
//     {
//       label: "Publications of Faculty",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       label: "Conferences, Workshops Attended",
//       path: "/departmental-research-data-conferences-workshops-attended",
//     },
//     {
//       label: "Collaborative Research/Academic work",
//       path: "/departmental-research-data-collaborative-research-academic-work",
//     },
//     {
//       label: "BS/MS/PhD Thesis/Project Details",
//       path: "/departmental-research-data-thesis-project-details",
//     },
//   ];


//   return (
//     <>
//       <div className="dashboard-card1">
//         <div className="departmental_navbar-div">
//           <NavBar />
//         </div>
//         <div className="card-content">
//           <h3>Departmental Research Data | Publications of Faculty</h3>

//           <div className="drd-bredcrumb">
//             <Breadcrumb items={breadCrumps} activePath={currentPath} />
//           </div>
//         </div>
//         <div className="card-items">
//           <p>Publications of Faculty:</p>
//           {userInfos.map(({ state, setState }, index) => (
//             <div className="card-item" key={index}>
//               <div className="card-title">
//                 <h4>Publication Details {index + 1}.</h4>
//               </div>
//               <div className="input-container">
//                 {Object.keys(state).map((key, i) => (
//                   <div key={i} className="input-group">
//                     <label>{title[i]}</label>
//                     <input
//                       type="text"
//                       value={state[key]}
//                       name={key}
//                       onChange={(e) => handleInput(e, setState)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <button className="btn">Save</button>
//         </div>
//         <div className="juw-copyright">
//           <p>© 2024, all rights reserved by Jinnah University for Women.</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardCard;




// improvement

import React, { useState } from "react";
import "./DashboardCard.css";
import NavBar from "../shared-components/navbar/NavBar";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";


const DashboardCard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
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


  return (
    <>
      <div className="dashboard-card1">
        <div className="departmental_navbar-div">
          <NavBar />
        </div>
        <div className="dashboardCard_card-items">
          <div className="dashboardCard_card-content">
            <h3>Departmental Research Data | Publications of Faculty</h3>
            <div className="drd-bredcrumb">
              <Breadcrumb items={breadCrumps} activePath={currentPath} />
            </div>
          </div>
          <p>Publications of Faculty:</p>
          {userInfos.map(({ state, setState }, index) => (
            <div className="dashboardCard_card-item" key={index}>
              <div className="card-title">
                <h4>Publication Details {index + 1}.</h4>
              </div>
              <div className="input-container">
                {Object.keys(state).map((key, i) => (
                  <div key={i} className="dashboardCard_input-group">
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
          <button className="dashboardCard_btn">Save</button>
        </div>
        <div className="juw-copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;

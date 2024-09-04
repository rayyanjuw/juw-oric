// import React, { useState } from "react";
// import "./add_researchGrants.css";
// import Sidebar from "../../Sidebar/Sidebar";
// import NavBar from "../../shared-components/navbar/NavBar";
// import Breadcrumb from "../../shared-components/breadcrumps/BreadCrumps";
// import { useLocation, useNavigate } from "react-router-dom";

// const Add_ResearchGrants = () => {
    
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const navigate = useNavigate();


//   const ResearchGrantsState = () => ({
//     Title: "",
//     DateofCompletion: "",
//     Agency_or_Organization: "",
//     TotalAwardAmount: "",
//   });

//   const InReviewState = () => ({
//     Title: "",
//     Date: "",
//     Agency_or_Organization: "",
//     TotalAwardAmount: "",
//   });


//   const completed_title = [
//     "Title",
//     "Date of Completion",
//     "Agency/Organization",
//     "Total Award Amount:",
//   ];

//   const inreview_title = [
//     "Title",
//     "Date",
//     "Agency/Organization",
//     "Total Award Amount:",
//   ];

//   const [ResearchGrants1, setResearchGrants1] = useState(ResearchGrantsState);
//   const [ResearchGrants2, setResearchGrants2] = useState(ResearchGrantsState);
//   const [ResearchGrants3, setResearchGrants3] = useState(ResearchGrantsState);

//   const researchGrants = [
//     { state: ResearchGrants1, setState: setResearchGrants1 },
//     { state: ResearchGrants2, setState: setResearchGrants2 },
//     { state: ResearchGrants3, setState: setResearchGrants3 },
//   ];


//   const [inReview1, setInReview1] = useState(InReviewState);
//   const [inReview2, setInReview2] = useState(InReviewState);
//   const [inReview3, setInReview3] = useState(InReviewState);

//   const InReviews = [
//     { state: inReview1, setState: setInReview1 },
//     { state: inReview2, setState: setInReview2 },
//     { state: inReview3, setState: setInReview3 },
//   ]

//   console.log(researchGrants)
//   console.log(InReviews)


//   const breadCrumps = [
//     {
//       label: " Personal Information",
//       path: "/",
//     },
//     {
//       label: "Honor and Awards, Scholarship",
//       path: "/",
//     },
//     {
//       label: "Membership",
//       path: "/",
//     },
//     {
//       label: "Publications",
//       path: "/researchpublication",
//     },
//     {
//       label: "Research Grants and Contracts",
//       path: "/research-grants-and-contracts",
//     },
//   ];

//   return (
//     <div className="Add_ResearchGrants-container">
//       <Sidebar />
//       <div className="add_researchGrants">
//         <div className="navbar-div">
//           <NavBar />
//         </div>
//         <div className="add_researchGrants_card">
//           <h4>Research portfolio | Research Grants and Contracts</h4>
//           <div className="bred-crumb">
//             <Breadcrumb items={breadCrumps} activePath={currentPath} />
//           </div>
//           <div className="h4-heading">
//             <h4>Research Grants and Contracts</h4>
//           </div>
//           <div className="completed_part">
//             <h6>Completed</h6>
//             {researchGrants.map(({ state, setState }, index) => (
//               <div className="heading11" key={index}>
//                 <h6>Project Completed {index + 1}.</h6>
//                 <div className="input-container">
//                   {Object.keys(state).map((key, i) => (
//                     <div key={i} className="input-group">
//                       <label>{completed_title[i]}</label>
//                       <input type="text" value={state[key]} name={key} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="inreview_part">
//             <h6>Funded & In progress, In review</h6>
//             {InReviews.map(({ state, setState }, index) => (
//               <div className="heading11" key={index}>
//                 <h6>Project Completed {index + 1}.</h6>
//                 <div className="input-container">
//                   {Object.keys(state).map((key, i) => (
//                     <div key={i} className="input-group">
//                       <label>{inreview_title[i]}</label>
//                       <input type="text" value={state[key]} name={key} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             type="button"
//             className="edit_button"
//           >
//             SAVE
//           </button>
//         </div>
//         <div className="juw_copyright">
//         <p>© 2024, all rights reserved by Jinnah University for Women.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add_ResearchGrants;






// import React, { useState } from "react";
// import "./add_researchGrants.css";
// import Sidebar from "../../Sidebar/Sidebar";
// import NavBar from "../../shared-components/navbar/NavBar";
// import Breadcrumb from "../../shared-components/breadcrumps/BreadCrumps";
// import { useLocation } from "react-router-dom";

// const Add_ResearchGrants = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   // Define the initial state structure
//   const initialState = {
//     completed: [
//       {
//         Title: "",
//         DateofCompletion: "",
//         Agency_or_Organization: "",
//         TotalAwardAmount: "",
//       },
//       {
//         Title: "",
//         DateofCompletion: "",
//         Agency_or_Organization: "",
//         TotalAwardAmount: "",
//       },
//       {
//         Title: "",
//         DateofCompletion: "",
//         Agency_or_Organization: "",
//         TotalAwardAmount: "",
//       },
//     ],
//     inReview: [
//       {
//         Title: "",
//         Date: "",
//         Agency_or_Organization: "",
//         TotalAwardAmount: "",
//       },
//       {
//         Title: "",
//         Date: "",
//         Agency_or_Organization: "",
//         TotalAwardAmount: "",
//       },
//       {
//         Title: "",
//         Date: "",
//         Agency_or_Organization: "",
//         TotalAwardAmount: "",
//       },
//     ],
//   };

//   // Use useState to manage the form state
//   const [formData, setFormData] = useState(initialState);

//   console.log(formData)


//   // Handle input changes
//   const handleInputChange = (e, section, index, field) => {
//     const value = e.target.value;

//     setFormData((prevData) => {
//       const updatedSection = [...prevData[section]];
//       updatedSection[index][field] = value;

//       return {
//         ...prevData,
//         [section]: updatedSection,
//       };
//     });
//   };

//   const breadCrumps = [
//     {
//       label: " Personal Information",
//       path: "/",
//     },
//     {
//       label: "Honor and Awards, Scholarship",
//       path: "/",
//     },
//     {
//       label: "Membership",
//       path: "/",
//     },
//     {
//       label: "Publications",
//       path: "/researchpublication",
//     },
//     {
//       label: "Research Grants and Contracts",
//       path: "/research-grants-and-contracts",
//     },
//   ];

//   return (
//     <div className="Add_ResearchGrants-container">
//       <Sidebar />
//       <div className="add_researchGrants">
//         <div className="navbar-div">
//           <NavBar />
//         </div>
//         <div className="add_researchGrants_card">
//           <h4>Research portfolio | Research Grants and Contracts</h4>
//           <div className="bred-crumb">
//             <Breadcrumb items={breadCrumps} activePath={currentPath} />
//           </div>
//           <div className="h4-heading">
//             <h4>Research Grants and Contracts</h4>
//           </div>
//           <div className="completed_part">
//             <h6>Completed</h6>
//             {formData.completed.map((grant, index) => (
//               <div className="heading11" key={index}>
//                 <h6>Project Completed {index + 1}.</h6>
//                 <div className="input-container">
//                   {Object.keys(grant).map((key, i) => (
//                     <div key={i} className="input-group">
//                       <label>{key.replace(/_/g, " ")}</label>
//                       <input
//                         type="text"
//                         value={grant[key]}
//                         name={key}
//                         onChange={(e) =>
//                           handleInputChange(e, "completed", index, key)
//                         }
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="inreview_part">
//             <h6>Funded & In progress, In review</h6>
//             {formData.inReview.map((review, index) => (
//               <div className="heading11" key={index}>
//                 <h6>Project In Review {index + 1}.</h6>
//                 <div className="input-container">
//                   {Object.keys(review).map((key, i) => (
//                     <div key={i} className="input-group">
//                       <label>{key.replace(/_/g, " ")}</label>
//                       <input
//                         type="text"
//                         value={review[key]}
//                         name={key}
//                         onChange={(e) =>
//                           handleInputChange(e, "inReview", index, key)
//                         }
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button type="button" className="edit_button">
//             SAVE
//           </button>
//         </div>
//         <div className="juw_copyright">
//           <p>© 2024, all rights reserved by Jinnah University for Women.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add_ResearchGrants;




import React, { useState } from "react";
import "./add_researchGrants.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../shared-components/navbar/NavBar";
import Breadcrumb from "../../shared-components/breadcrumps/BreadCrumps";
import { useLocation } from "react-router-dom";

const Add_ResearchGrants = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define the initial state structure
  const initialState = {
    completed: [
      {
        Title: "",
        DateofCompletion: "",
        Agency_or_Organization: "",
        TotalAwardAmount: "",
      },
      {
        Title: "",
        DateofCompletion: "",
        Agency_or_Organization: "",
        TotalAwardAmount: "",
      },
      {
        Title: "",
        DateofCompletion: "",
        Agency_or_Organization: "",
        TotalAwardAmount: "",
      },
    ],
    inReview: [
      {
        Title: "",
        Date: "",
        Agency_or_Organization: "",
        TotalAwardAmount: "",
      },
      {
        Title: "",
        Date: "",
        Agency_or_Organization: "",
        TotalAwardAmount: "",
      },
      {
        Title: "",
        Date: "",
        Agency_or_Organization: "",
        TotalAwardAmount: "",
      },
    ],
  };

  // Use useState to manage the form state
  const [formData, setFormData] = useState(initialState);

  console.log(formData)



  // Handle input changes
  const handleInputChange = (e, section, index, field) => {
    const value = e.target.value;

    setFormData((prevData) => {
      const updatedSection = [...prevData[section]];
      updatedSection[index][field] = value;

      return {
        ...prevData,
        [section]: updatedSection,
      };
    });
  };

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
      // path: "/researchpublication",
      path: "/viewallpublications",
    },
    {
      label: "Research Grants and Contracts",
      path: "/add-research-grants-and-contracts",
    },
  ];

  return (
    <div className="Add_ResearchGrants-container">
      <Sidebar />
      <div className="add_researchGrants">
        <div className="navbar-div">
          <NavBar />
        </div>
        <div className="add_researchGrants_card">
          <h4>Research portfolio | Research Grants and Contracts</h4>
          <div className="ARG_bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div>
          {/* <div className="bred-crumb">
            <Breadcrumb items={breadCrumps} activePath={currentPath} />
          </div> */}
          <div className="h4-heading">
            <h4>Research Grants and Contracts</h4>
          </div>
          <div className="completed_part">
            <h6>Completed</h6>
            {formData.completed.map((grant, index) => (
              <div className="heading11" key={index}>
                <h6>Project Completed {index + 1}.</h6>
                <div className="input-container">
                  {Object.keys(grant).map((key, i) => (
                    <div key={i} className="input-group">
                      <label>{key.replace(/_/g, " ")}</label>
                      <input
                        type={key === "DateofCompletion" ? "date" : "text"}  // Change input type based on the field
                        value={grant[key]}
                        name={key}
                        onChange={(e) =>
                          handleInputChange(e, "completed", index, key)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="inreview_part">
            <h6>Funded & In progress, In review</h6>
            {formData.inReview.map((review, index) => (
              <div className="heading11" key={index}>
                <h6>Project In Review {index + 1}.</h6>
                <div className="input-container">
                  {Object.keys(review).map((key, i) => (
                    <div key={i} className="input-group">
                      <label>{key.replace(/_/g, " ")}</label>
                      <input
                        type={key === "Date" ? "date" : "text"}  // Change input type based on the field
                        value={review[key]}
                        name={key}
                        onChange={(e) =>
                          handleInputChange(e, "inReview", index, key)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="edit_button">
            SAVE
          </button>
        </div>
        <div className="juw_copyright">
          <p>© 2024, all rights reserved by Jinnah University for Women.</p>
        </div>
      </div>
    </div>
  );
};

export default Add_ResearchGrants;




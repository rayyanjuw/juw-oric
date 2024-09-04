// import React, { useState } from "react";
// import "./personalinfo2.css";
// import Sidebar from "../Sidebar/Sidebar";
// import NavBar from "../shared-components/navbar/NavBar";
// import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
// import { useLocation } from "react-router-dom";

// const PersonalInfo2 = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const personal_information = {
//     Name: "Administrator",
//     Email: "oricadmin@juw.edu.pk",
//     Address: "5c Nazimabad karachi",
//     CellPhone: "03331355132",
//   };

//   const highest_degree = {
//     Degree: "MS",
//     Year: "2018"
//   };

//   const latest_experience = {
//     Institution_Name: "JUW",
//     Job_Title: "Developer",
//     From_Date: "2024-06-27",
//     To_Date: "2024-06-27",
//   };

//   const [personalInfo, setPersonalInfo] = useState(personal_information);
//   const [highestDegree, setHighestDegree] = useState(highest_degree);
//   const [latestExperience, setLatestExperience] = useState(latest_experience);

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
//       path: "/",
//     },
//   ];

//   return (
//     <>
//       <div className="add_personal_info_container">
//         <Sidebar />
//         <div className="add_personal_info">
//           <div className="navbar-div">
//             <NavBar />
//           </div>
//           <div className="add-personalInfo_card">
//             <h3 className="add-personalInfo_heading">
//               Research portfolio | Personal Information
//             </h3>
//             <div className="bred-crumb">
//               <Breadcrumb items={breadCrumps} activePath={currentPath} />
//             </div>

//             <div className="personal_info_data">
//               <h3 className="add-personalInfo_heading">Personal Information</h3>
//               <div className="multiInputFields">
//                 <div className="InputGroup">
//                   <label>Name</label>
//                   <input
//                     type="text"
//                     name="Name"
//                     placeholder="Name"
//                     value={personalInfo.Name}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     name="Email"
//                     placeholder="Email"
//                     value={personalInfo.Email}
//                     disabled /* Disable the email field */
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     name="Address"
//                     placeholder="Address"
//                     value={personalInfo.Address}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>Cell Phone</label>
//                   <input
//                     type="text"
//                     name="CellPhone"
//                     placeholder="Cell Phone"
//                     value={personalInfo.CellPhone}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//               </div>

//               <h3 className="add-personalInfo_heading">Education</h3>
//               <div className="multiInputFields">
//                 <div className="InputGroup">
//                   <label>Degree</label>
//                   <input
//                     type="text"
//                     name="Degree"
//                     placeholder="Degree"
//                     value={highestDegree.Degree}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>Year</label>
//                   <input
//                     type="date"
//                     name="Year"
//                     placeholder="Year"
//                     value={highestDegree.Year}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//               </div>

//               <h3 className="add-personalInfo_heading">Experience</h3>
//               <div className="multiInputFields">
//                 <div className="InputGroup">
//                   <label>Institution</label>
//                   <input
//                     type="text"
//                     name="Institution"
//                     placeholder="Institution"
//                     value={latestExperience.Institution_Name}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>Job Title</label>
//                   <input
//                     type="text"
//                     name="JobTitle"
//                     placeholder="Job Title"
//                     value={latestExperience.Job_Title}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>From Date</label>
//                   <input
//                     type="date"
//                     name="FromDate"
//                     value={latestExperience.From_Date}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//                 <div className="InputGroup">
//                   <label>To Date</label>
//                   <input
//                     type="date"
//                     name="ToDate"
//                     value={latestExperience.To_Date}
//                     //   onChange={(e) => handleInput(e, index)}
//                   />
//                 </div>
//               </div>

//               <div className="save-btn-bg">
//                 <button className="savebut">Save</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PersonalInfo2;



import React, { useState } from "react";
import "./personalinfo2.css";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../shared-components/navbar/NavBar";
import Breadcrumb from "../shared-components/breadcrumps/BreadCrumps";
import { useLocation } from "react-router-dom";

const PersonalInfo2 = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [personalInfo, setPersonalInfo] = useState({
    Name: "",
    Email: "oricadmin@juw.edu.pk",
    Address: "",
    CellPhone: "",
  });

  const [highestDegree, setHighestDegree] = useState({
    Degree: "",
    Year: "",
  });

  const [latestExperience, setLatestExperience] = useState({
    Institution_Name: "",
    Job_Title: "",
    From_Date: "",
    To_Date: "",
  });

  console.log(personalInfo)
  console.log(latestExperience)
  console.log(highestDegree)

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
      // path: "/researchpublication",
      path: "/viewallpublications",
    },
    {
      label: "Research Grants and Contracts",
      path: "/research-grants-and-contracts",
    },
  ];

  // Handle change for personal information
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  // Handle change for highest degree
  const handleHighestDegreeChange = (e) => {
    const { name, value } = e.target;
    setHighestDegree({
      ...highestDegree,
      [name]: value,
    });
  };

  // Handle change for latest experience
  const handleLatestExperienceChange = (e) => {
    const { name, value } = e.target;
    setLatestExperience({
      ...latestExperience,
      [name]: value,
    });
  };

  return (
    <>
      <div className="add_personal_info_container">
        <Sidebar />
        <div className="add_personal_info">
          <div className="navbar-div">
            <NavBar />
          </div>
          <div className="add-personalInfo_card">
            <h3 className="add-personalInfo_heading">
              Research portfolio | Personal Information
            </h3>
            <div className="PI2_bred-crumb">
              <Breadcrumb items={breadCrumps} activePath={currentPath} />
            </div>
            {/* <div className="bred-crumb">
              <Breadcrumb items={breadCrumps} activePath={currentPath} />
            </div> */}

            <div className="personal_info_data">
              <h3 className="add-personalInfo_heading">Personal Information</h3>
              <div className="multiInputFields">
                <div className="InputGroup">
                  <label>Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={personalInfo.Name}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>Email</label>
                  <input
                    type="text"
                    name="Email"
                    placeholder="Email"
                    value={personalInfo.Email}
                    disabled /* Disable the email field */
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>Address</label>
                  <input
                    type="text"
                    name="Address"
                    placeholder="Address"
                    value={personalInfo.Address}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>Cell Phone</label>
                  <input
                    type="text"
                    name="CellPhone"
                    placeholder="Cell Phone"
                    value={personalInfo.CellPhone}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>

              <h3 className="add-personalInfo_heading">Education</h3>
              <div className="multiInputFields">
                <div className="InputGroup">
                  <label>Degree</label>
                  <input
                    type="text"
                    name="Degree"
                    placeholder="Degree"
                    value={highestDegree.Degree}
                    onChange={handleHighestDegreeChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>Year</label>
                  <input
                    type="date"
                    name="Year"
                    placeholder="Year"
                    value={highestDegree.Year}
                    onChange={handleHighestDegreeChange}
                  />
                </div>
              </div>

              <h3 className="add-personalInfo_heading">Experience</h3>
              <div className="multiInputFields">
                <div className="InputGroup">
                  <label>Institution</label>
                  <input
                    type="text"
                    name="Institution_Name"
                    placeholder="Institution"
                    value={latestExperience.Institution_Name}
                    onChange={handleLatestExperienceChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>Job Title</label>
                  <input
                    type="text"
                    name="Job_Title"
                    placeholder="Job Title"
                    value={latestExperience.Job_Title}
                    onChange={handleLatestExperienceChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>From Date</label>
                  <input
                    type="date"
                    name="From_Date"
                    value={latestExperience.From_Date}
                    onChange={handleLatestExperienceChange}
                  />
                </div>
                <div className="InputGroup">
                  <label>To Date</label>
                  <input
                    type="date"
                    name="To_Date"
                    value={latestExperience.To_Date}
                    onChange={handleLatestExperienceChange}
                  />
                </div>
              </div>

              <div className="EPI_save-btn-bg">
                <button className="EPI_savebut">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo2;

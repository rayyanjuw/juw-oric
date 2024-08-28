// responsive 2 : 23082024
import React, { useState, useEffect, useRef } from "react";
import logo1 from "../../assets/logo1.png";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GiGreekTemple } from "react-icons/gi";
import { TiDocumentText } from "react-icons/ti";
import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { BsLayoutTextSidebar } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const sideBarData = [
    {
      icon: <GiGreekTemple />,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <TiDocumentText />,
      name: "Submission",
      options: [
        {
          subitem: "Intellectual Property",
          suboptions: [
            {
              subsubitem: "View",
              subsubpath: "/viewintellectualproperty",
            },
            {
              subsubitem: "Add New",
              subsubpath: "/addintellectualproperty",
            },
          ],
        },
        {
          subitem: "Project Submission",
          suboptions: [
            {
              subsubitem: "ORIC Funded Project",
              subsuboptions: [
                {
                  subsubsubitem: "View",
                  subsubsubpath: "/view-oric-funded-projects",
                },
                {
                  subsubsubitem: "Add New",
                  subsubsubpath: "/add-oric-funded-projects",
                },
              ],
            },
            {
              subsubitem: "International/National Grants",
              subsuboptions: [
                {
                  subsubsubitem: "View",
                  subsubsubpath: "/view-international/national-grants",
                },
                {
                  subsubsubitem: "Add New",
                  subsubsubpath: "/add-international/national-grants",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      icon: <IoBriefcaseOutline />,
      name: "Research Portfolio",
      options: [
        {
          subitem: "Personal Information",
          subpath: "/researchportfolio",
        },
        {
          subitem: "Honor And Awards, Scholarship",
          subpath: "/honorandawards",
        },
        {
          subitem: "Membership",
          subpath: "/membership",
        },
        {
          subitem: "View All Publications",
          subpath: "/viewallpublications",
        },
        {
          subitem: "Add New Publications",
          subpath: "/researchpublication",
        },
        {
          subitem: "Research Grants And Contracts",
          subpath: "/research-grants-and-contracts",
        },
      ],
    },
    {
      icon: <FaRegBookmark />,
      name: "Department Research Data",
      path: "/departmental-research-data-publications-of-faculty",
    },
    {
      icon: <IoCloudDownloadOutline />,
      name: "Downloadable",
      path: "/downloadable",
    },
    {
      icon: <BsLayoutTextSidebar />,
      name: "Users & Roles",
      options: [
        {
          subitem: "View All Users",
          subpath: "/usermanagement",
        },
        {
          subitem: "Add New User",
          subpath: "/usermanagement",
        },
      ],
    },
  ];

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false); 
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderNestedOptions = (options, level = 0) => (
    <div>
      {options.map((option, idx) => (
        <Accordion
          key={idx}
          sx={{
            boxShadow: "none",
            margin: "0 !important",
            backgroundColor: "transparent",
          }}
        >
          <AccordionSummary
            expandIcon={
              option.suboptions || option.subsuboptions ? (
                <ExpandMoreIcon sx={{ color: "white" }} />
              ) : null
            }
            aria-controls={`panel${level}-${idx}-content`}
            id={`panel${level}-${idx}-header`}
            sx={{ padding: "0 10px" }}
          >
            <Typography sx={{ paddingLeft: level * 2, paddingY: 1 }}>
              <Link
                className="underline-none"
                to={
                  option.subsubpath ||
                  option.subpath ||
                  option.subpath ||
                  option.subsubsubpath
                }
              >
                {option.subsubitem || option.subitem || option.subsubsubitem}
              </Link>
            </Typography>
          </AccordionSummary>
          {(option.suboptions || option.subsuboptions) && (
            <AccordionDetails sx={{ padding: "0px 20px !important" }}>
              {option.suboptions &&
                renderNestedOptions(option.suboptions, level + 1)}
              {option.subsuboptions &&
                renderNestedOptions(option.subsuboptions, level + 1)}
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );

  return (
    <>
      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : "closed"}`}
      >
        <div className="sidebar-logo">
          <img src={logo1} alt="Logo" />
        </div>
        <hr />
        <div className="sidebar-options">
          {sideBarData?.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: "none",
                margin: 0,
                backgroundColor: "transparent",
              }}
            >
              <AccordionSummary
                expandIcon={
                  item.options ? (
                    <ExpandMoreIcon sx={{ color: "white" }} />
                  ) : null
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ padding: "0 10px" }}
              >
                <Link
                  className="underline-none d-flex align-items-center"
                  to={item.path}
                >
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                    <div className="icons-sidebar">{item.icon}</div>
                  </ListItemIcon>
                  <ListItemText
                    className="sidebar-item-text"
                    primary={item.name}
                    sx={{ margin: 0 }}
                  />
                </Link>
              </AccordionSummary>
              {item.options && (
                <AccordionDetails sx={{ padding: "0px 16px !important" }}>
                  {renderNestedOptions(item.options)}
                </AccordionDetails>
              )}
            </Accordion>
          ))}
        </div>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </>
  );
};

export default Sidebar;









// responsive 1 : 23082024
// import React, { useState, useEffect, useRef } from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const sidebarRef = useRef(null);

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/researchportfolio",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/honorandawards",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/membership",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Add New Publications",
//           subpath: "/researchpublication",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/research-grants-and-contracts",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },
//   ];

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsOpen(false); // Close the sidebar when clicking outside
//     }
//   };

//   const toggleSidebar = () => {
//     console.log("Toggle button clicked!"); 
//     setIsOpen(!isOpen);
//   };


//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);



//   const renderNestedOptions = (options, level = 0) => (
//     <div>
//       {options.map((option, idx) => (
//         <Accordion
//           key={idx}
//           sx={{
//             boxShadow: "none",
//             margin: "0 !important",
//             backgroundColor: "transparent",
//           }}
//         >
//           <AccordionSummary
//             expandIcon={
//               option.suboptions || option.subsuboptions ? (
//                 <ExpandMoreIcon sx={{ color: "white" }} />
//               ) : null
//             }
//             aria-controls={`panel${level}-${idx}-content`}
//             id={`panel${level}-${idx}-header`}
//             sx={{ padding: "0 10px" }}
//           >
//             <Typography sx={{ paddingLeft: level * 2, paddingY: 1 }}>
//               <Link
//                 className="underline-none"
//                 to={
//                   option.subsubpath ||
//                   option.subpath ||
//                   option.subpath ||
//                   option.subsubsubpath
//                 }
//               >
//                 {option.subsubitem || option.subitem || option.subsubsubitem}
//               </Link>
//             </Typography>
//           </AccordionSummary>
//           {(option.suboptions || option.subsuboptions) && (
//             <AccordionDetails sx={{ padding: "0px 20px !important" }}>
//               {option.suboptions &&
//                 renderNestedOptions(option.suboptions, level + 1)}
//               {option.subsuboptions &&
//                 renderNestedOptions(option.subsuboptions, level + 1)}
//             </AccordionDetails>
//           )}
//         </Accordion>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
//         <div className="sidebar-logo">
//           <img src={logo1} alt="Logo" />
//         </div>
//         <hr />
//         <div className="sidebar-options">
//           {sideBarData?.map((item, index) => (
//             <Accordion
//               key={index}
//               sx={{
//                 boxShadow: "none",
//                 margin: 0,
//                 backgroundColor: "transparent",
//               }}
//             >
//               <AccordionSummary
//                 expandIcon={
//                   item.options ? (
//                     <ExpandMoreIcon sx={{ color: "white" }} />
//                   ) : null
//                 }
//                 aria-controls={`panel${index}-content`}
//                 id={`panel${index}-header`}
//                 sx={{ padding: "0 10px" }}
//               >
//                 <Link
//                   className="underline-none d-flex align-items-center"
//                   to={item.path}
//                 >
//                   <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
//                     <div className="icons-sidebar">{item.icon}</div>
//                   </ListItemIcon>
//                   <ListItemText
//                     className="text-white m-0 text-12"
//                     primary={item.name}
//                     sx={{ margin: 0 }}
//                   />
//                 </Link>
//               </AccordionSummary>
//               {item.options && renderNestedOptions(item.options)}
//             </Accordion>
//           ))}
//         </div>
//       </div>
//       {/* <div className="toggle-button">
//         <button onClick={toggleSidebar}>
//           {isOpen ? <CloseIcon /> : <MenuIcon />}
//         </button>
//       </div> */}
//     </>
//   );
// };

// export default Sidebar;

// // code perfectly working
// working code
// import React from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";

// const drawerWidth = 240;

// // const renderSubOptions = (suboptions) => (
// //   <div>
// //     {suboptions.map((suboption, subIdx) => (
// //       <Accordion
// //         key={subIdx}
// //         sx={{ boxShadow: "none", margin: 0, backgroundColor: "transparent" }}
// //       >
// //         <AccordionSummary
// //           expandIcon={
// //             suboption.subsuboptions ? (
// //               <ExpandMoreIcon sx={{ color: "white" }} />
// //             ) : null
// //           }
// //           aria-controls={`panel${subIdx}-content`}
// //           id={`panel${subIdx}-header`}
// //           sx={{ padding: "0 10px" }}
// //         >
// //           <Typography sx={{ paddingLeft: 4, paddingY: 1 }}>
// //             <Link className="underline-none" to={suboption.subsubpath}>
// //               {suboption.subsubitem}
// //             </Link>
// //           </Typography>
// //         </AccordionSummary>
// //         {suboption.subsuboptions && (
// //           <AccordionDetails sx={{ padding: "0px 16px" }}>
// //             {renderSubOptions(suboption.subsuboptions)}
// //           </AccordionDetails>
// //         )}
// //       </Accordion>
// //     ))}
// //   </div>
// // );

// // const renderOptions = (options) => (
// //   <AccordionDetails sx={{ padding: "0px 16px" }}>
// //     {options.map((option, idx) => (
// //       <Accordion
// //         key={idx}
// //         sx={{ boxShadow: "none", margin: 0, backgroundColor: "transparent" }}
// //       >
// //         <AccordionSummary
// //           expandIcon={
// //             option.suboptions ? (
// //               <ExpandMoreIcon sx={{ color: "white" }} />
// //             ) : null
// //           }
// //           aria-controls={`panel${idx}-content`}
// //           id={`panel${idx}-header`}
// //           sx={{ padding: "0 10px" }}
// //         >
// //           <Typography sx={{ paddingLeft: 4, paddingY: 1 }}>
// //             <Link className="underline-none" to={option.subpath}>
// //               {option.subitem}
// //             </Link>
// //           </Typography>
// //         </AccordionSummary>
// //         {option.suboptions && (
// //           <AccordionDetails sx={{ padding: "0px 16px" }}>
// //             {renderSubOptions(option.suboptions)}
// //           </AccordionDetails>
// //         )}
// //       </Accordion>
// //     ))}
// //   </AccordionDetails>
// // );

// // const renderOptions = (options) => (
// //   <div>
// //     {options.map((option, idx) => (
// //       <Accordion key={idx} sx={{ boxShadow: "none", margin: 0, backgroundColor: "transparent" }}>
// //         <AccordionSummary
// //           expandIcon={option.suboptions || option.subsuboptions ? <ExpandMoreIcon sx={{ color: "white" }} /> : null}
// //           aria-controls={`panel${idx}-content`}
// //           id={`panel${idx}-header`}
// //           sx={{ padding: "0 10px" }}
// //         >
// //           <Typography sx={{ paddingLeft: 4, paddingY: 1 }}>
// //             <Link className="underline-none" to={option.subpath || option.subsubpath }>
// //               {option.subitem || option.subsubitem}
// //             </Link>
// //           </Typography>
// //         </AccordionSummary>
// //         {(option.suboptions || option.subsuboptions) && (
// //           <AccordionDetails sx={{ padding: "0px 16px" }}>
// //             {option.suboptions && renderOptions(option.suboptions)}
// //             {option.subsuboptions && renderOptions(option.subsuboptions)}
// //           </AccordionDetails>
// //         )}
// //       </Accordion>
// //     ))}
// //   </div>
// // );

// // Recursive function to render nested options
// const renderNestedOptions = (options, level = 0) => (
//   <div>
//     {options.map((option, idx) => (
//       <Accordion
//         key={idx}
//         sx={{
//           boxShadow: "none",
//           margin: "0 !important",
//           backgroundColor: "transparent",
//         }}
//       >
//         <AccordionSummary
//           expandIcon={
//             option.suboptions || option.subsuboptions ? (
//               <ExpandMoreIcon sx={{ color: "white" }} />
//             ) : null
//           }
//           aria-controls={`panel${level}-${idx}-content`}
//           id={`panel${level}-${idx}-header`}
//           sx={{ padding: "0 10px" }}
//         >
//           <Typography sx={{ paddingLeft: level * 2, paddingY: 1 }}>
//             <Link
//               className="underline-none"
//               to={
//                 option.subsubpath ||
//                 option.subpath ||
//                 option.subpath ||
//                 option.subsubsubpath
//               }
//             >
//               {option.subsubitem || option.subitem || option.subsubsubitem}
//             </Link>
//           </Typography>
//         </AccordionSummary>
//         {(option.suboptions || option.subsuboptions) && (
//           <AccordionDetails sx={{ padding: "0px 20px !important" }}>
//             {option.suboptions &&
//               renderNestedOptions(option.suboptions, level + 1)}
//             {option.subsuboptions &&
//               renderNestedOptions(option.subsuboptions, level + 1)}
//           </AccordionDetails>
//         )}
//       </Accordion>
//     ))}
//   </div>
// );

// const Sidebar = () => {
//   const sidebarOptionStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

// const sideBarData = [
//   {
//     icon: <GiGreekTemple />,
//     name: "Dashboard",
//     path: "/dashboard",
//   },
//   {
//     icon: <TiDocumentText />,
//     name: "Submission",
//     options: [
//       {
//         subitem: "Intellectual Property",
//         suboptions: [
//           {
//             subsubitem: "View",
//             subsubpath: "/viewintellectualproperty",
//           },
//           {
//             subsubitem: "Add New",
//             subsubpath: "/addintellectualproperty",
//           },
//         ],
//       },
//       {
//         subitem: "Project Submission",
//         suboptions: [
//           {
//             subsubitem: "ORIC Funded Project",
//             subsuboptions: [
//               {
//                 subsubsubitem: "View",
//                 subsubsubpath: "/view-oric-funded-projects",
//               },
//               {
//                 subsubsubitem: "Add New",
//                 subsubsubpath: "/add-oric-funded-projects",
//               },
//             ],
//           },
//           {
//             subsubitem: "International/National Grants",
//             subsuboptions: [
//               {
//                 subsubsubitem: "View",
//                 subsubsubpath: "/view-international/national-grants",
//               },
//               {
//                 subsubsubitem: "Add New",
//                 subsubsubpath: "/add-international/national-grants",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     icon: <IoBriefcaseOutline />,
//     name: "Research Portfolio",
//     options: [
//       {
//         subitem: "Personal Information",
//         subpath: "/researchportfolio",
//       },
//       {
//         subitem: "Honor And Awards, Scholarship",
//         subpath: "/honorandawards",
//       },
//       {
//         subitem: "Membership",
//         subpath: "/membership",
//       },
//       {
//         subitem: "View All Publications",
//         subpath: "/viewallpublications",
//       },
//       {
//         subitem: "Add New Publications",
//         subpath: "/researchpublication",
//       },
//       {
//         subitem: "Research Grants And Contracts",
//         subpath: "/research-grants-and-contracts",
//       },
//     ],
//   },
//   {
//     icon: <FaRegBookmark />,
//     name: "Department Research Data",
//     path: "/departmental-research-data-publications-of-faculty",
//   },
//   {
//     icon: <IoCloudDownloadOutline />,
//     name: "Downloadable",
//     path: "/downloadable",
//   },
//   {
//     icon: <BsLayoutTextSidebar />,
//     name: "Users & Roles",
//     options: [
//       {
//         subitem: "View All Users",
//         subpath: "/usermanagement",
//       },
//       {
//         subitem: "Add New User",
//         subpath: "/usermanagement",
//       },
//     ],
//   },
// ];

//   return (
//     <>
//       <div className="sidebar">
//         <div className="sidebar-logo">
//           <img src={logo1} alt="Logo" />
//         </div>
//         <hr />
//         <div className="sidebar-options">

//           {sideBarData?.map((item, index) => (
//             <Accordion
//               key={index}
//               sx={{
//                 boxShadow: "none",
//                 margin: 0,
//                 backgroundColor: "transparent",
//               }}
//             >
//               <AccordionSummary
//                 expandIcon={
//                   item.options ? (
//                     <ExpandMoreIcon sx={{ color: "white" }} />
//                   ) : null
//                 }
//                 aria-controls={`panel${index}-content`}
//                 id={`panel${index}-header`}
//                 sx={{ padding: "0 10px" }}
//               >
//                 <Link
//                   className="underline-none d-flex align-items-center"
//                   to={item.path}
//                 >
//                   <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
//                     <div className="icons-sidebar">{item.icon}</div>
//                   </ListItemIcon>
//                   <ListItemText
//                     className="text-white m-0 text-12"
//                     primary={item.name}
//                     sx={{ margin: 0 }}
//                   />
//                 </Link>
//               </AccordionSummary>
//               {item.options && renderNestedOptions(item.options)}
//             </Accordion>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// responsive
// import React, { useState } from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import MenuIcon from "@mui/icons-material/Menu"; // Import Menu Icon
// import CloseIcon from "@mui/icons-material/Close";

// const drawerWidth = 240;

// // const renderSubOptions = (suboptions) => (
// //   <div>
// //     {suboptions.map((suboption, subIdx) => (
// //       <Accordion
// //         key={subIdx}
// //         sx={{ boxShadow: "none", margin: 0, backgroundColor: "transparent" }}
// //       >
// //         <AccordionSummary
// //           expandIcon={
// //             suboption.subsuboptions ? (
// //               <ExpandMoreIcon sx={{ color: "white" }} />
// //             ) : null
// //           }
// //           aria-controls={`panel${subIdx}-content`}
// //           id={`panel${subIdx}-header`}
// //           sx={{ padding: "0 10px" }}
// //         >
// //           <Typography sx={{ paddingLeft: 4, paddingY: 1 }}>
// //             <Link className="underline-none" to={suboption.subsubpath}>
// //               {suboption.subsubitem}
// //             </Link>
// //           </Typography>
// //         </AccordionSummary>
// //         {suboption.subsuboptions && (
// //           <AccordionDetails sx={{ padding: "0px 16px" }}>
// //             {renderSubOptions(suboption.subsuboptions)}
// //           </AccordionDetails>
// //         )}
// //       </Accordion>
// //     ))}
// //   </div>
// // );

// // const renderOptions = (options) => (
// //   <AccordionDetails sx={{ padding: "0px 16px" }}>
// //     {options.map((option, idx) => (
// //       <Accordion
// //         key={idx}
// //         sx={{ boxShadow: "none", margin: 0, backgroundColor: "transparent" }}
// //       >
// //         <AccordionSummary
// //           expandIcon={
// //             option.suboptions ? (
// //               <ExpandMoreIcon sx={{ color: "white" }} />
// //             ) : null
// //           }
// //           aria-controls={`panel${idx}-content`}
// //           id={`panel${idx}-header`}
// //           sx={{ padding: "0 10px" }}
// //         >
// //           <Typography sx={{ paddingLeft: 4, paddingY: 1 }}>
// //             <Link className="underline-none" to={option.subpath}>
// //               {option.subitem}
// //             </Link>
// //           </Typography>
// //         </AccordionSummary>
// //         {option.suboptions && (
// //           <AccordionDetails sx={{ padding: "0px 16px" }}>
// //             {renderSubOptions(option.suboptions)}
// //           </AccordionDetails>
// //         )}
// //       </Accordion>
// //     ))}
// //   </AccordionDetails>
// // );

// // const renderOptions = (options) => (
// //   <div>
// //     {options.map((option, idx) => (
// //       <Accordion key={idx} sx={{ boxShadow: "none", margin: 0, backgroundColor: "transparent" }}>
// //         <AccordionSummary
// //           expandIcon={option.suboptions || option.subsuboptions ? <ExpandMoreIcon sx={{ color: "white" }} /> : null}
// //           aria-controls={`panel${idx}-content`}
// //           id={`panel${idx}-header`}
// //           sx={{ padding: "0 10px" }}
// //         >
// //           <Typography sx={{ paddingLeft: 4, paddingY: 1 }}>
// //             <Link className="underline-none" to={option.subpath || option.subsubpath }>
// //               {option.subitem || option.subsubitem}
// //             </Link>
// //           </Typography>
// //         </AccordionSummary>
// //         {(option.suboptions || option.subsuboptions) && (
// //           <AccordionDetails sx={{ padding: "0px 16px" }}>
// //             {option.suboptions && renderOptions(option.suboptions)}
// //             {option.subsuboptions && renderOptions(option.subsuboptions)}
// //           </AccordionDetails>
// //         )}
// //       </Accordion>
// //     ))}
// //   </div>
// // );

// // Recursive function to render nested options

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const renderNestedOptions = (options, level = 0) => (
//     <div>
//       {options.map((option, idx) => (
//         <Accordion
//           key={idx}
//           sx={{
//             boxShadow: "none",
//             margin: "0 !important",
//             backgroundColor: "transparent",
//           }}
//         >
//           <AccordionSummary
//             expandIcon={
//               option.suboptions || option.subsuboptions ? (
//                 <ExpandMoreIcon sx={{ color: "white" }} />
//               ) : null
//             }
//             aria-controls={`panel${level}-${idx}-content`}
//             id={`panel${level}-${idx}-header`}
//             sx={{ padding: "0 10px" }}
//           >
//             <Typography sx={{ paddingLeft: level * 2, paddingY: 1 }}>
//               <Link
//                 className="underline-none"
//                 to={
//                   option.subsubpath ||
//                   option.subpath ||
//                   option.subpath ||
//                   option.subsubsubpath
//                 }
//               >
//                 {option.subsubitem || option.subitem || option.subsubsubitem}
//               </Link>
//             </Typography>
//           </AccordionSummary>
//           {(option.suboptions || option.subsuboptions) && (
//             <AccordionDetails sx={{ padding: "0px 20px !important" }}>
//               {option.suboptions &&
//                 renderNestedOptions(option.suboptions, level + 1)}
//               {option.subsuboptions &&
//                 renderNestedOptions(option.subsuboptions, level + 1)}
//             </AccordionDetails>
//           )}
//         </Accordion>
//       ))}
//     </div>
//   );

//   const sidebarOptionStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/researchportfolio",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/honorandawards",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/membership",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Add New Publications",
//           subpath: "/researchpublication",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/research-grants-and-contracts",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },
//   ];

//   return (
//     <>
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <div className="sidebar-logo">
//           <img src={logo1} alt="Logo" />
//         </div>
//         <hr />
//         <div className="sidebar-options">
//           {sideBarData?.map((item, index) => (
//             <Accordion
//               key={index}
//               sx={{
//                 boxShadow: "none",
//                 margin: 0,
//                 backgroundColor: "transparent",
//               }}
//             >
//               <AccordionSummary
//                 expandIcon={
//                   item.options ? (
//                     <ExpandMoreIcon sx={{ color: "white" }} />
//                   ) : null
//                 }
//                 aria-controls={`panel${index}-content`}
//                 id={`panel${index}-header`}
//                 sx={{ padding: "0 10px" }}
//               >
//                 <Link
//                   className="underline-none d-flex align-items-center"
//                   to={item.path}
//                 >
//                   <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
//                     <div className="icons-sidebar">{item.icon}</div>
//                   </ListItemIcon>
//                   <ListItemText
//                     className="text-white m-0 text-12"
//                     primary={item.name}
//                     sx={{ margin: 0 }}
//                   />
//                 </Link>
//               </AccordionSummary>
//               {item.options && renderNestedOptions(item.options)}
//             </Accordion>
//           ))}
//         </div>
//       </div>
//       <div className="toggle-button">
//         <button onClick={toggleSidebar}>
//           {isOpen ? <CloseIcon /> : <MenuIcon />}
//         </button>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa";
// import { BsLayoutTextSidebar } from "react-icons/bs";

// const Sidebar = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [expandedSubIndex, setExpandedSubIndex] = useState(null);
//   const [expandedSubSubIndex, setExpandedSubSubIndex] = useState(null);

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/researchportfolio",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/honorandawards",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/membership",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Add New Publications",
//           subpath: "/researchpublication",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/research-grants-and-contracts",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },
//   ];

//   const handleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//     setExpandedSubIndex(null); // Collapse all suboptions when a new main item is expanded
//     setExpandedSubSubIndex(null); // Collapse all subsuboptions when a new main item is expanded
//   };

//   const handleSubExpand = (subIndex) => {
//     setExpandedSubIndex(expandedSubIndex === subIndex ? null : subIndex);
//     setExpandedSubSubIndex(null); // Collapse subsuboptions when a new suboption is expanded
//   };

//   const handleSubSubExpand = (subSubIndex) => {
//     setExpandedSubSubIndex(expandedSubSubIndex === subSubIndex ? null : subSubIndex);
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src={logo1} alt="Logo" />
//       </div>
//       <hr />
//       <div className="sidebar-options">
//         {sideBarData.map((item, index) => (
//           <div key={index} className="sidebar-item">
//             {item.path ? (
//               <Link to={item.path} className="sidebar-link">
//                 <div className="sidebar-summary">
//                   <div className="sidebar-icon">{item.icon}</div>
//                   <div className="sidebar-text">{item.name}</div>
//                 </div>
//               </Link>
//             ) : (
//               <div
//                 className={`sidebar-summary ${expandedIndex === index ? "expanded" : ""}`}
//                 onClick={() => handleExpand(index)}
//               >
//                 <div className="sidebar-icon">{item.icon}</div>
//                 <div className="sidebar-text">{item.name}</div>
//                 {item.options && (
//                   <div className="sidebar-expand-icon">
//                     {expandedIndex === index ? "-" : "+"}
//                   </div>
//                 )}
//               </div>
//             )}
//             {item.options && expandedIndex === index && (
//               <div className="sidebar-details">
//                 {item.options.map((option, subIndex) => (
//                   <div key={subIndex} className="sidebar-subitem">
//                     <div
//                       className={`sidebar-subsummary ${expandedSubIndex === subIndex ? "expanded" : ""}`}
//                       onClick={() => handleSubExpand(subIndex)}
//                     >
//                       <Link to={option.subpath || "#"} className="sidebar-link">
//                         {option.subitem}
//                       </Link>
//                       {option.suboptions && (
//                         <div className="sidebar-expand-icon">
//                           {expandedSubIndex === subIndex ? "-" : "+"}
//                         </div>
//                       )}
//                     </div>
//                     {option.suboptions && expandedSubIndex === subIndex && (
//                       <div className="sidebar-subdetails">
//                         {option.suboptions.map((suboption, subSubIndex) => (
//                           <div key={subSubIndex} className="sidebar-sub-subitem">
//                             <div
//                               className={`sidebar-subsubsummary ${expandedSubSubIndex === subSubIndex ? "expanded" : ""}`}
//                               onClick={() => handleSubSubExpand(subSubIndex)}
//                             >
//                               <Link to={suboption.subsubpath || "#"} className="sidebar-link">
//                                 {suboption.subsubitem}
//                               </Link>
//                               {suboption.subsuboptions && (
//                                 <div className="sidebar-expand-icon">
//                                   {expandedSubSubIndex === subSubIndex ? "-" : "+"}
//                                 </div>
//                               )}
//                             </div>
//                             {suboption.subsuboptions && expandedSubSubIndex === subSubIndex && (
//                               <div className="sidebar-subsubdetails">
//                                 {suboption.subsuboptions.map((subsuboption, subsubsubIndex) => (
//                                   <div key={subsubsubIndex} className="sidebar-subsub-subitem">
//                                     <Link to={subsuboption.subsubsubpath} className="sidebar-link">
//                                       {subsuboption.subsubsubitem}
//                                     </Link>
//                                   </div>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// react
// import React, { useState } from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   GiGreekTemple
// } from "react-icons/gi";
// import {
//   TiDocumentText
// } from "react-icons/ti";
// import {
//   IoBriefcaseOutline,
//   IoCloudDownloadOutline
// } from "react-icons/io5";
// import {
//   FaRegBookmark
// } from "react-icons/fa";
// import {
//   BsLayoutTextSidebar
// } from "react-icons/bs";

// const drawerWidth = 240;

// const Sidebar = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const sidebarOptionStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       path: "/researchpublication",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/researchportfolio",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/honorandawards",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/membership",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Add New Publications",
//           subpath: "/researchpublication",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/research-grants-and-contracts",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       path: "/usermanagement",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },
//   ];

//   const handleExpand = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src={logo1} alt="Logo" />
//       </div>
//       <hr />
//       <div className="sidebar-options">
//         {sideBarData.map((item, index) => (
//           <div key={index} className="sidebar-item">
//             <div
//               className={`sidebar-summary ${expandedIndex === index ? "expanded" : ""}`}
//               onClick={() => handleExpand(index)}
//             >
//               <div className="sidebar-icon">{item.icon}</div>
//               <div className="sidebar-text">{item.name}</div>
//               {item.options && (
//                 <div className="sidebar-expand-icon">
//                   {expandedIndex === index ? "-" : "+"}
//                 </div>
//               )}
//             </div>
//             {item.options && expandedIndex === index && (
//               <div className="sidebar-details">
//                 {item.options.map((option, idx) => (
//                   <div key={idx} className="sidebar-subitem">
//                     <Link to={option.subpath} className="sidebar-link">
//                       {option.subitem}
//                     </Link>
//                     {option.suboptions && (
//                       <div className="sidebar-suboptions">
//                         {option.suboptions.map((suboption, subidx) => (
//                           <div key={subidx} className="sidebar-sub-subitem">
//                             <Link to={suboption.subsubpath} className="sidebar-link">
//                               {suboption.subsubitem}
//                             </Link>
//                             {suboption.subsuboptions && (
//                               <div className="sidebar-subsuboptions">
//                                 {suboption.subsuboptions.map((subsuboption, subsubidx) => (
//                                   <div key={subsubidx} className="sidebar-subsub-subitem">
//                                     <Link to={subsuboption.subsubsubpath} className="sidebar-link">
//                                       {subsuboption.subsubsubitem}
//                                     </Link>
//                                   </div>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// waste
// import React from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";

// const drawerWidth = 240;

// const Sidebar = () => {
//   const sidebarOptionStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       path: "/researchpublication",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       path: "/usermanagement",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },
//   ];

//   return (
//     <>
//       <div className="sidebar">
//         <div className="sidebar-logo">
//           <img src={logo1} alt="Logo" />
//         </div>
//         <hr />
//         <div className="sidebar-options">
//           {sideBarData?.map((item, index) => (
//             <div>
//               <Accordion
//                 key={index}
//                 sx={{ boxShadow: "none", margin: 0 }}
//                 className="bg-transparent"
//               >
//                 <AccordionSummary
//                   expandIcon={
//                     item.options ? (
//                       <ExpandMoreIcon sx={{ color: "white" }} />
//                     ) : null
//                   }
//                   aria-controls={`panel${index}-content`}
//                   id={`panel${index}-header`}
//                   sx={{ padding: "0 10px" }}
//                   className="bg-transparent d-flex align-items-center "
//                 >
//                   <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
//                     <div className="icons-sidebar">{item.icon}</div>
//                   </ListItemIcon>
//                   <ListItemText
//                     className="text-white m-0 text-12"
//                     primary={item.name}
//                     sx={{ margin: 0 }}
//                   />
//                 </AccordionSummary>
//                 {item.options && (
//                   <AccordionDetails sx={{ padding: "0px 16px" }}>
//                     {item.options.map((option, idx) => (
//                       <Typography
//                         key={idx}
//                         sx={{ paddingLeft: 4, paddingY: 1 }}
//                       >
//                         <Link className="underline-none" to={option.subpath}>
//                           {option.subitem}
//                         </Link>
//                       </Typography>
//                     ))}
//                   </AccordionDetails>
//                 )}
//               </Accordion>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// chatgpt
// import React from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";

// const Sidebar = () => {
//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       path: "/researchpublication",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       path: "/usermanagement",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },

//   ];

//   return (
//     <>
//       <div className="sidebar">
//         <div className="sidebar-logo">
//           <img src={logo1} alt="Logo" />
//         </div>
//         <hr />
//         <div className="sidebar-options">
//           {sideBarData.map((item, index) => (
//             <Accordion
//               key={index}
//               sx={{ boxShadow: "none", margin: 0 }}
//               className="bg-transparent"
//             >
//               <AccordionSummary
//                 expandIcon={
//                   item.options ? (
//                     <ExpandMoreIcon sx={{ color: "#FFF" }} />
//                   ) : null
//                 }
//                 aria-controls={`panel${index}-content`}
//                 id={`panel${index}-header`}
//                 sx={{ padding: "0 10px" }}
//                 className="bg-transparent d-flex align-items-center "
//               >
//                 <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
//                   <div className="icons-sidebar">{item.icon}</div>
//                 </ListItemIcon>
//                 <ListItemText
//                   className="text-white m-0 text-12"
//                   primary={item.name}
//                   sx={{ margin: 0 }}
//                 />
//               </AccordionSummary>
//               {item.options && (
//                 <AccordionDetails sx={{ padding: "0px 16px" }}>
//                   {item.options.map((option, idx) => (
//                     <Accordion
//                       key={idx}
//                       sx={{ boxShadow: "none", margin: 0 }}
//                       className="bg-transparent"
//                     >
//                       <AccordionSummary
//                         expandIcon={
//                           option.suboptions ? (
//                             // <ExpandMoreIcon sx={{ color: "white" }} />
//                             <ExpandMoreIcon sx={{ color: "#FFF" }} />
//                           ) : null
//                         }
//                         aria-controls={`panel${index}-${idx}-content`}
//                         id={`panel${index}-${idx}-header`}
//                         sx={{ paddingLeft: "24px" }}
//                       >
//                         <Typography>{option.subitem}</Typography>
//                       </AccordionSummary>
//                       {option.suboptions && (
//                         <AccordionDetails sx={{ padding: "0px 16px" }}>
//                           {option.suboptions.map((suboption, subidx) => (
//                             <Accordion
//                               key={subidx}
//                               sx={{ boxShadow: "none", margin: 0 }}
//                               className="bg-transparent"
//                             >
//                               <AccordionSummary
//                                 expandIcon={
//                                   suboption.subsuboptions ? (
//                                     // <ExpandMoreIcon sx={{ color: "white" }} />
//                                     <ExpandMoreIcon sx={{ color: "#FFF" }} />
//                                   ) : null
//                                 }
//                                 aria-controls={`panel${index}-${idx}-${subidx}-content`}
//                                 id={`panel${index}-${idx}-${subidx}-header`}
//                                 sx={{ paddingLeft: "48px" }}
//                               >
//                                 <Typography>{suboption.subsubitem}</Typography>
//                               </AccordionSummary>
//                               {suboption.subsuboptions && (
//                                 <AccordionDetails sx={{ padding: "0px 16px" }}>
//                                   {suboption.subsuboptions.map(
//                                     (subsuboption, subsubidx) => (
//                                       <Typography
//                                         key={subsubidx}
//                                         sx={{ paddingLeft: "72px" }}
//                                       >
//                                         <Link
//                                           className="underline-none"
//                                           to={subsuboption.subsubsubpath}
//                                         >
//                                           {subsuboption.subsubsubitem}
//                                         </Link>
//                                       </Typography>
//                                     )
//                                   )}
//                                 </AccordionDetails>
//                               )}
//                             </Accordion>
//                           ))}
//                         </AccordionDetails>
//                       )}
//                     </Accordion>
//                   ))}
//                 </AccordionDetails>
//               )}
//             </Accordion>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// current chatgpt
// import React from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   ListItemIcon,
//   ListItemText,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";

// const Sidebar = () => {
//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: "Dashboard",
//       path: "/dashboard",
//     },
//     {
//       icon: <TiDocumentText />,
//       name: "Submission",
//       options: [
//         {
//           subitem: "Intellectual Property",
//           suboptions: [
//             {
//               subsubitem: "View",
//               subsubpath: "/viewintellectualproperty",
//             },
//             {
//               subsubitem: "Add New",
//               subsubpath: "/addintellectualproperty",
//             },
//           ],
//         },
//         {
//           subitem: "Project Submission",
//           suboptions: [
//             {
//               subsubitem: "ORIC Funded Project",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-oric-funded-projects",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-oric-funded-projects",
//                 },
//               ],
//             },
//             {
//               subsubitem: "International/National Grants",
//               subsuboptions: [
//                 {
//                   subsubsubitem: "View",
//                   subsubsubpath: "/view-international/national-grants",
//                 },
//                 {
//                   subsubsubitem: "Add New",
//                   subsubsubpath: "/add-international/national-grants",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: "Research Portfolio",
//       path: "/researchpublication",
//       options: [
//         {
//           subitem: "Personal Information",
//           subpath: "/",
//         },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/",
//         },
//         {
//           subitem: "Membership",
//           subpath: "/",
//         },
//         {
//           subitem: "View All Publications",
//           subpath: "/viewallpublications",
//         },
//         {
//           subitem: "Research Grants And Contracts",
//           subpath: "/",
//         },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: "Department Research Data",
//       path: "/departmental-research-data-publications-of-faculty",
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: "Downloadable",
//       path: "/downloadable",
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: "Users & Roles",
//       path: "/usermanagement",
//       options: [
//         {
//           subitem: "View All Users",
//           subpath: "/usermanagement",
//         },
//         {
//           subitem: "Add New User",
//           subpath: "/usermanagement",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src={logo1} alt="Logo" />
//       </div>
//       <hr />
//       <div className="sidebar-options">
//         {sideBarData.map((item, index) => (
//           <Accordion
//             key={index}
//             className="accordion"
//             sx={{ boxShadow: "none", margin: 0 }}
//             // sx={{ margin: 0 }}
//           >
//             <AccordionSummary
//               expandIcon={item.options ? <ExpandMoreIcon className="expand-icon" /> : null}
//               aria-controls={`panel${index}-content`}
//               id={`panel${index}-header`}
//               sx={{ padding: "0 10px" }}
//               className="accordion-summary"
//             >
//               <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
//                 <div className="icons-sidebar">{item.icon}</div>
//               </ListItemIcon>
//               <ListItemText
//                 primary={item.name}
//                 className="main-heading"
//               />
//             </AccordionSummary>
//             {item.options && (
//               <AccordionDetails className="accordion-details">
//                 {item.options.map((option, idx) => (
//                   <Accordion key={idx} className="sub-accordion">
//                     <AccordionSummary
//                       expandIcon={option.suboptions ? <ExpandMoreIcon className="expand-icon" /> : null}
//                       aria-controls={`panel${index}-${idx}-content`}
//                       id={`panel${index}-${idx}-header`}
//                       className="sub-accordion-summary"
//                     >
//                       <Typography className="sub-heading">{option.subitem}</Typography>
//                     </AccordionSummary>
//                     {option.suboptions && (
//                       <AccordionDetails className="accordion-details">
//                         {option.suboptions.map((suboption, subidx) => (
//                           <Accordion key={subidx} className="sub-sub-accordion">
//                             <AccordionSummary
//                               expandIcon={suboption.subsuboptions ? <ExpandMoreIcon className="expand-icon" /> : null}
//                               aria-controls={`panel${index}-${idx}-${subidx}-content`}
//                               id={`panel${index}-${idx}-${subidx}-header`}
//                               className="sub-sub-accordion-summary"
//                             >
//                               <Typography className="sub-sub-heading">{suboption.subsubitem}</Typography>
//                             </AccordionSummary>
//                             {suboption.subsuboptions && (
//                               <AccordionDetails className="accordion-details">
//                                 {suboption.subsuboptions.map((subsuboption, subsubidx) => (
//                                   <Typography key={subsubidx} className="sub-sub-sub-heading">
//                                     <Link
//                                       className="underline-none"
//                                       to={subsuboption.subsubsubpath}
//                                     >
//                                       {subsuboption.subsubsubitem}
//                                     </Link>
//                                   </Typography>
//                                 ))}
//                               </AccordionDetails>
//                             )}
//                           </Accordion>
//                         ))}
//                       </AccordionDetails>
//                     )}
//                   </Accordion>
//                 ))}
//               </AccordionDetails>
//             )}
//           </Accordion>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

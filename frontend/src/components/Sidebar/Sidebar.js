// perfect
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
//   Divider,
//   Box,
// } from '@mui/material';
// import {
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material';
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from '../../assets/logo1.png';
// import './sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState({});

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubMenuClick = (name) => {
//     setOpenSubMenu((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: 'Dashboard',
//       path: '/dashboard',
//     },
//     {
//       icon: <TiDocumentText />,
//       name: 'Submission',
//       options: [
//         {
//           subitem: 'Intellectual Property',
//           suboptions: [
//             { subsubitem: 'View', subsubpath: '/viewintellectualproperty' },
//             { subsubitem: 'Add New', subsubpath: '/addintellectualproperty' },
//           ],
//         },
//         {
//           subitem: 'Project Submission',
//           suboptions: [
//             {
//               subsubitem: 'ORIC Funded Project',
//               subsuboptions: [
//                 { subsubsubitem: 'View', subsubsubpath: '/view-oric-funded-projects' },
//                 { subsubsubitem: 'Add New', subsubsubpath: '/add-oric-funded-projects' },
//               ],
//             },
//             {
//               subsubitem: 'International/National Grants',
//               subsuboptions: [
//                 { subsubsubitem: 'View', subsubsubpath: '/view-international/national-grants' },
//                 { subsubsubitem: 'Add New', subsubsubpath: '/add-international/national-grants' },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: 'Research Portfolio',
//       options: [
//         { subitem: 'Personal Information', subpath: '/researchportfolio' },
//         { subitem: 'Honor And Awards, Scholarship', subpath: '/honorandawards' },
//         { subitem: 'Membership', subpath: '/membership' },
//         { subitem: 'View All Publications', subpath: '/viewallpublications' },
//         { subitem: 'Add New Publications', subpath: '/researchpublication' },
//         { subitem: 'Research Grants And Contracts', subpath: '/research-grants-and-contracts' },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: 'Department Research Data',
//       path: '/departmental-research-data-publications-of-faculty',
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: 'Downloadable',
//       path: '/downloadable',
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: 'Users & Roles',
//       options: [
//         { subitem: 'View All Users', subpath: '/usermanagement' },
//         { subitem: 'Add New User', subpath: '/usermanagement' },
//       ],
//     },
//   ];

//   return (
//     <>
//       <IconButton onClick={toggleSidebar} sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2 }}>
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>

//       <Drawer
//         variant="persistent"
//         anchor="left"
//         open={isOpen}
//         sx={{ width: isOpen ? 250 : 60, transition: 'width 0.3s' }}
//       >
//         <Box sx={{ backgroundColor: '#0037a5', height: '100%', padding: '10px' }}>
//           <div className="sidebar-logo">
//             <img src={logo1} alt="Logo" style={{ width: '80%', margin: 'auto' }} />
//           </div>
//           <Divider sx={{ my: 1 }} />
//           <List>
//             {sideBarData.map((item, index) => (
//               <React.Fragment key={index}>
//                 <ListItem
//                   button
//                   component={Link}
//                   to={item.path || '#'}
//                   onClick={() => item.options && handleSubMenuClick(item.name)}
//                   sx={{ color: 'white' }}
//                 >
//                   <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.name} />
//                   {item.options ? openSubMenu[item.name] ? <ExpandLess /> : <ExpandMore /> : null}
//                 </ListItem>
//                 {item.options && (
//                   <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {item.options.map((subItem, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <ListItem
//                             button
//                             component={Link}
//                             to={subItem.subpath || '#'}
//                             onClick={() => subItem.suboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}`)}
//                             sx={{ pl: 4, color: 'white'}}
//                           >
//                             <ListItemText primary={subItem.subitem} primaryTypographyProps={{ fontSize: '0.875rem' }}/>
//                             {subItem.suboptions ? openSubMenu[`${item.name}-${subItem.subitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                           </ListItem>
//                           {subItem.suboptions && (
//                             <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}`]} timeout="auto" unmountOnExit>
//                               <List component="div" disablePadding>
//                                 {subItem.suboptions.map((subSubItem, subSubIndex) => (
//                                   <React.Fragment key={subSubIndex}>
//                                     <ListItem
//                                       button
//                                       component={Link}
//                                       to={subSubItem.subsubpath || '#'}
//                                       onClick={() => subSubItem.subsuboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`)}
//                                       sx={{ pl: 6, color: 'white' }}
//                                     >
//                                       <ListItemText primary={subSubItem.subsubitem} primaryTypographyProps={{ fontSize: '0.875rem' }}/>
//                                       {subSubItem.subsuboptions ? openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                                     </ListItem>
//                                     {subSubItem.subsuboptions && (
//                                       <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`]} timeout="auto" unmountOnExit>
//                                         <List component="div" disablePadding>
//                                           {subSubItem.subsuboptions.map((subSubSubItem, subSubSubIndex) => (
//                                             <ListItem
//                                               button
//                                               component={Link}
//                                               to={subSubSubItem.subsubsubpath || '#'}
//                                               key={subSubSubIndex}
//                                               sx={{ pl: 8, color: 'white' }}
//                                             >
//                                               <ListItemText primary={subSubSubItem.subsubsubitem} primaryTypographyProps={{ fontSize: '0.875rem' }}/>
//                                             </ListItem>
//                                           ))}
//                                         </List>
//                                       </Collapse>
//                                     )}
//                                   </React.Fragment>
//                                 ))}
//                               </List>
//                             </Collapse>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;

// current code
// import React, { useState, useEffect, useRef } from "react";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   ListItemIcon,
//   ListItemText,
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
//   const [isOpen, setIsOpen] = useState(false);
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
//       setIsOpen(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
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
//       <div
//         ref={sidebarRef}
//         className={`sidebar ${isOpen ? "open" : "closed"}`}
//       >
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
//                     className="sidebar-item-text"
//                     primary={item.name}
//                     sx={{ margin: 0 }}
//                   />
//                 </Link>
//               </AccordionSummary>
//               {item.options && (
//                 <AccordionDetails sx={{ padding: "0px 16px !important" }}>
//                   {renderNestedOptions(item.options)}
//                 </AccordionDetails>
//               )}
//             </Accordion>
//           ))}
//         </div>
//       </div>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </button>
//     </>
//   );
// };

// export default Sidebar;

// updated : sidebar issues resolve for all large screenss
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
//   Divider,
//   Box,
// } from '@mui/material';
// import {
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material';
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from '../../assets/logo1.png';
// import './sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState({});
//   const sidebarRef = useRef(null);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubMenuClick = (name) => {
//     setOpenSubMenu((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: 'Dashboard',
//       path: '/dashboard',
//     },
//     {
//       icon: <TiDocumentText />,
//       name: 'Submission',
//       options: [
//         {
//           subitem: 'Intellectual Property',
//           suboptions: [
//             { subsubitem: 'View', subsubpath: '/viewintellectualproperty' },
//             { subsubitem: 'Add New', subsubpath: '/addintellectualproperty' },
//           ],
//         },
//         {
//           subitem: 'Project Submission',
//           suboptions: [
//             {
//               subsubitem: 'ORIC Funded Project',
//               subsuboptions: [
//                 { subsubsubitem: 'View', subsubsubpath: '/view-oric-funded-projects' },
//                 { subsubsubitem: 'Add New', subsubsubpath: '/add-oric-funded-projects' },
//               ],
//             },
//             {
//               subsubitem: 'International/National Grants',
//               subsuboptions: [
//                 { subsubsubitem: 'View', subsubsubpath: '/view-international/national-grants' },
//                 { subsubsubitem: 'Add New', subsubsubpath: '/add-international/national-grants' },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: 'Research Portfolio',
//       options: [
//         { subitem: 'Personal Information', subpath: '/researchportfolio' },
//         { subitem: 'Honor And Awards, Scholarship', subpath: '/honorandawards' },
//         { subitem: 'Membership', subpath: '/membership' },
//         { subitem: 'View All Publications', subpath: '/viewallpublications' },
//         { subitem: 'Add New Publications', subpath: '/researchpublication' },
//         { subitem: 'Research Grants And Contracts', subpath: '/research-grants-and-contracts' },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: 'Department Research Data',
//       path: '/departmental-research-data-publications-of-faculty',
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: 'Downloadable',
//       path: '/downloadable',
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: 'Users & Roles',
//       options: [
//         { subitem: 'View All Users', subpath: '/usermanagement' },
//         { subitem: 'Add New User', subpath: '/usermanagement' },
//       ],
//     },
//   ];

//   return (
//     <>
//       <IconButton
//         ref={sidebarRef}
//         onClick={toggleSidebar}
//         sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2, display: { lg: 'none' } }}
//       >
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>

//       <Drawer
//         variant={window.innerWidth >= 768 ? "permanent" : "persistent"}
//         anchor="left"
//         open={isOpen || window.innerWidth >= 768}
//         sx={{
//           width: isOpen || window.innerWidth >= 768 ? 250 : 0,
//           transition: 'width 0.3s',
//           [`& .MuiDrawer-paper`]: {
//             width: isOpen || window.innerWidth >= 768 ? 250 : 0,
//             boxSizing: 'border-box',
//           },
//         }}
//       >
//         <Box sx={{ backgroundColor: '#0037a5', height: '100%', padding: '10px' }}>
//           <div className="sidebar-logo">
//             <img src={logo1} alt="Logo" style={{ width: '80%', margin: 'auto' }} />
//           </div>

//           <Divider sx={{ my: 1 }} />
//           <List>
//             {sideBarData.map((item, index) => (
//               <React.Fragment key={index}>
//                 <ListItem
//                   button
//                   component={Link}
//                   to={item.path || '#'}
//                   onClick={() => item.options && handleSubMenuClick(item.name)}
//                   sx={{ color: 'white' }}
//                 >
//                   <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                   {item.options ? openSubMenu[item.name] ? <ExpandLess /> : <ExpandMore /> : null}
//                 </ListItem>
//                 {item.options && (
//                   <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {item.options.map((subItem, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <ListItem
//                             button
//                             component={Link}
//                             to={subItem.subpath || '#'}
//                             onClick={() => subItem.suboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}`)}
//                             sx={{ pl: 4, color: 'white' }}
//                           >
//                             <ListItemText primary={subItem.subitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                             {subItem.suboptions ? openSubMenu[`${item.name}-${subItem.subitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                           </ListItem>
//                           {subItem.suboptions && (
//                             <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}`]} timeout="auto" unmountOnExit>
//                               <List component="div" disablePadding>
//                                 {subItem.suboptions.map((subSubItem, subSubIndex) => (
//                                   <React.Fragment key={subSubIndex}>
//                                     <ListItem
//                                       button
//                                       component={Link}
//                                       to={subSubItem.subsubpath || '#'}
//                                       onClick={() => subSubItem.subsuboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`)}
//                                       sx={{ pl: 6, color: 'white' }}
//                                     >
//                                       <ListItemText primary={subSubItem.subsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                                       {subSubItem.subsuboptions ? openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                                     </ListItem>
//                                     {subSubItem.subsuboptions && (
//                                       <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`]} timeout="auto" unmountOnExit>
//                                         <List component="div" disablePadding>
//                                           {subSubItem.subsuboptions.map((subSubSubItem, subSubSubIndex) => (
//                                             <ListItem
//                                               button
//                                               component={Link}
//                                               to={subSubSubItem.subsubsubpath || '#'}
//                                               key={subSubSubIndex}
//                                               sx={{ pl: 8, color: 'white' }}
//                                             >
//                                               <ListItemText primary={subSubSubItem.subsubsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                                             </ListItem>
//                                           ))}
//                                         </List>
//                                       </Collapse>
//                                     )}
//                                   </React.Fragment>
//                                 ))}
//                               </List>
//                             </Collapse>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </button>
//     </>
//   );
// };

// export default Sidebar;

// updated : perfect for now just navigation issue in small devices
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
//   Divider,
//   Box,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material';
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from '../../assets/logo1.png';
// import './sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState({});
//   const sidebarRef = useRef(null);
//   const isMobile = useMediaQuery('(max-width: 768px)');

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   console.log(isMobile)

//   const handleSubMenuClick = (name) => {
//     setOpenSubMenu((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

// const sideBarData = [
//   {
//     icon: <GiGreekTemple />,
//     name: 'Dashboard',
//     path: '/dashboard',
//   },
//   {
//     icon: <TiDocumentText />,
//     name: 'Submission',
//     options: [
//       {
//         subitem: 'Intellectual Property',
//         suboptions: [
//           { subsubitem: 'View', subsubpath: '/viewintellectualproperty' },
//           { subsubitem: 'Add New', subsubpath: '/addintellectualproperty' },
//         ],
//       },
//       {
//         subitem: 'Project Submission',
//         suboptions: [
//           {
//             subsubitem: 'ORIC Funded Project',
//             subsuboptions: [
//               { subsubsubitem: 'View', subsubsubpath: '/view-oric-funded-projects' },
//               { subsubsubitem: 'Add New', subsubsubpath: '/add-oric-funded-projects' },
//             ],
//           },
//           {
//             subsubitem: 'International/National Grants',
//             subsuboptions: [
//               { subsubsubitem: 'View', subsubsubpath: '/view-international/national-grants' },
//               { subsubsubitem: 'Add New', subsubsubpath: '/add-international/national-grants' },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     icon: <IoBriefcaseOutline />,
//     name: 'Research Portfolio',
//     options: [
//       { subitem: 'Personal Information', subpath: '/researchportfolio' },
//       { subitem: 'Honor And Awards, Scholarship', subpath: '/honorandawards' },
//       { subitem: 'Membership', subpath: '/membership' },
//       { subitem: 'View All Publications', subpath: '/viewallpublications' },
//       { subitem: 'Add New Publications', subpath: '/researchpublication' },
//       { subitem: 'Research Grants And Contracts', subpath: '/research-grants-and-contracts' },
//     ],
//   },
//   {
//     icon: <FaRegBookmark />,
//     name: 'Department Research Data',
//     path: '/departmental-research-data-publications-of-faculty',
//   },
//   {
//     icon: <IoCloudDownloadOutline />,
//     name: 'Downloadable',
//     path: '/downloadable',
//   },
//   {
//     icon: <BsLayoutTextSidebar />,
//     name: 'Users & Roles',
//     options: [
//       { subitem: 'View All Users', subpath: '/usermanagement' },
//       { subitem: 'Add New User', subpath: '/usermanagement' },
//     ],
//   },
// ];

//   return (
//     <>
//       <IconButton
//         ref={sidebarRef}
//         onClick={toggleSidebar}
//         sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2, display: { lg: 'none' } }}
//       >
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>

//       <Drawer
//         variant={isMobile ? "temporary" : "permanent"}
//         anchor="left"
//         open={isOpen || !isMobile}
//         onClose={() => isMobile && setIsOpen(false)}
//         sx={{
//           width: isOpen || !isMobile ? 250 : 0,
//           transition: 'width 0.3s',
//           [`& .MuiDrawer-paper`]: {
//             width: isOpen || !isMobile ? 250 : 0,
//             boxSizing: 'border-box',
//           },
//         }}
//       >
//         <Box sx={{ backgroundColor: '#0037a5', height: '100%', padding: '10px' }}>
//           <div className="sidebar-logo">
//             <img src={logo1} alt="Logo" style={{ width: '80%', margin: 'auto' }} />
//           </div>

//           <Divider sx={{ my: 1 }} />
//           <List>
//             {sideBarData.map((item, index) => (
//               <React.Fragment key={index}>
//                 <ListItem
//                   button
//                   component={Link}
//                   to={item.path || '#'}
//                   // onClick={() => item.options && handleSubMenuClick(item.name)}
//                   onClick={() => {
//                     console.log(`Navigating to ${item.path}`)
//                     item.options && handleSubMenuClick(item.name)}}
//                   sx={{ color: 'white' }}
//                 >
//                   <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                   {item.options ? openSubMenu[item.name] ? <ExpandLess /> : <ExpandMore /> : null}
//                 </ListItem>
//                 {item.options && (
//                   <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {item.options.map((subItem, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <ListItem
//                             button
//                             component={Link}
//                             to={subItem.subpath || '#'}
//                             onClick={() => subItem.suboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}`)}
//                             sx={{ pl: 4, color: 'white' }}
//                           >
//                             <ListItemText primary={subItem.subitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                             {subItem.suboptions ? openSubMenu[`${item.name}-${subItem.subitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                           </ListItem>
//                           {subItem.suboptions && (
//                             <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}`]} timeout="auto" unmountOnExit>
//                               <List component="div" disablePadding>
//                                 {subItem.suboptions.map((subSubItem, subSubIndex) => (
//                                   <React.Fragment key={subSubIndex}>
//                                     <ListItem
//                                       button
//                                       component={Link}
//                                       to={subSubItem.subsubpath || '#'}
//                                       onClick={() => subSubItem.subsuboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`)}
//                                       sx={{ pl: 6, color: 'white' }}
//                                     >
//                                       <ListItemText primary={subSubItem.subsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                                       {subSubItem.subsuboptions ? openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                                     </ListItem>
//                                     {subSubItem.subsuboptions && (
//                                       <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`]} timeout="auto" unmountOnExit>
//                                         <List component="div" disablePadding>
//                                           {subSubItem.subsuboptions.map((subSubSubItem, subSubSubIndex) => (
//                                             <ListItem
//                                               button
//                                               component={Link}
//                                               to={subSubSubItem.subsubsubpath || '#'}
//                                               key={subSubSubIndex}
//                                               sx={{ pl: 8, color: 'white' }}
//                                             >
//                                               <ListItemText primary={subSubSubItem.subsubsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                                             </ListItem>
//                                           ))}
//                                         </List>
//                                       </Collapse>
//                                     )}
//                                   </React.Fragment>
//                                 ))}
//                               </List>
//                             </Collapse>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;


// updated
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
//   Divider,
//   Box,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material';
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from '../../assets/logo1.png';
// import './sidebar.css';



// finalized
import React, { useState, useRef } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton, Divider, Box, useMediaQuery } from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { GiGreekTemple } from "react-icons/gi";
import { TiDocumentText } from "react-icons/ti";
import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { BsLayoutTextSidebar } from "react-icons/bs";
import logo1 from '../../assets/logo1.png';
import './sidebar.css';
import { Link } from 'react-router-dom';




const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  // const sidebarRef = useRef(null);
  const drawerRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  console.log(isMobile)

  const handleSubMenuClick = (name) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // const handleClickOutside = (event) => {
  //   if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

const sideBarData = [
  {
    icon: <GiGreekTemple />,
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: <TiDocumentText />,
    name: 'Submission',
    options: [
      {
        subitem: 'Intellectual Property',
        suboptions: [
          { subsubitem: 'View', subsubpath: '/viewintellectualproperty' },
          { subsubitem: 'Add New', subsubpath: '/addintellectualproperty' },
        ],
      },
      {
        subitem: 'Project Submission',
        suboptions: [
          {
            subsubitem: 'ORIC Funded Project',
            subsuboptions: [
              { subsubsubitem: 'View', subsubsubpath: '/view-oric-funded-projects' },
              { subsubsubitem: 'Add New', subsubsubpath: '/add-oric-funded-projects' },
            ],
          },
          {
            subsubitem: 'International/National Grants',
            subsuboptions: [
              { subsubsubitem: 'View', subsubsubpath: '/view-international/national-grants' },
              { subsubsubitem: 'Add New', subsubsubpath: '/add-international/national-grants' },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: <IoBriefcaseOutline />,
    name: 'Research Portfolio',
    options: [
      { subitem: 'Personal Information', subpath: '/researchportfolio' },
      { subitem: 'Honor And Awards, Scholarship', subpath: '/honorandawards' },
      { subitem: 'Membership', subpath: '/membership' },
      { subitem: 'View All Publications', subpath: '/viewallpublications' },
      { subitem: 'Add New Publications', subpath: '/researchpublication' },
      { subitem: 'Research Grants And Contracts', subpath: '/research-grants-and-contracts' },
    ],
  },
  {
    icon: <FaRegBookmark />,
    name: 'Department Research Data',
    path: '/departmental-research-data-publications-of-faculty',
  },
  {
    icon: <IoCloudDownloadOutline />,
    name: 'Downloadable',
    path: '/downloadable',
  },
  {
    icon: <BsLayoutTextSidebar />,
    name: 'Users & Roles',
    options: [
      { subitem: 'View All Users', subpath: '/usermanagement' },
      { subitem: 'Add New User', subpath: '/usermanagement' },
    ],
  },
];

  return (
    <>
      {/* <IconButton
        ref={sidebarRef}
        onClick={toggleSidebar}
        sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2, display: { lg: 'none' } }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton> */}
      <IconButton
        onClick={toggleSidebar}
        sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2, display: { lg: 'none' } }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        ref={drawerRef}
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isOpen || !isMobile}
        onClose={() => isMobile && setIsOpen(false)}
        sx={{
          width: isOpen || !isMobile ? 250 : 0,
          transition: 'width 0.3s',
          [`& .MuiDrawer-paper`]: {
            width: isOpen || !isMobile ? 250 : 0,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{ elevation: 4 }}
      >
        <Box sx={{ backgroundColor: '#0037a5', height: '100%', padding: '10px' }}>
          <div className="sidebar-logo">
            <img src={logo1} alt="Logo" style={{ width: '80%', margin: 'auto' }} />
          </div>

          <Divider sx={{ my: 1 }} />
          {/* <List className='side-ul'> */}
          <List>
            {sideBarData.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  component={Link}
                  to={item.path || '#'}
                  // onClick={() => item.options && handleSubMenuClick(item.name)}
                  onClick={() => {
                    console.log(`Navigating to ${item.path}`)
                    item.options && handleSubMenuClick(item.name)}}
                  sx={{ color: 'white' }}
                
                >
                  <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '0.675rem', marginLeft: '-15px' }}/>
                  {item.options ? openSubMenu[item.name] ? <ExpandLess /> : <ExpandMore /> : null}
                </ListItem>
                {item.options && (
                  <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.options.map((subItem, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <ListItem
                            button
                            component={Link}
                            to={subItem.subpath || '#'}
                            onClick={() => subItem.suboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}`)}
                            sx={{ pl: 4, color: 'white' }}
                          >
                            <ListItemText primary={subItem.subitem} primaryTypographyProps={{ fontSize: '0.675rem', marginLeft: '35px' }} />
                            {subItem.suboptions ? openSubMenu[`${item.name}-${subItem.subitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
                          </ListItem>
                          {subItem.suboptions && (
                            <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}`]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {subItem.suboptions.map((subSubItem, subSubIndex) => (
                                  <React.Fragment key={subSubIndex}>
                                    <ListItem
                                      button
                                      component={Link}
                                      to={subSubItem.subsubpath || '#'}
                                      onClick={() => subSubItem.subsuboptions && handleSubMenuClick(`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`)}
                                      sx={{ pl: 6, color: 'white' }}
                                    >
                                      <ListItemText primary={subSubItem.subsubitem} primaryTypographyProps={{ fontSize: '0.675rem', marginLeft: '35px' }}/>
                                      {subSubItem.subsuboptions ? openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
                                    </ListItem>
                                    {subSubItem.subsuboptions && (
                                      <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                          {subSubItem.subsuboptions.map((subSubSubItem, subSubSubIndex) => (
                                            <ListItem
                                              button
                                              component={Link}
                                              to={subSubSubItem.subsubsubpath || '#'}
                                              key={subSubSubIndex}
                                              sx={{ pl: 8, color: 'white' }}
                                            >
                                              <ListItemText primary={subSubSubItem.subsubsubitem} primaryTypographyProps={{ fontSize: '0.675rem', marginLeft: '35px' }} />
                                            </ListItem>
                                          ))}
                                        </List>
                                      </Collapse>
                                    )}
                                  </React.Fragment>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;




// import React, { useState, useRef } from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton, Divider, Box, useMediaQuery } from '@mui/material';
// import { ExpandLess, ExpandMore, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from '../../assets/logo1.png';
// import './sidebar.css';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState({});
//   const drawerRef = useRef(null);
//   const isMobile = useMediaQuery('(max-width: 768px)');

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubMenuClick = (name) => {
//     setOpenSubMenu((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const sideBarData = [
//     {
//       icon: <GiGreekTemple />,
//       name: 'Dashboard',
//       path: '/dashboard',
//     },
//     {
//       icon: <TiDocumentText />,
//       name: 'Submission',
//       options: [
//         {
//           subitem: 'Intellectual Property',
//           suboptions: [
//             { subsubitem: 'View', subsubpath: '/viewintellectualproperty' },
//             { subsubitem: 'Add New', subsubpath: '/addintellectualproperty' },
//           ],
//         },
//         {
//           subitem: 'Project Submission',
//           suboptions: [
//             {
//               subsubitem: 'ORIC Funded Project',
//               subsuboptions: [
//                 { subsubsubitem: 'View', subsubsubpath: '/view-oric-funded-projects' },
//                 { subsubsubitem: 'Add New', subsubsubpath: '/add-oric-funded-projects' },
//               ],
//             },
//             {
//               subsubitem: 'International/National Grants',
//               subsuboptions: [
//                 { subsubsubitem: 'View', subsubsubpath: '/view-international/national-grants' },
//                 { subsubsubitem: 'Add New', subsubsubpath: '/add-international/national-grants' },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       icon: <IoBriefcaseOutline />,
//       name: 'Research Portfolio',
//       options: [
//         { subitem: 'Personal Information', subpath: '/researchportfolio' },
//         { subitem: 'Honor And Awards, Scholarship', subpath: '/honorandawards' },
//         { subitem: 'Membership', subpath: '/membership' },
//         { subitem: 'View All Publications', subpath: '/viewallpublications' },
//         { subitem: 'Add New Publications', subpath: '/researchpublication' },
//         { subitem: 'Research Grants And Contracts', subpath: '/research-grants-and-contracts' },
//       ],
//     },
//     {
//       icon: <FaRegBookmark />,
//       name: 'Department Research Data',
//       path: '/departmental-research-data-publications-of-faculty',
//     },
//     {
//       icon: <IoCloudDownloadOutline />,
//       name: 'Downloadable',
//       path: '/downloadable',
//     },
//     {
//       icon: <BsLayoutTextSidebar />,
//       name: 'Users & Roles',
//       options: [
//         { subitem: 'View All Users', subpath: '/usermanagement' },
//         { subitem: 'Add New User', subpath: '/usermanagement' },
//       ],
//     },
//   ];

//   return (
//     <>
//       <IconButton
//         onClick={toggleSidebar}
//         sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2, display: { lg: 'none' } }}
//       >
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>

//       <Drawer
//         ref={drawerRef}
//         variant={isMobile ? "temporary" : "permanent"}
//         anchor="left"
//         open={isOpen || !isMobile}
//         onClose={() => isMobile && setIsOpen(false)}
//         sx={{
//           width: isOpen || !isMobile ? '250px' : 0,
//           transition: 'width 0.3s',
//           [`& .MuiDrawer-paper`]: {
//             width: isOpen || !isMobile ? '250px' : 0,
//             boxSizing: 'border-box',
//           },
//         }}
//         PaperProps={{ elevation: 4 }}
//       >
//         <Box sx={{ backgroundColor: '#0037a5', height: '100%', padding: '10px' }}>
//           <div className="sidebar-logo">
//             <img src={logo1} alt="Logo" style={{ width: '80%', margin: 'auto' }} />
//           </div>

//           <Divider sx={{ my: 1 }} />
//           <List>
//             {sideBarData.map((item, index) => (
//               <React.Fragment key={index}>
//                 <ListItem
//                   button
//                   component={Link}
//                   to={item.path || '#'}
//                   onClick={() => item.options && handleSubMenuClick(item.name)}
//                   sx={{ color: 'white' }}
//                 >
//                   <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                   {item.options ? openSubMenu[item.name] ? <ExpandLess /> : <ExpandMore /> : null}
//                 </ListItem>
//                 {item.options && (
//                   <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {item.options.map((subItem, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <ListItem
//                             button
//                             component={Link}
//                             to={subItem.subpath || '#'}
//                             sx={{ pl: 4, color: 'white' }}
//                           >
//                             <ListItemText primary={subItem.subitem} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                           </ListItem>
//                           {subItem.suboptions && (
//                             <Collapse in={openSubMenu[subItem.subitem]} timeout="auto" unmountOnExit>
//                               <List component="div" disablePadding>
//                                 {subItem.suboptions.map((subSubItem, subSubIndex) => (
//                                   <ListItem
//                                     button
//                                     component={Link}
//                                     to={subSubItem.subsubpath || '#'}
//                                     key={subSubIndex}
//                                     sx={{ pl: 6, color: 'white' }}
//                                   >
//                                     <ListItemText primary={subSubItem.subsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }}/>
//                                   </ListItem>
//                                 ))}
//                               </List>
//                             </Collapse>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;





// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
//   Divider,
//   Box,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from "@mui/icons-material";
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from "../../assets/logo1.png";
// import "./sidebar.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState({});
//   const sidebarRef = useRef(null);
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSubMenuClick = (name) => {
//     setOpenSubMenu((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const handleMenuItemClick = (path) => {
//     setIsOpen(false);
//     setTimeout(() => {
//       window.location.href = path;
//     }, 100);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   const handleNavigationClick = () => {
//     if (isMobile) {
//       setTimeout(() => {
//         setIsOpen(false);
//       }, 100); // Delay closing to allow navigation to happen first
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

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
//             { subsubitem: "View", subsubpath: "/viewintellectualproperty" },
//             { subsubitem: "Add New", subsubpath: "/addintellectualproperty" },
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
//         { subitem: "Personal Information", subpath: "/researchportfolio" },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/honorandawards",
//         },
//         { subitem: "Membership", subpath: "/membership" },
//         { subitem: "View All Publications", subpath: "/viewallpublications" },
//         { subitem: "Add New Publications", subpath: "/researchpublication" },
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
//         { subitem: "View All Users", subpath: "/usermanagement" },
//         { subitem: "Add New User", subpath: "/usermanagement" },
//       ],
//     },
//   ];

//   return (
//     <>
//       <IconButton
//         ref={sidebarRef}
//         onClick={toggleSidebar}
//         sx={{
//           position: "fixed",
//           top: 10,
//           left: 10,
//           zIndex: 2,
//           display: { lg: "none" },
//         }}
//       >
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>

//       <Drawer
//         variant={isMobile ? "temporary" : "permanent"}
//         anchor="left"
//         open={isOpen || !isMobile}
//         onClose={() => isMobile && setIsOpen(false)}
//         sx={{
//           width: isOpen || !isMobile ? 250 : 0,
//           transition: "width 0.3s",
//           [`& .MuiDrawer-paper`]: {
//             width: isOpen || !isMobile ? 250 : 0,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Box
//           sx={{ backgroundColor: "#0037a5", height: "100%", padding: "10px" }}
//         >
//           <div className="sidebar-logo">
//             <img
//               src={logo1}
//               alt="Logo"
//               style={{ width: "80%", margin: "auto" }}
//             />
//           </div>

//           <Divider sx={{ my: 1 }} />
//           <List>
//             {sideBarData.map((item, index) => (
//               <React.Fragment key={index}>
//                 <ListItem
//                   button
//                   component={Link}
//                   to={item.path || "#"}
//                   // onClick={() => {
//                   //   if (isMobile && item.path) {
//                   //     handleMenuItemClick(item.path);
//                   //   }
//                   //   item.options && handleSubMenuClick(item.name);
//                   // }}
//                   onClick={handleNavigationClick}
//                   // onClick={() => item.options && handleSubMenuClick(item.name)}
//                   sx={{ color: "white" }}
//                 >
//                   <ListItemIcon sx={{ color: "white" }}>
//                     {item.icon}
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={item.name}
//                     primaryTypographyProps={{ fontSize: "0.675rem" }}
//                   />
//                   {item.options ? (
//                     openSubMenu[item.name] ? (
//                       <ExpandLess />
//                     ) : (
//                       <ExpandMore />
//                     )
//                   ) : null}
//                 </ListItem>
//                 {item.options && (
//                   <Collapse
//                     in={openSubMenu[item.name]}
//                     timeout="auto"
//                     unmountOnExit
//                   >
//                     <List component="div" disablePadding>
//                       {item.options.map((subItem, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <ListItem
//                             button
//                             component={Link}
//                             to={subItem.subpath || "#"}
//                             // onClick={() =>
//                             //   subItem.suboptions &&
//                             //   handleSubMenuClick(
//                             //     `${item.name}-${subItem.subitem}`
//                             //   )
//                             // }
//                             // onClick={() => {
//                             //   if (isMobile && subItem.subpath) {
//                             //     handleMenuItemClick(subItem.subpath);
//                             //   }
//                             //   subItem.suboptions &&
//                             //     handleSubMenuClick(
//                             //       `${item.name}-${subItem.subitem}`
//                             //     );
//                             // }}
//                             onClick={handleNavigationClick}
//                             sx={{ pl: 4, color: "white" }}
//                           >
//                             <ListItemText
//                               primary={subItem.subitem}
//                               primaryTypographyProps={{ fontSize: "0.675rem" }}
//                             />
//                             {subItem.suboptions ? (
//                               openSubMenu[`${item.name}-${subItem.subitem}`] ? (
//                                 <ExpandLess />
//                               ) : (
//                                 <ExpandMore />
//                               )
//                             ) : null}
//                           </ListItem>
//                           {subItem.suboptions && (
//                             <Collapse
//                               in={
//                                 openSubMenu[`${item.name}-${subItem.subitem}`]
//                               }
//                               timeout="auto"
//                               unmountOnExit
//                             >
//                               <List component="div" disablePadding>
//                                 {subItem.suboptions.map(
//                                   (subSubItem, subSubIndex) => (
//                                     <React.Fragment key={subSubIndex}>
//                                       <ListItem
//                                         button
//                                         component={Link}
//                                         to={subSubItem.subsubpath || "#"}
//                                         // onClick={() =>
//                                         //   subSubItem.subsuboptions &&
//                                         //   handleSubMenuClick(
//                                         //     `${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`
//                                         //   )
//                                         // }
//                                         // onClick={() => {
//                                         //   if (
//                                         //     isMobile &&
//                                         //     subSubItem.subsubpath
//                                         //   ) {
//                                         //     handleMenuItemClick(
//                                         //       subSubItem.subsubpath
//                                         //     );
//                                         //   }
//                                         //   subSubItem.subsuboptions &&
//                                         //     handleSubMenuClick(
//                                         //       `${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`
//                                         //     );
//                                         // }}
//                                         onClick={handleNavigationClick}
//                                         sx={{ pl: 6, color: "white" }}
//                                       >
//                                         <ListItemText
//                                           primary={subSubItem.subsubitem}
//                                           primaryTypographyProps={{
//                                             fontSize: "0.675rem",
//                                           }}
//                                         />
//                                         {subSubItem.subsuboptions ? (
//                                           openSubMenu[
//                                             `${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`
//                                           ] ? (
//                                             <ExpandLess />
//                                           ) : (
//                                             <ExpandMore />
//                                           )
//                                         ) : null}
//                                       </ListItem>
//                                       {subSubItem.subsuboptions && (
//                                         <Collapse
//                                           in={
//                                             openSubMenu[
//                                               `${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`
//                                             ]
//                                           }
//                                           timeout="auto"
//                                           unmountOnExit
//                                         >
//                                           <List component="div" disablePadding>
//                                             {subSubItem.subsuboptions.map(
//                                               (
//                                                 subSubSubItem,
//                                                 subSubSubIndex
//                                               ) => (
//                                                 <ListItem
//                                                   button
//                                                   component={Link}
//                                                   to={
//                                                     subSubSubItem.subsubsubpath ||
//                                                     "#"
//                                                   }
//                                                   onClick={handleNavigationClick} //added
//                                                   key={subSubSubIndex}
//                                                   sx={{ pl: 8, color: "white" }}
//                                                 >
//                                                   <ListItemText
//                                                     primary={
//                                                       subSubSubItem.subsubsubitem
//                                                     }
//                                                     primaryTypographyProps={{
//                                                       fontSize: "0.675rem",
//                                                     }}
//                                                   />
//                                                 </ListItem>
//                                               )
//                                             )}
//                                           </List>
//                                         </Collapse>
//                                       )}
//                                     </React.Fragment>
//                                   )
//                                 )}
//                               </List>
//                             </Collapse>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;




// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   IconButton,
//   Divider,
//   Box,
//   useMediaQuery,
// } from '@mui/material';
// import {
//   ExpandLess,
//   ExpandMore,
//   Menu as MenuIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material';
// import { GiGreekTemple } from "react-icons/gi";
// import { TiDocumentText } from "react-icons/ti";
// import { IoBriefcaseOutline, IoCloudDownloadOutline } from "react-icons/io5";
// import { FaRegBookmark } from "react-icons/fa6";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import logo1 from "../../assets/logo1.png";


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState({});
//   const sidebarRef = useRef(null);
//   const isMobile = useMediaQuery('(max-width: 768px)');
//   const history = useHistory();

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//     const sideBarData = [
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
//             { subsubitem: "View", subsubpath: "/viewintellectualproperty" },
//             { subsubitem: "Add New", subsubpath: "/addintellectualproperty" },
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
//         { subitem: "Personal Information", subpath: "/researchportfolio" },
//         {
//           subitem: "Honor And Awards, Scholarship",
//           subpath: "/honorandawards",
//         },
//         { subitem: "Membership", subpath: "/membership" },
//         { subitem: "View All Publications", subpath: "/viewallpublications" },
//         { subitem: "Add New Publications", subpath: "/researchpublication" },
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
//         { subitem: "View All Users", subpath: "/usermanagement" },
//         { subitem: "Add New User", subpath: "/usermanagement" },
//       ],
//     },
//   ];

//   const handleSubMenuClick = (name) => {
//     setOpenSubMenu((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleNavigation = (path) => {
//     history.push(path);
//     if (isMobile) {
//       setTimeout(() => {
//         setIsOpen(false);
//       }, 100); // Delay closing to allow navigation to happen first
//     }
//   };

//   return (
//     <>
//       <IconButton
//         ref={sidebarRef}
//         onClick={toggleSidebar}
//         sx={{ position: 'fixed', top: 10, left: 10, zIndex: 2, display: { lg: 'none' } }}
//       >
//         {isOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>

//       <Drawer
//         variant={isMobile ? 'temporary' : 'permanent'}
//         anchor="left"
//         open={isOpen || !isMobile}
//         onClose={() => isMobile && setIsOpen(false)}
//         sx={{
//           width: isOpen || !isMobile ? 250 : 0,
//           transition: 'width 0.3s',
//           [`& .MuiDrawer-paper`]: {
//             width: isOpen || !isMobile ? 250 : 0,
//             boxSizing: 'border-box',
//           },
//         }}
//       >
//         <Box sx={{ backgroundColor: '#0037a5', height: '100%', padding: '10px' }}>
//           <div className="sidebar-logo">
//             <img src={logo1} alt="Logo" style={{ width: '80%', margin: 'auto' }} />
//           </div>

//           <Divider sx={{ my: 1 }} />
//           <List>
//             {sideBarData.map((item, index) => (
//               <React.Fragment key={index}>
//                 <ListItem
//                   button
//                   onClick={() => handleNavigation(item.path || '#')}
//                   sx={{ color: 'white' }}
//                 >
//                   <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                   {item.options ? openSubMenu[item.name] ? <ExpandLess /> : <ExpandMore /> : null}
//                 </ListItem>
//                 {item.options && (
//                   <Collapse in={openSubMenu[item.name]} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                       {item.options.map((subItem, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <ListItem
//                             button
//                             onClick={() => handleNavigation(subItem.subpath || '#')}
//                             sx={{ pl: 4, color: 'white' }}
//                           >
//                             <ListItemText primary={subItem.subitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                             {subItem.suboptions ? openSubMenu[`${item.name}-${subItem.subitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                           </ListItem>
//                           {subItem.suboptions && (
//                             <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}`]} timeout="auto" unmountOnExit>
//                               <List component="div" disablePadding>
//                                 {subItem.suboptions.map((subSubItem, subSubIndex) => (
//                                   <React.Fragment key={subSubIndex}>
//                                     <ListItem
//                                       button
//                                       onClick={() => handleNavigation(subSubItem.subsubpath || '#')}
//                                       sx={{ pl: 6, color: 'white' }}
//                                     >
//                                       <ListItemText primary={subSubItem.subsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                                       {subSubItem.subsuboptions ? openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`] ? <ExpandLess /> : <ExpandMore /> : null}
//                                     </ListItem>
//                                     {subSubItem.subsuboptions && (
//                                       <Collapse in={openSubMenu[`${item.name}-${subItem.subitem}-${subSubItem.subsubitem}`]} timeout="auto" unmountOnExit>
//                                         <List component="div" disablePadding>
//                                           {subSubItem.subsuboptions.map((subSubSubItem, subSubSubIndex) => (
//                                             <ListItem
//                                               button
//                                               onClick={() => handleNavigation(subSubSubItem.subsubsubpath || '#')}
//                                               key={subSubSubIndex}
//                                               sx={{ pl: 8, color: 'white' }}
//                                             >
//                                               <ListItemText primary={subSubSubItem.subsubsubitem} primaryTypographyProps={{ fontSize: '0.675rem' }} />
//                                             </ListItem>
//                                           ))}
//                                         </List>
//                                       </Collapse>
//                                     )}
//                                   </React.Fragment>
//                                 ))}
//                               </List>
//                             </Collapse>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </List>
//                   </Collapse>
//                 )}
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;






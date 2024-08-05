import React from "react";
import logo1 from "../../assets/logo1.png";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  ListItemIcon,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { GiGreekTemple } from "react-icons/gi";
import { TiDocumentText } from "react-icons/ti";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsLayoutTextSidebar } from "react-icons/bs";

const drawerWidth = 240;

const Sidebar = () => {
  const sidebarOptionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sideBarData = [
    {
      icon: <GiGreekTemple />,
      name: "Dasboard",
      path: "/dashboard",
    },
    {
      icon: <TiDocumentText />,
      name: "Submission",
      path: "/",
      options: [
        {
          subitem: "Intellectual Property",
          subpath: "/",
        },

        {
          subitem: "Project Submission",
          subpath: "/",
        },
      ],
    },
    {
      icon: <IoBriefcaseOutline />,
      name: "Research Portfolio",
      path: "/researchpublication",
      options: [
        {
          subitem: "Personal Information",
          subpath: "/",
        },

        {
          subitem: "Honor And Awards, Scholarship",
          subpath: "/",
        },
        {
          subitem: "Membership",
          subpath: "/",
        },
        {
          subitem: "View All Publications",
          subpath: "/",
        },
        {
          subitem: "Research Grants And Contracts",
          subpath: "/",
        },
      ],
    },
    {
      icon: <FaRegBookmark />,
      name: "Department Research Data",
      path: "/",
    },
    {
      icon: <IoCloudDownloadOutline />,
      name: "Downloadable",
      path: "/",
    },
    {
      icon: <BsLayoutTextSidebar />,
      name: "Users & Roles",
      path: "/usermanagement",
      options: [
        {
          subitem: "View All Users",
          subpath: "/",
        },
        {
          subitem: "Add New User",
          subpath: "/usermanagement",
        },
      ]
    },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src={logo1} alt="Logo" />
          {/* <p>ORIC</p> */}
        </div>
        <hr />
        <div className="sidebar-options">
          {sideBarData?.map((item, index) => (
            // <div  key={i} className=''>

            //     <Link className="sidebar-option">

            //     <div style={sidebarOptionStyle} className="icons-sidebar">{items.icon}</div>
            //     <p className=''>{items.name}</p>
            // </Link>
            // </div>
            <div>
              <Accordion
                key={index}
                sx={{ boxShadow: "none", margin: 0 }}
                className="bg-transparent"
              >
                <AccordionSummary
                  expandIcon={
                    item.options ? (
                      <ExpandMoreIcon sx={{ color: "white" }} />
                    ) : null
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{  padding: "0 10px" }}
                  className="bg-transparent d-flex align-items-center "
                >
                  <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                    {/* <img
                        src={item.icon}
                        alt=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "30px",
                          height: "30px",
                        }}
                      /> */}
                    <div className="icons-sidebar">{item.icon}</div>
                  </ListItemIcon>
                  <ListItemText
                    className="text-white m-0 text-12"
                    primary={item.name}
                    sx={{ margin: 0 }}
                  />
                </AccordionSummary>
                {item.options && (
                  <AccordionDetails sx={{ padding: "0px 16px" }}>
                    {item.options.map((option, idx) => (
                      <Typography key={idx} sx={{ paddingLeft: 4, paddingY: 1 }}>
                        <Link className="underline-none" to={option.subpath}>
                          {option.subitem}
                        </Link>
                      </Typography>
                    ))}
                  </AccordionDetails>
                )}
              </Accordion>
            </div>
          ))}
        </div>
        {/* <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          className="!bg-transparent"
        >
            
          <Box sx={{ overflow: "auto" }}>
            <List sx={{ padding: 0 }}>
              {sideBarData.map((item, index) => (
                <Accordion key={index} sx={{ boxShadow: "none", margin: 0 }}>
                  <AccordionSummary
                    expandIcon={item.options ? <ExpandMoreIcon /> : null}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{ minHeight: 0, padding: "0 16px" }}
                  >
                    <ListItemIcon sx={{ minWidth: "auto", marginRight: "8px" }}>
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item.title} sx={{ margin: 0 }} />
                  </AccordionSummary>
                  {item.options && (
                    <AccordionDetails sx={{ padding: "0 16px" }}>
                      {item.options.map((option, idx) => (
                        <Typography
                          key={idx}
                          sx={{ paddingLeft: 4, marginBottom: "8px" }}
                        >
                          {option}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  )}
                </Accordion>
              ))}
            </List>
          </Box>
        </Drawer> */}
      </div>
    </>
  );
};

export default Sidebar;

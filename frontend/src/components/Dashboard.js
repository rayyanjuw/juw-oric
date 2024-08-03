import React from 'react';
import { Box, Drawer, List, ListItemIcon, ListItemText, CssBaseline, Toolbar, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card';
import dashboard_icon from '../assets/dashboard_icon.png';
import submission_icon from '../assets/submission_icon.png';
import research_icon from '../assets/research_icon.png';
import bookmark_icon from '../assets/bookmark_icon.png';
import download_icon from '../assets/download_icon.png';
import publications_icon from '../assets/publications_icon.png';
import check_icon from '../assets/check_icon.png';
import i_icon from '../assets/i_icon.png'

const drawerWidth = 240;

const Dashboard = () => {
  const mockData = [
    { title: 'Publications', number: 10, publications: 'Add More Publications', image: publications_icon },
    { title: 'Research Proposal Submitted', number: 4, submitted: 'View All Submitted Proposal', image: i_icon },
    { title: 'Research Proposal Approved', number: 1, approved: 'View All Approved Proposal', image: check_icon },
  ];


  const menuData = [
    { title: 'Dashboard', icon: dashboard_icon },
    { title: 'Submission', icon: submission_icon, options: ['Intellectual Property','Project Submission']},
    { title: 'Research Portfolio', icon: research_icon, options: ['Personal Information', 'Honor And Awards, Scholarship', 'Membership', 'View All Publications', 'Add New Publications', 'Research Grants And Contracts'] },
    { title: 'Departmental Research Data', icon: bookmark_icon },
    { title: 'Downloadable', icon: download_icon },
    { title: 'Users & Roles', icon: download_icon, options: ['View All Users', 'Add New User'] },
  ];


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List sx={{ padding: 0 }}>
            {menuData.map((item, index) => (
              <Accordion key={index} sx={{ boxShadow: 'none', margin: 0 }}>
                <AccordionSummary
                  expandIcon={item.options ? <ExpandMoreIcon /> : null}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{ minHeight: 0, padding: '0 16px' }}
                >
                  <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
                    <img src={item.icon} alt="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px' }} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ margin: 0 }} />
                </AccordionSummary>
                {item.options && (
                  <AccordionDetails sx={{ padding: '0 16px' }}>
                    {item.options.map((option, idx) => (
                      <Typography key={idx} sx={{ paddingLeft: 4, marginBottom: '8px' }}>
                        {option}
                      </Typography>
                    ))}
                  </AccordionDetails>
                )}
              </Accordion>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Welcome to the member's area, admin!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {mockData.map((data, index) => (
            <Card 
              key={index} 
              title={data.title} 
              number={data.number}
              image={data.image}
              iconIndex={data.iconIndex} 
              publications={data.publications}
              submitted={data.submitted}
              approved={data.approved} 
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

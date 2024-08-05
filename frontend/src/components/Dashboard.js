import React from 'react';
import { Box, CssBaseline, Toolbar, Typography, } from '@mui/material';

import Card from './Card';

import publications_icon from '../assets/publications_icon.png';
import check_icon from '../assets/check_icon.png';
import i_icon from '../assets/i_icon.png'
import Sidebar from './Sidebar/Sidebar';



const Dashboard = () => {
  const mockData = [
    { title: 'Publications', number: 10, publications: 'Add More Publications', image: publications_icon },
    { title: 'Research Proposal Submitted', number: 4, submitted: 'View All Submitted Proposal', image: i_icon },
    { title: 'Research Proposal Approved', number: 1, approved: 'View All Approved Proposal', image: check_icon },
  ];



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <Drawer
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
      </Drawer> */}
      <Sidebar/>
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

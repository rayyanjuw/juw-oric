import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import assets from '../assets';
import publications_icon from '../assets/publications_icon.png'



const Card = ({ title, number, image, publications, submitted, approved }) => {
  return (
    <Box sx={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
    {/* <div className="container">
        <img src={publications_icon} alt=""  style={{display: 'flex', alignItems: 'flex-start', width: '40px', height: '40px'}}/>
        <Typography variant="h6" component="div">
            <i className="fa-solid fa-check"></i>
            {title}
        </Typography>
    </div> */}
       <img src={image} alt="" style={{display: 'flex', width: '50px', height: '50px'}}/>
      <Typography variant="h6" style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        {title}
        {/* style={{display: 'flex', alignItems: 'flex-end'}} */}
      </Typography>
      <Typography variant="body1" style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        {number}
      </Typography>
      <hr/>
        {publications && (
        <Typography variant="body2" sx={{ color: 'blue', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {/* <i className="fa-solid fa-check"></i> */}
          <i className="fa-solid fa-arrows-rotate"></i>
          {publications}
        </Typography>)}
      {
        submitted && (
            <Typography variant="body2" sx={{ color: 'blue', cursor: 'pointer' }}>
            <i className="fa-solid fa-arrows-rotate"></i>
            {submitted}
        </Typography>)}

      {
        approved && (
            <Typography variant="body2" sx={{ color: 'blue', cursor: 'pointer' }}>
            <i className="fa-solid fa-arrows-rotate"></i>
            {approved}
        </Typography>)}
    </Box>
  );
};

export default Card;



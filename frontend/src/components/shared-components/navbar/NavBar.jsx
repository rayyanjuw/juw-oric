import React, {useState} from 'react'
import './navbar.css'

//mui 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//icons
import { IoIosSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { GoTriangleDown,GoTriangleUp } from "react-icons/go";
import { Navigate, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const [token, setToken] = useState("")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate("")

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setToken("");
    window.location.href = '/';
  };


  return (
    <>
      <div className="navbar-main-container">
        <div className="d-flex gap-4 flex-row align-items-center">
            <div className="searchbar">
                <input type="search" placeholder='Search' className="search-input" />      
                  <IoIosSearch />
             </div>
              <div className="abc">
                <button
                className='basic-button'
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <CiSettings size={22} />
                  
                  {open ?  <GoTriangleUp />: <GoTriangleDown /> }
                  </button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    // onClose={handleClose}
                    onClose={handleLogout}
                  >
                    <MenuItem className='logout-btn' onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
              </div>
        </div>
      </div>
    </>
  )
}

export default NavBar

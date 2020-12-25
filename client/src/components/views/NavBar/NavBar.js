import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import './NavBar.css';


function NavBar() {


  return (
        <div className="header">
          <div className="header_left">
            <MenuIcon />
            <a href="/"><img className="header_logo" 
            src={require("../../../assets/images/weebTubeLogo2.png")} width={130}/> </a>
          </div>

          <div className="header_input">
            <input placeholder="Search" type="text" />
            <SearchIcon className="header_inputButton"/>
          </div>

          <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <Avatar />
          </div>

        </div>
        
    
  )
}

export default NavBar
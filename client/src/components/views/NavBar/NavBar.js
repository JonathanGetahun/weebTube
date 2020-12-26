import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import './NavBar.css';
import './Header.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { USER_SERVER } from '../../Config';


function NavBar(props) {

const [inputSearch, setInputSearch] = useState('');

const user = useSelector(state => state.user);

const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const logoutHandler = () => {
  axios.get(`${USER_SERVER}/logout`).then(response => {
    if (response.status === 200) {
      props.history.push("/login");
    } else {
      alert('Log Out Failed')
    }
  });
};

  return (
        <div className="header">
          <div className="header_left">
            <div className="header_icon">
            <MenuIcon />
            </div>
            <a href="/"><img className="header_logo" 
            src={require('../../../assets/images/weebTubeLogo2.png')} width={130}/> </a>
          </div>

          <div className="header_input">
            <input style={{outline:"none"}} onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header_inputButton"/>
            </Link>
            
          </div>

          <div className="header_icons">
          <a href="/video/upload"><VideoCallIcon className="header_icon"/></a>
            <NotificationsIcon className="header_icon"/>
            {(user.userData && !user.userData.isAuth) ? 
      <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><a href="/login">Sign In</a></MenuItem>
        <MenuItem onClick={handleClose}><a href="/register">Sign Up</a></MenuItem>
      </Menu>
    </div> :         <div style={{display:"flex"}}> <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
       <MenuItem onClick={handleClose}><a onClick={logoutHandler}>Logout</a></MenuItem>
       </Menu>
       </div> }
            {/* <Avatar /> */}
          </div>

        </div>
        
    
  )
}

export default withRouter(NavBar);

import './Navbar.css'
import { Link } from 'react-router-dom';

import homeLogo from "../../resources/svgs/home.svg";
import dark_modeLogo from "../../resources/svgs/dark_mode.svg";
import light_modeLogo from "../../resources/svgs/light_mode.svg";
import appsLogo from "../../resources/svgs/apps.svg";
import searchLogo from "../../resources/svgs/search.svg";
import personLogo from "../../resources/svgs/person.svg";
import emailLogo from "../../resources/svgs/mail.svg";
import notificationLogo from "../../resources/svgs/notifications.svg";
import gojo from "../../resources/images/gojo.jpg";
import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext);

  return (
    <div className="navbar">

      <div className="navbar_left"> 
        
          <span>Socio</span>
        
        <img src={homeLogo} className='forPC' alt="Home" height={25} width={25}/>
        {/* <homeLogo /> */}
        <div className='dark-mode' onClick={toggle}>
          {darkMode ? 
            <img src={light_modeLogo} alt="dark-mode" height="25px" width="25px" /> : 
            <img src={dark_modeLogo} alt="dark-mode" height="25px" width="25px" />}
        </div>
        <img src={appsLogo} className='forPC' alt="Apps" height="25px" width="25px" />
        <div className="search">
          <img src={searchLogo} alt="Search" height="25px" width="25px" />
          <input type="text" name="search" id="" placeholder='Search...' />
        </div>
      </div>

      <div className="navbar_right">
        <img src={personLogo} alt="Person" height="25px" width="25px" />
        <img src={emailLogo} alt="Email" height="25px" width="25px" />
        <img src={notificationLogo} alt="Notifications" height="25px" width="25px" />
        <div className="user">
          <img src={gojo} alt="" />
          <span>Krunal M</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar



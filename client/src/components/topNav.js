import React, { useState , useReducer} from 'react';
import '../css/topNav.css';

const TopNav = (props) => {
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const menuIconSwitch = ()=> {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className = "topnav responsive";
      } else {
        x.className = "topnav";
      }
      var x = document.getElementById("menuIcon");
      if (x.className === "icon") {
        x.className = "icon change";
      } else {
        x.className = "icon";
      }
    }
    return (
      <div className="topnav" id="myTopnav">
          <a href="#home" className="active">Home</a>
          <a href="#news">Past Entries</a>
          <a href="#contact">Stats</a>
          <a href="#about" style={{float:'right'}}>Admin</a>
  
          <div className="icon" id="menuIcon" onClick={menuIconSwitch}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
  
      </div>
    );
  }

  export default TopNav;
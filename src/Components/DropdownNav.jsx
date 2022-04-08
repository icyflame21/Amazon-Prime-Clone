import React from "react";
import "./Styles/DropdownNav.css";
const DropdownNav = () => {
  return (
    <div className="userdropdown">
      <div className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="/">
          Rajan
        </a>
        <div class="dropdown-menu" role="menu">
          <ul>
            <li>Your Watchlist</li>
            <li>Account Settings</li>
            <li>Watch Anywhere</li>
            <li>Help</li>
            <li>Not Rajan? Sign Out</li>
          </ul>
          <ul>
            <li>Home</li>
            <li>Kids</li>
            <li>Add new</li>
            <li>Manage Profiles</li>
            <li>Learn more</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownNav;

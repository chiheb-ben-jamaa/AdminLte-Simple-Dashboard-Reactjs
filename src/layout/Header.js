import React from "react";
import PropTypes from "prop-types";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Header(props) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      {/* SEARCH FORM */}

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}

        {/* Notifications Dropdown Menu */}

        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            role="button"
          >
            <ExitToAppIcon color="primary" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

Header.propTypes = {};

export default Header;

import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="main-footer">
      <strong>Copyright © Chiheb ben jamaa </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.5
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;

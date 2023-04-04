import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="copyright-section">
          <FontAwesomeIcon icon={faCopyright} /> {"  "}
          Shubham Bodkhe | Made with{"   "}
          <FontAwesomeIcon id="heart" icon={faHeart} />
          {"   "} and{"   "}
          <FontAwesomeIcon id="react" icon={faReact} />| drop a mail at
          bodkheshubham9921@gmail.com
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navabar = () => {
  return (
    <>
      <div className="nav-container" id="navbar">
        <div className="nav-logo">
          <Link to="#navbar">
            <h3> Shubham</h3>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="#about" smooth>
            <li>About</li>
          </Link>
          <Link to="#skills" smooth>
            <li> Skills</li>
          </Link>
          <Link to="#projects" smooth>
            <li> Projects</li>
          </Link>
          <Link to="#contact" smooth>
            <li>Contact</li>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navabar;

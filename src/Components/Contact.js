import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faInstagramSquare,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-card">
          <h1 className="contact-heading">Contact</h1>
          <h4 className="contact-subheading"> Connect with me! 😎</h4>
          <div className="contact-details">
            <li>
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone :
              <span className="contact-info"> +91 9921033731</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email :{" "}
              <span className="contact-info">shubhamb@bsf.io</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              Location : <span className="contact-info">Pune, Maharashtra</span>
            </li>
          </div>
          <div className="contact-social-media">
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
              {"    "}LinkedIn :
              <span className="contact-social-media-info">
                {" "}
                linkedin/shubham-9921
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faGitSquare} />
              {"    "}GitHub :{" "}
              <span className="contact-social-media-info">github/shubhamb</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagramSquare} />
              {"    "}InstaGram :{" "}
              <span className="contact-social-media-info">
                instagram/shubham_bodkhe
              </span>
            </li>
          </div>
        </div>
        <div className="contact-from">
          <form>
            <h4 className="from-heading">Let's Get Connect! 🤝 </h4>
            <div className="from-details">
              <label className="from-label" htmlFor="#name">
                Name :
              </label>

              <input
                type="text"
                id="name"
                className="from-input"
                placeholder="Your Name"
              />
              <br />
              <br />
              <label className="from-label" htmlFor="#email">
                Email :
              </label>

              <input
                type="email"
                id="email"
                className="from-input"
                placeholder="Your Email"
              />
              <br />
              <br />
              <input type="submit" id="subtn" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBrands } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faNodeJs,
  faReact,
  faAngular,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <>
      <div className="skill-container" id="skills">
        <div className="skill-heading">Skills</div>
        <div className="skill-card-container">
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faHtml5} />
            </div>
            <div className="card-title">HTML</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faCss3Alt} />
            </div>
            <div className="card-title">CSS</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faSquareJs} />
            </div>
            <div className="card-title">JavScript</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faNodeJs} />
            </div>
            <div className="card-title">NodeJs</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faReact} />
            </div>
            <div className="card-title">React</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faAngular} />
            </div>
            <div className="card-title">Angular</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faJava} />
            </div>
            <div className="card-title">Java</div>
          </div>
          <div className="skill-card">
            <div className="card-logo">
              <FontAwesomeIcon className="logo" icon={faPython} />
            </div>
            <div className="card-title">Python</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

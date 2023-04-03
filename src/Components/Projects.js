import React from "react";
import p1 from "../images/project1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <>
      <div className="project-container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-card">
          <div className="project-img">
            <img src={p1} alt="Project" />
            <div className="project-links">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </div>
          </div>
          <div className="project-details">
            <h1 className="project-title">Smart Attendence System </h1>

            <p className="project-desc">
              &nbsp;&nbsp; &nbsp;&nbsp;This project aims to automate the
              traditional attendance system where the attendance is marked
              manually. It also enables an organization to maintain its records
              like in-time, out time and attendance digitally. Digitalization of
              the system would also help in better visualization of the data
              using graphs to display the no. of students present today, total
              work hours of each student.Its added features serve as an
              efficient upgrade and replacement over the traditional attendance
              system.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

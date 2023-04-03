import React from "react";
import img from "../images/shubham.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-heading">
          <h2>About</h2>

          <p className="about-para">
            Programming has been my passion for as long as I can remember, and I
            am fortunate enough to have learned various programming languages. I
            am confident in my ability to adapt to new technologies and
            programming languages, which allows me to solve complex problems
            with ease. As a Trainee at Brainstorm Force, I am constantly
            learning and growing as a professional.<br></br> I am passionate
            about my work and am always eager to take on new challenges. I
            believe in the importance of teamwork, communication, and
            collaboration, and strive to apply these values in my daily work. In
            my free time, I enjoy learning new skills and exploring new hobbies.
            I believe in the importance of personal growth, and strive to be a
            lifelong learner. I am excited about what the future holds, and am
            eager to continue growing both personally and professionally. Thank
            you for taking the time to read about me, and I look forward to the
            opportunity to connect with you further.
          </p>
        </div>

        <div className="about-img">
          <img src={img} alt="Shubham" />
        </div>
      </div>
    </>
  );
};

export default About;

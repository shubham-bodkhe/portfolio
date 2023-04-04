import React from "react";
import dev from "../images/dev-logo.png";

const Introduction = () => {
  return (
    <>
      <div className="intro-container" id="intro">
        <div className="intro-logo">
          <img src={dev} alt="logo" />
        </div>
        <div className="intro-text">
          <h2 className="intro-title">
            Hey! 🙋‍♂️ <br></br>I'm Shubham
          </h2>
          <span className="tag-line">Eat🥘.CoDe💻.Sleep🛌.Repeat🔁</span>
          <p className="intro-para">
            {"    "}
            &nbsp;&nbsp;&nbsp; I'm Trainee at BrainStrom Force, Studied M.C.A at
            D.Y.Patil Institute of Master of Computer Application,Akurdi,Pune.{" "}
            Having Technical Skills Like HTML, CSS, JavaScript, React etc.
            Treking, Swimming, VirtualGamming are My Hobbies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;

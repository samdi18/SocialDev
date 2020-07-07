import React from "react";

const AboutMe = () => {
  return (
    <div className="card-margin card">
      <div className="profile-header">
        <h3>About Me</h3>
        <img
          src={require("../../images/pencil.svg")}
          alt=""
          className="icon edit-margin"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet
      </p>
    </div>
  );
};

export default AboutMe;

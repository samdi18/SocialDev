import React from "react";

const Skills = () => {
  return (
    <div className="card-margin card">
      <div className="profile-header">
        <h3>Skills</h3>
        <img
          src={require("../../images/pencil.svg")}
          alt=""
          className="icon edit-margin"
        />
      </div>
      <ul>
        <li className="tag">HTML</li>
        <li className="tag">CSS</li>
        <li className="tag">JS</li>
        <li className="tag">JS</li>
        <li className="tag">JS</li>
        <li className="tag">JS</li>
        <li className="tag">JS</li>
        <li className="tag">JS</li>
      </ul>
    </div>
  );
};

export default Skills;

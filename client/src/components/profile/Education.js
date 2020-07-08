import React from "react";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <div className="profile-content card-margin card">
      <div className="profile-header">
        <h3>Education</h3>
        <img
          src={require("../../images/add-btn.svg")}
          alt=""
          className="icon"
        />
      </div>

      <ul className="scrollable">
        <EducationItem />
        <EducationItem />
        <EducationItem />
      </ul>
    </div>
  );
};

export default Education;

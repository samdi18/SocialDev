import React from "react";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <div className="profile-content card-margin card">
      <div className="profile-header">
        <h3>Education</h3>
      </div>

      <ul>
        <EducationItem />
        <EducationItem />
        <EducationItem />
      </ul>
    </div>
  );
};

export default Education;

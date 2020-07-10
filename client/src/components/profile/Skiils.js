import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Skills = ({ profile }) => {
  const { skills } = profile;

  const skillsArr = skills.map((skill) => <li className="tag">{skill}</li>);

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
      <ul className="scrollable">{skillsArr.length === 0 ? "" : skillsArr}</ul>
    </div>
  );
};

Skills.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(Skills);

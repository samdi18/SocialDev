import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EducationItem from "./EducationItem";

const Education = ({ profile }) => {
  const { education } = profile;
  return (
    <div className="profile-content card-margin card">
      <div className="profile-header">
        <h3>Education</h3>
        <Link to="/add-education">
          <img
            src={require("../../images/add-btn.svg")}
            alt=""
            className="icon"
          />
        </Link>
      </div>

      <ul className="scrollable">
        {education.map((item) => (
          <EducationItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

Education.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Education);

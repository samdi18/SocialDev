import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//MAKE COMPONENT FOR SOCIALMEDIA ITEMS AND MAP THROUGH WITH TEMPLATE STRINGS
//FOR THE IMAGE NAME SVG

const SocialMedia = ({ profile: { social, githubusername } }) => {
  const { youtube, twitter, behance, facebook, instagram, linkedin } = social;

  return (
    <div className="card-margin card">
      <div className="profile-header">
        <h3>Social Media</h3>
        <img
          src={require("../../images/pencil.svg")}
          alt=""
          className="icon edit-margin"
        />
      </div>
      <div className="social-icons">
        {githubusername && (
          <a href={githubusername}>
            <img
              src={require("../../images/github.svg")}
              alt=""
              className="icon"
            />
          </a>
        )}
        {social && twitter && (
          <a href={twitter}>
            <img
              src={require("../../images/twitter.svg")}
              alt=""
              className="icon"
            />
          </a>
        )}
        {social && facebook && (
          <a href={facebook}>
            <img
              src={require("../../images/facebook.svg")}
              alt=""
              className="icon"
            />
          </a>
        )}
        {social && youtube && (
          <a href={youtube}>
            <img
              src={require("../../images/youtube.svg")}
              alt=""
              className="icon"
            />
          </a>
        )}
        {social && behance && (
          <a href={behance}>
            <img
              src={require("../../images/behance.svg")}
              alt=""
              className="icon"
            />
          </a>
        )}
        {social && instagram && (
          <a href={instagram}>
            <img
              src={require("../../images/instagram.svg")}
              alt=""
              className="icon"
            />
          </a>
        )}
      </div>
    </div>
  );
};

SocialMedia.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(SocialMedia);

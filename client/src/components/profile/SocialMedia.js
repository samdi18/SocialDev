import React from "react";

const SocialMedia = () => {
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
        <img
          src={require("../../images/twitter.svg")}
          alt=""
          className="icon"
        />
        <img
          src={require("../../images/facebook.svg")}
          alt=""
          className="icon"
        />
        <img
          src={require("../../images/youtube.svg")}
          alt=""
          className="icon"
        />
      </div>
    </div>
  );
};

export default SocialMedia;

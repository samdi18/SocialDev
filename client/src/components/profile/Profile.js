import React, { useEffect } from "react";
import { connect } from "react-redux";

//component imports
import AboutMe from "./AboutMe";
import SocialMedia from "./SocialMedia";
import Skills from "./Skiils";
import Education from "./Education";
import Experience from "./Experience";

const Profile = () => {
  return (
    <div className="profile-grid wrapper">
      <div className="user-area profile-card">
        <div className="user-img">
          <img src={require("../../images/user.jpg")} alt="" className="" />
        </div>
        <div className="user-info">
          <h3 className="username">Maruf Ahmed</h3>
          <p>
            <span>
              <img
                src={require("../../images/work.svg")}
                alt=""
                className="icon"
              />
            </span>
            Programmer
          </p>
          <p>
            <span>
              <img
                src={require("../../images/internet.svg")}
                alt=""
                className="icon"
              />
            </span>
            maruf.com
          </p>
          <p>Junior Dev at Google</p>
        </div>
      </div>
      <div className="about-area">
        <AboutMe />
      </div>
      <div className="social-media-area">
        <SocialMedia />
      </div>
      <div className="skills-area">
        <Skills />
      </div>
      <div className="education-area">
        <Education />
      </div>
      <div className="experience-area">
        <Experience />
      </div>
    </div>
  );
};

export default Profile;

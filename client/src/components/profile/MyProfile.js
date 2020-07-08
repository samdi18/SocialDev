import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyProfile } from "../../actions/profile";

//component imports
import AboutMe from "./AboutMe";
import SocialMedia from "./SocialMedia";
import Skills from "./Skiils";
import Education from "./Education";
import Experience from "./Experience";

const MyProfile = ({ profile: { profile }, auth, getMyProfile }) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);

  const { user } = auth;

  return (
    <div className="profile-grid wrapper">
      <div className="flex-left">
        <div className="user-area">
          <div className="user-card profile-card">
            <div className="user-img">
              <img src={require("../../images/user.jpg")} alt="" className="" />
            </div>
            <div className="user-info">
              <h3 className="username">{user.name}</h3>
              <p>
                <span>
                  <img
                    src={require("../../images/work.svg")}
                    alt=""
                    className="icon"
                  />
                </span>
                {profile && profile.role}
              </p>
              <p>
                <span>
                  <img
                    src={require("../../images/internet.svg")}
                    alt=""
                    className="icon"
                  />
                </span>
                {/* {website} */}
              </p>
              <p>{/* {status} at {company} */}</p>
            </div>
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
      </div>

      <div className="flex-right">
        <div className="experience-area">
          <Experience />
        </div>
        <div className="education-area">
          <Education />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMyProfile })(MyProfile);

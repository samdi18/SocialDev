import React from "react";

const Experience = () => {
  return (
    <div className="profile-content card-margin card">
      <div className="profile-header">
        <h3>Experience</h3>
        <img
          src={require("../../images/add-btn.svg")}
          alt=""
          className="icon"
        />
      </div>

      <ul className="scrollable">
        <li>
          <div className="content">
            <div className="content-info">
              <h4>Junior Web Developer</h4>
              <h4>
                Google <span>(from 10.02.19 to Now)</span>
              </h4>
            </div>
            <div className="profile-btns">
              <img
                src={require("../../images/pencil.svg")}
                alt=""
                className="icon"
              />
              <img
                src={require("../../images/rubbish.svg")}
                alt=""
                className="icon edit-margin"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="content-info">
              <h4>Junior Web Developer</h4>
              <h4>
                Google <span>(from 10.02.19 to Now)</span>
              </h4>
            </div>
            <div className="profile-btns">
              <img
                src={require("../../images/pencil.svg")}
                alt=""
                className="icon"
              />
              <img
                src={require("../../images/rubbish.svg")}
                alt=""
                className="icon edit-margin"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="content">
            <div className="content-info">
              <h4>Junior Web Developer</h4>
              <h4>
                Google <span>(from 10.02.19 to Now)</span>
              </h4>
            </div>
            <div className="profile-btns">
              <img
                src={require("../../images/pencil.svg")}
                alt=""
                className="icon"
              />
              <img
                src={require("../../images/rubbish.svg")}
                alt=""
                className="icon edit-margin"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;

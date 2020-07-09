import React from "react";
import moment from "moment";
import Moment from "react-moment";
import { connect } from "react-redux";

const Experience = ({ profile }) => {
  const { experience } = profile;

  const experiences = experience.map((item) => (
    <li>
      <div className="content">
        <div className="content-info">
          <h4>{item.title}</h4>
          <h4>
            {item.company}{" "}
            <span>
              {" "}
              <Moment format="YYYY/MM/DD">
                {moment.utc(item.from)}
              </Moment> -{" "}
              {item.to === null ? (
                " Now"
              ) : (
                <Moment format="YYYY/MM/DD">{moment.utc(item.to)}</Moment>
              )}
            </span>
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
  ));

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

      <ul className="scrollable">{experiences}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, null)(Experience);

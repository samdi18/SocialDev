import React, { Fragment, useState } from "react";

const EducationItem = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Fragment>
      <li>
        <div className="content">
          <div className="content-info">
            <h4>Junior Web Developer</h4>
            <h4>
              Google <br /> <span>(from 10.02.19 to 10.02.19)</span>
            </h4>
          </div>
          <div className="profile-btns">
            <div className="dots" onClick={() => setDropdown(!dropdown)}>
              <img
                src={require("../../images/options.svg")}
                alt=""
                className="icon edit-margin"
              />
            </div>

            {dropdown && (
              <div className="dropdown-btns">
                <img
                  src={require("../../images/pencil.svg")}
                  alt=""
                  className="icon edit-margin"
                />
                <img
                  src={require("../../images/rubbish.svg")}
                  alt=""
                  className="icon edit-margin"
                />
              </div>
            )}
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default EducationItem;

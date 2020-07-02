import React, { useState } from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import ProgrammerProfileForm from "./ProgrammerProfileForm";
import HirerProfileForm from "./HirerProfileForm";

const CreateProfile = () => {
  const [role, setRole] = useState("Programmer");

  const handleChange = (e) => {};

  const handleRole = (e) => {
    setRole(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form profile submited");
  };

  return (
    <div className="cont">
      <div className="create-profile wrapper">
        <h4>Create Profile</h4>

        <form className="profile-form">
          <div className="form-element">
            <label htmlFor="role">* Role</label>
            <select name="role" defaultValue={role} onChange={handleRole}>
              <option value="Hirer">Hirer</option>
              <option value="Programmer">Programmer</option>
            </select>
          </div>

          {role === "Programmer" ? (
            <ProgrammerProfileForm />
          ) : (
            <HirerProfileForm />
          )}

          <button className="submit-btn">
            <img
              src={require("../../../images/arrow.svg")}
              alt=""
              className="arrow-img"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;

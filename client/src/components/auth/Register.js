import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords don't match", "danger");
    } else {
      console.log(formData);
      register(formData);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-box">
      <h3>Sign Up</h3>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="password2">Confirm Password</label>
        <input
          type="text"
          name="password2"
          value={password2}
          onChange={handleChange}
        />

        <button className="submit-btn">
          <img
            src={require("../../images/arrow.svg")}
            alt=""
            className="arrow-img"
          />
        </button>
      </form>
    </div>
  );
};

Register.prototypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);

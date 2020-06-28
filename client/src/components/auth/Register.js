import React from "react";

const Register = () => {
  const handleChange = () => {};
  return (
    <div className="form-box">
      <h3>Sign Up</h3>
      <form className="auth-form">
        <label htmlFor="username">Full Name</label>
        <input type="text" name="username" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" />

        <label htmlFor="password2">Confirm Password</label>
        <input type="text" name="password2" />

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

export default Register;

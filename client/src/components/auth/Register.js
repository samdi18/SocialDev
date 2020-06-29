import React, { useState } from 'react';
import { STATES } from 'mongoose';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords don't match", 'danger');
    }
  };
  return (
    <div className='form-box'>
      <h3>Sign Up</h3>
      <form className='auth-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Full Name</label>
        <input type='text' name='username' onChange={handleChange} />

        <label htmlFor='email'>Email</label>
        <input type='text' name='email' onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input type='text' name='password' onChange={handleChange} />

        <label htmlFor='password2'>Confirm Password</label>
        <input type='text' name='password2' onChange={handleChange} />

        <button className='submit-btn'>
          <img
            src={require('../../images/arrow.svg')}
            alt=''
            className='arrow-img'
          />
        </button>
      </form>
    </div>
  );
};

export default connect(null, { setAlert })(Register);

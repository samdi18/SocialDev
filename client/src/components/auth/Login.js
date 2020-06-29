import React, { useState } from 'react';
import Animation from '../layout/Animation';
import { connect } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  };
  return (
    <div className='home-flex'>
      <Animation />
      <div className='form-box'>
        <h3>Sign In</h3>
        <form className='auth-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' onChange={handleChange} />

          <label htmlFor='password'>Password</label>
          <input type='text' name='password' onChange={handleChange} />

          <button className='submit-btn'>
            <img
              src={require('../../images/arrow.svg')}
              alt=''
              className='arrow-img'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null)(Login);

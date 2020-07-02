import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import ProgrammerProfileForm from './ProgrammerProfileForm';

const CreateProfile = () => {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form profile submited');
  };

  return (
    <div className='cont'>
      <div className='create-profile wrapper'>
        <h4>Create Profile</h4>

        <form className='profile-form'>
          <div className='form-element'>
            <select name='role' onChange={handleChange}>
              <option selected disabled>
                * Role
              </option>
              <option value='Hirer'>Hirer</option>
              <option value='Programmer'>Programmer</option>
            </select>
          </div>

          <ProgrammerProfileForm />

          <button className='submit-btn'>
            <img
              src={require('../../../images/arrow.svg')}
              alt=''
              className='arrow-img'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;

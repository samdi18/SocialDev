import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import ProgrammerProfileForm from './ProgrammerProfileForm';
import HirerProfileForm from './HirerProfileForm';
import { connect } from 'react-redux';
import { createProfile } from '../../../actions/profile';

const CreateProfile = () => {
  const [role, setRole] = useState('Programmer');
  const [formData, setFormData] = useState({});

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile({ ...formData, role }, false);
    console.log({ ...formData, role });
  };

  return (
    <div className='form-flex'>
      <div className='form-wrapper wrapper'>
        <h4 className='form-header'>Create Profile</h4>

        <form className='profile-form' onSubmit={handleSubmit}>
          <div className='form-element'>
            <label htmlFor='role'>* Role</label>
            <select name='role' defaultValue={role} onChange={handleRole}>
              <option value='Hirer'>Hirer</option>
              <option value='Programmer'>Programmer</option>
            </select>
          </div>

          {role === 'Programmer' ? (
            <ProgrammerProfileForm setFormData={setFormData} />
          ) : (
            <HirerProfileForm setFormData={setFormData} />
          )}

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

export default connect(null, { createProfile })(CreateProfile);

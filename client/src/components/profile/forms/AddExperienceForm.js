import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const AddExperienceForm = () => {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form experience profile submited');
  };

  return (
    <div className='form-flex'>
      <div className='form-wrapper wrapper'>
        <h4>Add your Experience</h4>
        <p className='form-header'>
          Add any developer/programming positions that you have had in the past
        </p>

        <form className='profile-form'>
          <div className='form-element'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' />
          </div>

          <div className='form-element'>
            <label htmlFor='company'>Company</label>
            <input type='text' name='company' />
          </div>

          <div className='form-element'>
            <label htmlFor='location'>Location</label>
            <input type='text' name='location' />
          </div>

          <div className='form-element'>
            <label htmlFor='from'>From Date</label>
            <input type='date' name='from' />
          </div>

          <div className='form-element'>
            <label htmlFor='to'>To Date</label>
            <input type='date' name='to' />
          </div>

          <div className='form-element status-flex'>
            <label htmlFor='status'>Current Status</label>
            <input type='checkbox' name='status' />
          </div>

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

AddExperienceForm.propTypes = {};

export default AddExperienceForm;

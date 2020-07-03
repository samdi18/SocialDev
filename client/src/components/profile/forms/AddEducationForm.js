import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const AddEducationForm = () => {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form education profile submited');
  };

  return (
    <div className='form-flex'>
      <div className='form-wrapper wrapper'>
        <h4>Add your Education</h4>
        <p className='form-header'>
          Add any school or bootcamp that you have attended
        </p>

        <form className='profile-form'>
          <div className='form-element'>
            <label htmlFor='institution'>Institution</label>
            <input type='text' name='institution' />
          </div>

          <div className='form-element'>
            <label htmlFor='degree'>Degree</label>
            <input type='text' name='degree' />
          </div>

          <div className='form-element'>
            <label htmlFor='department'>Department</label>
            <input type='text' name='department' />
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

AddEducationForm.propTypes = {};

export default AddEducationForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { addExperience } from '../../../actions/profile';

const AddExperienceForm = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    status: false,
  });

  const { company, title, location, from, to, status } = formData;

  const [toDateClose, setToDateClose] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
    console.log('form experience profile submited');
  };

  return (
    <div className='form-flex'>
      <div className='form-wrapper card wrapper'>
        <h4>Add your Experience</h4>
        <p className='form-header'>
          Add any developer/programming positions that you have had in the past
        </p>

        <form className='profile-form' onSubmit={handleSubmit}>
          <div className='form-element'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='company'>Company</label>
            <input
              type='text'
              name='company'
              value={company}
              onChange={handleChange}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              value={location}
              onChange={handleChange}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='from'>From Date</label>
            <input
              type='date'
              name='from'
              value={from}
              onChange={handleChange}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='to'>To Date</label>
            <input
              type='date'
              name='to'
              value={to}
              onChange={handleChange}
              disabled={toDateClose ? 'disabled' : ''}
            />
          </div>

          <div className='form-element status-flex'>
            <label htmlFor='status'>Current Status</label>
            <input
              type='checkbox'
              name='status'
              checked={status}
              value={status}
              onChange={() => {
                setFormData({ ...formData, status: !status });
                setToDateClose(!toDateClose);
              }}
            />
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

AddExperienceForm.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperienceForm));

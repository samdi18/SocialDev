import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { addEducation } from '../../../actions/profile';

const AddEducationForm = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    department: '',
    from: '',
    to: '',
    status: false,
  });

  const { institution, degree, department, from, to, status } = formData;

  const [toDateClose, setToDateClose] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <div className='form-flex'>
      <div className='form-wrapper card wrapper'>
        <h4>Add your Education</h4>
        <p className='form-header'>
          Add any school or bootcamp that you have attended
        </p>

        <form className='profile-form' onSubmit={handleSubmit}>
          <div className='form-element'>
            <label htmlFor='institution'>Institution</label>
            <input
              type='text'
              name='institution'
              value={institution}
              onChange={handleChange}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='degree'>Degree</label>
            <input
              type='text'
              name='degree'
              value={degree}
              onChange={handleChange}
            />
          </div>

          <div className='form-element'>
            <label htmlFor='department'>Department</label>
            <input
              type='text'
              name='department'
              value={department}
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

AddEducationForm.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducationForm));

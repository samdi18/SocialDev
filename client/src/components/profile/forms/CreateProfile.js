import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import ProgrammerProfileForm from './ProgrammerProfileForm';
import HirerProfileForm from './HirerProfileForm';
import { connect } from 'react-redux';
import { createProfile, getMyProfile } from '../../../actions/profile';

const CreateProfile = ({
  createProfile,
  getMyProfile,
  profile: { profile, loading },
  history,
}) => {
  const [role, setRole] = useState('Programmer');
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (!profile) getMyProfile(); // !null = true

    // if (!loading && profile) {
    //   const profileData = { ...formData };
    //   for (const key in profile) {
    //     if (key in profileData) profileData[key] = profile[key];
    //   }
    //   for (const key in profile.social) {
    //     if (key in profileData) profileData[key] = profile.social[key];
    //   }
    //   if (Array.isArray(profileData.skills))
    //     profileData.skills = profileData.skills.join(', ');
    //   setFormData(profileData);
    // }
  }, [loading, getMyProfile, profile]);

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile({ ...formData, role }, history, profile ? true : false);
    console.log({ ...formData, role });
  };

  return (
    <div className='form-flex'>
      <div className='form-wrapper card wrapper'>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getMyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getMyProfile })(
  CreateProfile
);

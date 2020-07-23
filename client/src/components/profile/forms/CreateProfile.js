import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
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
  const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    github: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    behance: '',
    youtube: '',
    instagram: '',
  };

  const [role, setRole] = useState('');
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    console.log('Profile: ', profile);
    getMyProfile(); // !null = true {}

    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills)) {
        profileData.skills = profileData.skills.join(', ');
      }
      setRole(profile.role);

      setFormData(profileData);
    }
  }, [loading, getMyProfile]);

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
            <select name='role' value={role} onChange={handleRole}>
              <option value='Hirer'>Hirer</option>
              <option value='Programmer'>Programmer</option>
            </select>
          </div>

          {role === 'Programmer' ? (
            <ProgrammerProfileForm
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <HirerProfileForm formData={formData} setFormData={setFormData} />
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
  withRouter(CreateProfile)
);

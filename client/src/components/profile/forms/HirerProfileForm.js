import React, { Fragment, useState } from 'react';

const HirerProfileForm = ({ formData, setFormData }) => {
  const [openSocialInputs, toggleSocialInputs] = useState(false);
  const [hirerFormData, setHirerFormData] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    behance: '',
    youtube: '',
    instagram: '',
  });

  const {
    company,
    website,
    location,
    bio,
    twitter,
    facebook,
    linkedin,
    behance,
    youtube,
    instagram,
  } = formData;

  const handleChange = (e) => {
    setHirerFormData({
      ...hirerFormData,
      [e.target.name]: e.target.value,
    });

    setFormData(hirerFormData);
  };

  return (
    <>
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
        <label htmlFor='website'>Website</label>
        <input
          type='text'
          name='website'
          value={website}
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
        <label htmlFor='bio'>Bio</label>
        <input type='text' name='bio' value={bio} onChange={handleChange} />
      </div>

      <div className='social-links-wrapper'>
        <div
          className='btn social-links'
          onClick={() => toggleSocialInputs(!openSocialInputs)}
        >
          <span>Add social links</span>
        </div>

        {openSocialInputs && (
          <Fragment>
            <div className='form-element social-top'>
              <label htmlFor='facebook'>Facebook</label>
              <input
                type='text'
                name='facebook'
                value={facebook}
                onChange={handleChange}
              />
            </div>

            <div className='form-element'>
              <label htmlFor='linkedin'>LinkedIn</label>
              <input
                type='text'
                name='linkedin'
                value={linkedin}
                onChange={handleChange}
              />
            </div>

            <div className='form-element'>
              <label htmlFor='behance'>Behance</label>
              <input
                type='text'
                name='behance'
                value={behance}
                onChange={handleChange}
              />
            </div>

            <div className='form-element'>
              <label htmlFor='instagram'>Instagram</label>
              <input
                type='text'
                name='instagram'
                value={instagram}
                onChange={handleChange}
              />
            </div>

            <div className='form-element'>
              <label htmlFor='twitter'>Twitter</label>
              <input
                type='text'
                name='twitter'
                value={twitter}
                onChange={handleChange}
              />
            </div>

            <div className='form-element'>
              <label htmlFor='youtube'>Youtube</label>
              <input
                type='text'
                name='youtube'
                value={youtube}
                onChange={handleChange}
              />
            </div>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default HirerProfileForm;

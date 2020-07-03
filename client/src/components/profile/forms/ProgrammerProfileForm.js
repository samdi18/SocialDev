import React, { useState, Fragment } from 'react';

const ProgrammerProfileForm = ({ setFormData }) => {
  const [openSocialInputs, toggleSocialInputs] = useState(false);
  const [programmerFormData, setProgrammerFormData] = useState({
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
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    github,
    bio,
    twitter,
    facebook,
    linkedin,
    behance,
    youtube,
    instagram,
  } = programmerFormData;

  const handleChange = (e) => {
    setProgrammerFormData({
      ...programmerFormData,
      [e.target.name]: e.target.value,
    });

    setFormData(programmerFormData);
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
        <label htmlFor='status'>Status</label>
        <select name='status' value={status} onChange={handleChange}>
          <option>* Select Professional Status</option>
          <option value='Developer'>Developer</option>
          <option value='Junior Developer'>Junior Developer</option>
          <option value='Senior Developer'>Senior Developer</option>
          <option value='Manager'>Manager</option>
          <option value='Student or Learning'>Student or Learning</option>
          <option value='Instructor'>Instructor or Teacher</option>
          <option value='Intern'>Intern</option>
          <option value='Other'>Other</option>
        </select>
      </div>

      <div className='form-element'>
        <label htmlFor='skills'>Skills</label>
        <input
          type='text'
          name='skills'
          value={skills}
          onChange={handleChange}
        />
      </div>

      <div className='form-element'>
        <label htmlFor='bio'>Bio</label>
        <textarea
          name='bio'
          placeholder='Tell us in brief about yourself'
          value={bio}
          onChange={handleChange}
        />
      </div>

      <div className='form-element'>
        <label htmlFor='github'>Github</label>
        <input
          type='text'
          name='github'
          value={github}
          onChange={handleChange}
        />
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

export default ProgrammerProfileForm;

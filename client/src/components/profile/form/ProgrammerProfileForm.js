import React, { useState, Fragment } from 'react';

const ProgrammerProfileForm = () => {
  const [openSocialInputs, toggleSocialInputs] = useState(false);

  return (
    <>
      <div className='form-element'>
        <label htmlFor='company'>Company</label>
        <input type='text' name='company' />
      </div>

      <div className='form-element'>
        <label htmlFor='website'>Website</label>
        <input type='text' name='website' />
      </div>

      <div className='form-element'>
        <label htmlFor='location'>Location</label>
        <input type='text' name='location' />
      </div>

      <div className='form-element'>
        <label htmlFor='status'>Status</label>
        <select name='status'>
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
        <input type='text' name='skills' />
      </div>
      <div className='form-element'>
        <label htmlFor='bio'>Bio</label>
        <input type='text' name='bio' />
      </div>

      <div className='form-element'>
        <label htmlFor='github-username'>Github Username</label>
        <input type='text' name='github-username' />
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
              <label htmlFor='facebook-username'>Facebook</label>
              <input type='text' name='facebook-username' />
            </div>

            <div className='form-element'>
              <label htmlFor='linkedin-username'>LinkedIn</label>
              <input type='text' name='linkedin-username' />
            </div>

            <div className='form-element'>
              <label htmlFor='behance-username'>Behance</label>
              <input type='text' name='behance-username' />
            </div>

            <div className='form-element'>
              <label htmlFor='instagram-username'>Instagram</label>
              <input type='text' name='instagram-username' />
            </div>

            <div className='form-element'>
              <label htmlFor='twitter-username'>Twitter</label>
              <input type='text' name='twitter-username' />
            </div>

            <div className='form-element'>
              <label htmlFor='youtube-username'>Youtube</label>
              <input type='text' name='youtube-username' />
            </div>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default ProgrammerProfileForm;

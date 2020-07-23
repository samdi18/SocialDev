import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutMe = ({ bio }) => {
  return (
    <div className='card-margin card'>
      <div className='profile-header'>
        <h3>About Me</h3>
        <Link to='/edit-profile'>
          <img
            src={require('../../images/pencil.svg')}
            alt=''
            className='icon edit-margin'
          />
        </Link>
      </div>
      <p>{bio}</p>
    </div>
  );
};

AboutMe.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default AboutMe;

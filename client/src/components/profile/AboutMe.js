import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const AboutMe = ({ profile: { bio, user, loading }, auth }) => {
  return (
    <Fragment>
      <div className='card-margin card'>
        <div className='profile-header'>
          <h3>About Me</h3>

          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === user._id && (
              <Link to='/edit-profile'>
                <img
                  src={require('../../images/pencil.svg')}
                  alt=''
                  className='icon edit-margin'
                />
              </Link>
            )}
        </div>
        {bio && <p>{bio}</p>}
      </div>
    </Fragment>
  );
};

AboutMe.propTypes = {
  bio: PropTypes.string.isRequired,
};

export default AboutMe;

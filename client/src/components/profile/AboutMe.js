import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AboutMe = ({ profile }) => {
  const { bio } = profile;
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
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(AboutMe);

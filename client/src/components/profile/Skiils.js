import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Skills = ({ profile }) => {
  const { skills } = profile;

  const skillsArr = skills.map((skill) => <li className='tag'>{skill}</li>);

  return (
    <div className='card-margin card'>
      <div className='profile-header'>
        <h3>Skills</h3>
        <Link to='/edit-profile'>
          <img
            src={require('../../images/pencil.svg')}
            alt=''
            className='icon edit-margin'
          />
        </Link>
      </div>
      <ul>{skillsArr.length === 0 ? '' : skillsArr}</ul>
    </div>
  );
};

Skills.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(Skills);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Skills = ({ profile: { user, skills }, auth }) => {
  const skillsArr = skills.map((skill) => <li className='tag'>{skill}</li>);

  return (
    <div className='card-margin card'>
      <div className='profile-header'>
        <h3>Skills</h3>

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
      <ul>{skillsArr.length === 0 ? '' : skillsArr}</ul>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EducationItem from './EducationItem';

const Education = ({ profile: { education, user }, auth }) => {
  return (
    <div className='profile-content card-margin card'>
      <div className='profile-header'>
        <h3>Education</h3>
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === user._id && (
            <Link to='/add-experience'>
              <img
                src={require('../../images/add-btn.svg')}
                alt=''
                className='icon'
              />
            </Link>
          )}
      </div>

      <ul className='scrollable'>
        {education.map((item) => (
          <EducationItem key={item._id} item={item} auth={auth} user={user} />
        ))}
      </ul>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;

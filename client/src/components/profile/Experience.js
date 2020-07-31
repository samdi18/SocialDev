import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';

const Experience = ({
  profile: { experience, user },
  auth,
  deleteExperience,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const experiences = experience.map((item) => (
    <li>
      <div className='content'>
        <div className='content-info'>
          <h4>{item.title}</h4>
          <h4>
            {item.company}
            <br />
            <span>
              {'('}from{' '}
              <Moment format='YYYY/MM/DD'>{moment.utc(item.from)}</Moment> to{' '}
              {item.to === null ? (
                ' Now'
              ) : (
                <Moment format='YYYY/MM/DD'>{moment.utc(item.to)}</Moment>
              )}
              {')'}
            </span>
          </h4>
        </div>
        <div className='profile-btns'>
          <img
            src={require('../../images/rubbish.svg')}
            alt=''
            className='icon edit-margin'
            onClick={() => {
              deleteExperience(item._id);
              console.log('hello delete experience' + item._id);
            }}
          />
        </div>
      </div>
    </li>
  ));

  return (
    <div className='profile-content card-margin card'>
      <div className='profile-header'>
        <h3>Experience</h3>
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

      <ul className='scrollable'>{experiences}</ul>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);

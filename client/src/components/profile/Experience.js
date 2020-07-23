import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Moment from 'react-moment';

const Experience = ({ experience }) => {
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
            src={require('../../images/pencil.svg')}
            alt=''
            className='icon'
          />

          <img
            src={require('../../images/rubbish.svg')}
            alt=''
            className='icon edit-margin'
          />
        </div>
      </div>
    </li>
  ));

  return (
    <div className='profile-content card-margin card'>
      <div className='profile-header'>
        <h3>Experience</h3>
        <Link to='/add-experience'>
          <img
            src={require('../../images/add-btn.svg')}
            alt=''
            className='icon'
          />
        </Link>
      </div>

      <ul className='scrollable'>{experiences}</ul>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;

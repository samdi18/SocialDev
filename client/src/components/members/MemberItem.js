import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const MemberItem = ({ profile }) => {
  const {
    user: { name, _id },
    company,
    status,
  } = profile;

  return (
    profile && (
      <li className='member-card'>
        <div className='user-img'>
          <img src={require('../../images/user.jpg')} alt='' className='' />
        </div>
        <div className='member-info'>
          <h2>{name}</h2>
          <p>
            {status} at {company}
          </p>
          <div className=''>
            <Link to={`/profile/${_id}`} className='btn member-btn'>
              View Profile
            </Link>
          </div>
        </div>
      </li>
    )
  );
};

MemberItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default MemberItem;

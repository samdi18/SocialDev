import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';

import { deleteEducation } from '../../actions/profile';

const EducationItem = ({ item, auth, user, deleteEducation }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Fragment>
      <li>
        <div className='content'>
          <div className='content-info'>
            <h4>{item.degree}</h4>
            <h4>
              {item.institution} <br />{' '}
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
            <div className='dots' onClick={() => setDropdown(!dropdown)}>
              {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === user._id && (
                  <img
                    src={require('../../images/options.svg')}
                    alt=''
                    className='icon edit-margin'
                  />
                )}
            </div>

            {dropdown && (
              <div className='dropdown-btns'>
                <img
                  src={require('../../images/pencil.svg')}
                  alt=''
                  className='icon edit-margin'
                />
                <img
                  src={require('../../images/rubbish.svg')}
                  alt=''
                  className='icon edit-margin'
                  onClick={() => deleteEducation(item._id)}
                />
              </div>
            )}
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default connect(null, { deleteEducation })(EducationItem);

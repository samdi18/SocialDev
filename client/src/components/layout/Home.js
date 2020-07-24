import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import MyProfile from '../profile/MyProfile';
import CreateProfile from '../profile/forms/CreateProfile';

import { getMyProfile } from '../../actions/profile';

const Home = ({ profile: { loading, profile }, getMyProfile }) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile, profile]);
  return (
    !loading && (
      <div className='container'>
        {profile === null && !loading ? (
          loading ? (
            ' '
          ) : (
            <Link
              to='/create-profile'
              className='btn'
              style={{ backgroundColor: '#7449db' }}
            >
              Create profile
            </Link>
          )
        ) : loading ? (
          ' '
        ) : (
          <Redirect to='/my-profile' />
        )}
      </div>
    )
  );
};

const mapStatetoProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStatetoProps, { getMyProfile })(Home);

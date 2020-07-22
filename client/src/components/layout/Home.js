import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import MyProfile from '../profile/MyProfile';
import CreateProfile from '../profile/forms/CreateProfile';

import { getMyProfile } from '../../actions/profile';

const Home = ({ profile: { loading, profile }, getMyProfile }) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);
  return (
    <Fragment>
      {profile === null ? (
        loading ? (
          ' '
        ) : (
          <Redirect to='/create-profile' />
        )
      ) : loading ? (
        ' '
      ) : (
        <Redirect to='/my-profile' />
      )}
    </Fragment>
  );
};

const mapStatetoProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStatetoProps, { getMyProfile })(Home);

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import MyProfile from '../profile/MyProfile';
import CreateProfile from '../profile/forms/CreateProfile';

const Home = ({ profile }) => {
  return (
    <Fragment>{profile !== null ? <MyProfile /> : <CreateProfile />}</Fragment>
  );
};

const mapStatetoProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStatetoProps)(Home);

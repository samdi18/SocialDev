import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMyProfile } from '../../actions/profile';

const Profile = ({ getMyProfile }) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile]);
  return <div></div>;
};

export default connect(null, { getMyProfile })(Profile);

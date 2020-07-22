import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import MemberItem from './MemberItem';

import { getAllProfiles } from '../../actions/profile';

const Members = ({ profile: { profiles, loading }, getAllProfiles }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <div className='members wrapper'>
      <div>
        <h1>Members</h1>
        <p>Meet all the members of our community</p>
      </div>

      <div className='members-flex'>
        <ul>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <MemberItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4> No Profiles</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

Members.propTypes = {
  profile: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllProfiles })(Members);

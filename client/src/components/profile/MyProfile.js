import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMyProfile, getProfileById } from '../../actions/profile';
import PropTypes from 'prop-types';

//component imports
import AboutMe from './AboutMe';
import SocialMedia from './SocialMedia';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Spinner from '../layout/Spinner';

const MyProfile = ({
  profile: { loading, profile },
  auth,
  getMyProfile,
  getProfileById,
  match,
}) => {
  useEffect(() => {
    //console.log('match param: ', match.params.id);
    if (match.params.id) {
      getProfileById(match.params.id);
    } else getMyProfile();
  }, [getProfileById, match.params.id, getMyProfile]);

  const { user } = auth;

  return loading || profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {profile === null ? (
        <h4>Loading profile...</h4>
      ) : (
        !loading &&
        profile && (
          <div className='profile-grid wrapper'>
            <div className='flex-left'>
              <div className='user-area'>
                <div className='user-card profile-card'>
                  <div className='user-img'>
                    <img src={user.userImage} alt='' className='' />
                  </div>
                  <div className='user-info'>
                    <h3 className='username'>
                      {match.params.id
                        ? profile && profile.user.name
                        : user && user.name}
                    </h3>
                    <p>
                      <span>
                        <img
                          src={require('../../images/work.svg')}
                          alt=''
                          className='icon'
                        />
                      </span>
                      {profile.role && profile.role}
                    </p>
                    <p>
                      <span>
                        <img
                          src={require('../../images/internet.svg')}
                          alt=''
                          className='icon'
                        />
                      </span>
                      {profile.website && profile.website}
                    </p>
                    <p>
                      {profile.status && profile.status} at{' '}
                      {profile.company && profile.company}
                    </p>
                  </div>
                </div>
              </div>
              <div className='about-area'>
                <AboutMe profile={profile} auth={auth} />
              </div>
              <div className='social-media-area'>
                <SocialMedia profile={profile} auth={auth} />
              </div>
              <div className='skills-area'>
                <Skills profile={profile} auth={auth} />
              </div>
            </div>

            <div className='flex-right'>
              <div className='experience-area'>
                <Experience profile={profile} auth={auth} />
              </div>
              <div className='education-area'>
                <Education profile={profile} auth={auth} />
              </div>
            </div>
          </div>
        )
      )}
    </Fragment>
  );
};

MyProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getMyProfile: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getMyProfile, getProfileById })(
  MyProfile
);

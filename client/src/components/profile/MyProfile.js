import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMyProfile, getProfileById } from '../../actions/profile';
import PropTypes from 'prop-types';

//component imports
import AboutMe from './AboutMe';
import SocialMedia from './SocialMedia';
import Skills from './Skiils';
import Education from './Education';
import Experience from './Experience';

const MyProfile = ({
  profile: { loading, profile },
  auth,
  getMyProfile,
  getProfileById,
  match,
}) => {
  useEffect(() => {
    console.log('match param: ', match.params);
    getProfileById('5f197348393590428888e514');
  }, [getProfileById, match.params.id]);

  const { user } = auth;

  const {
    role,
    website,
    company,
    status,
    social,
    bio,
    skills,
    githubusername,
    experience,
    education,
  } = profile;

  return (
    !loading &&
    profile && (
      <div className='profile-grid wrapper'>
        <div className='flex-left'>
          <div className='user-area'>
            <div className='user-card profile-card'>
              <div className='user-img'>
                <img
                  src={require('../../images/user.jpg')}
                  alt=''
                  className=''
                />
              </div>
              <div className='user-info'>
                <h3 className='username'>{user && user.name}</h3>
                <p>
                  <span>
                    <img
                      src={require('../../images/work.svg')}
                      alt=''
                      className='icon'
                    />
                  </span>
                  {role && role}
                </p>
                <p>
                  <span>
                    <img
                      src={require('../../images/internet.svg')}
                      alt=''
                      className='icon'
                    />
                  </span>
                  {website && website}
                </p>
                <p>
                  {status && status} at {company && company}
                </p>
              </div>
            </div>
          </div>
          <div className='about-area'>
            <AboutMe bio={bio} />
          </div>
          <div className='social-media-area'>
            <SocialMedia social={social} githubusername={githubusername} />
          </div>
          <div className='skills-area'>
            <Skills skills={skills} />
          </div>
        </div>

        <div className='flex-right'>
          <div className='experience-area'>
            <Experience experience={experience} />
          </div>
          <div className='education-area'>
            <Education education={education} />
          </div>
        </div>
      </div>
    )
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

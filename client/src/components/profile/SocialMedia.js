import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//MAKE COMPONENT FOR SOCIALMEDIA ITEMS AND MAP THROUGH WITH TEMPLATE STRINGS
//FOR THE IMAGE NAME SVG

const SocialMedia = ({ profile: { social, user, githubusername }, auth }) => {
  //const { youtube, twitter, behance, facebook, instagram, linkedin } = social;

  return (
    <div className='card-margin card'>
      <div className='profile-header'>
        <h3>Social Media</h3>
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === user._id && (
            <Link to='/edit-profile'>
              <img
                src={require('../../images/pencil.svg')}
                alt=''
                className='icon edit-margin'
              />
            </Link>
          )}
      </div>
      <div className='social-icons'>
        {githubusername && (
          <a href={githubusername}>
            <img
              src={require('../../images/github.svg')}
              alt=''
              className='icon'
            />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter}>
            <img
              src={require('../../images/twitter.svg')}
              alt=''
              className='icon'
            />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook}>
            <img
              src={require('../../images/facebook.svg')}
              alt=''
              className='icon'
            />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube}>
            <img
              src={require('../../images/youtube.svg')}
              alt=''
              className='icon'
            />
          </a>
        )}
        {social && social.behance && (
          <a href={social.behance}>
            <img
              src={require('../../images/behance.svg')}
              alt=''
              className='icon'
            />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram}>
            <img
              src={require('../../images/instagram.svg')}
              alt=''
              className='icon'
            />
          </a>
        )}
      </div>
    </div>
  );
};

SocialMedia.propTypes = {
  social: PropTypes.object.isRequired,
  githubusername: PropTypes.string.isRequired,
};

export default SocialMedia;

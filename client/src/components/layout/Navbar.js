import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { clearProfile } from '../../actions/profile';

const Navbar = ({
  logout,
  auth: { isAuthenticated, loading },
  match,
  profile,
  clearProfile,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  console.log(match);

  const authLinks = (
    <ul className={`show-desktop hide-mobile ${isOpen ? ' toggle-nav ' : ' '}`}>
      <li>
        <Link to='/members'>Members</Link>
      </li>
      <li>
        <Link to='/threads'>Threads</Link>
      </li>
      <li>
        {profile ? (
          <Link to='/my-profile'>Profile</Link>
        ) : (
          <Link to='/create-profile'>Profile</Link>
        )}
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className={`show-desktop hide-mobile ${isOpen ? ' toggle-nav ' : ' '}`}>
      <li>
        <Link to='/members'>Members</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  );
  return (
    <header>
      <span className='brand-logo'>
        {isAuthenticated ? (
          <Link to='/threads'> SocialDev</Link>
        ) : (
          <Link to='/'> SocialDev</Link>
        )}
      </span>

      <nav>
        <div className='right-nav'>
          {!loading && isAuthenticated ? (
            <div
              className='btn logout'
              onClick={() => {
                logout();
                clearProfile();
              }}
            >
              <span>Logout</span>
            </div>
          ) : (
            <div className='btn login'>
              {/* have to use anchor instead of link  */}
              {window.location.pathname === '/register' ? (
                <a href='/login'>Sign in</a>
              ) : (
                <a href='/register'>Sign up</a>
              )}
            </div>
          )}

          <img
            src={require('../../images/hamburger.svg')}
            alt=''
            className='ham hide-desktop'
            onClick={toggleNav}
          />
        </div>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { logout, clearProfile })(Navbar);

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const authLinks = (
    <ul className={`show-desktop hide-mobile ${isOpen ? ' toggle-nav ' : ' '}`}>
      <li>
        <Link to='/members'>Members</Link>
      </li>
      <li>
        <Link to='/members'>Threads</Link>
      </li>
      <li>
        <Link to='/members'>Profile</Link>
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
        <Link to='/'> SocialDev</Link>
      </span>

      <nav>
        <div className='right-nav'>
          {!loading && isAuthenticated ? (
            <div className='btn logout' onClick={logout}>
              <span>Logout</span>
            </div>
          ) : (
            <div className='btn login'>
              <Link to='/login'>Sign in</Link>
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
});

export default connect(mapStateToProps, { logout })(Navbar);

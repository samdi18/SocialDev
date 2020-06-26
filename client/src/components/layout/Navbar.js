import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className='navbar '>
      <span>
        <Link to='/'> SocialDev</Link>
      </span>

      <div className='right-nav'>
        <p className='btn login'>
          <Link to='/login'>Sign in</Link>
        </p>

        <img
          src={require('../../images/hamburger.svg')}
          alt=''
          className='ham'
          onClick={toggleNav}
        />
      </div>

      <ul className={`${isOpen ? ' toggle-nav ' : ' '}`}>
        <li>
          <Link to='/members'>Members</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

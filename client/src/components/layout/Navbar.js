import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar '>
      <h3>
        <Link to='/'> SocialDev</Link>
      </h3>

      <ul>
        <li>
          <Link to='/login'>Sign in</Link>
        </li>
        <li>
          <Link to='/members'>Members</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <header>
      <span className="brand-logo">
        <Link to="/"> SocialDev</Link>
      </span>

      <nav>
        <div className="right-nav">
          <div className="btn login">
            <Link to="/login">Sign in</Link>
          </div>

          <img
            src={require("../../images/hamburger.svg")}
            alt=""
            className="ham hide-desktop"
            onClick={toggleNav}
          />
        </div>

        <ul
          className={`show-desktop hide-mobile ${
            isOpen ? " toggle-nav " : " "
          }`}
        >
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

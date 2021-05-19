import React from "react";

const Navbar = () => {
  return (
      <nav className='app-navigation'>
        <ul>
          <li>
            <a href='#'>My Profile</a>
          </li>
          <li>
            <a href='#'>Messages</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Music</a>
          </li>
          <li>
            <a href='#'>Settings</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
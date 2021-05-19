import React from "react";

const Navbar = () => {
  return (
      <nav className='app-navigation'>
        <ul>
          <li>
            <a href='#'>MY PROFILE</a>
          </li>
          <li>
            <a href='#'>MESSAGES</a>
          </li>
          <li>
            <a href='#'>NEWS</a>
          </li>
          <li>
            <a href='#'>MUSIC</a>
          </li>
          <li>
            <a href='#'>SETTINGS</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={classes.navigation}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <a className={`${classes.itemLink} ${classes.itemLinkActive}`} href='#'>MY PROFILE</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='#'>MESSAGES</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='#'>NEWS</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='#'>MUSIC</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='#'>SETTINGS</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
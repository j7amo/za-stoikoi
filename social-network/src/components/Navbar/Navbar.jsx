import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={classes.navigation}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <a className={`${classes.itemLink} ${classes.itemLinkActive}`} href='/profile'>MY PROFILE</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='/dialogs'>MESSAGES</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='/news'>NEWS</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='/music'>MUSIC</a>
          </li>
          <li className={classes.item}>
            <a className={classes.itemLink} href='/settings'>SETTINGS</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
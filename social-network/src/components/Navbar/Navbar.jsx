import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={classes.navigation}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.activeLink}>MY PROFILE</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.activeLink}>MESSAGES</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to='/news' activeClassName={classes.activeLink}>NEWS</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to='/music' activeClassName={classes.activeLink}>MUSIC</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.activeLink}>SETTINGS</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
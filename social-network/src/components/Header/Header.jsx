import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
      <header className={classes.header}>
        <img src='../pictures/app-logo.png' width='300' height='168' alt='Web Application Logo'/>
      </header>
  );
};

export default Header;
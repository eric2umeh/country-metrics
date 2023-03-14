import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { TiMicrophone } from 'react-icons/ti';
import classes from './Header.module.css';

const Header = () => {
  const date = new Date();
  const year = date.getFullYear() || 2023;
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.nav_items}>
          <li className={`${classes.nav_items} ${classes.back}`}>
            <NavLink to="/">
              <IoIosArrowBack />
              {' '}
              {year}
            </NavLink>
          </li>
          <li className={`${classes.nav_item} ${classes.brand}`}>
            <NavLink to="/">
              <h1>Country Metrics</h1>
            </NavLink>
          </li>
          <li className={`${classes.nav_items} ${classes.actions}`}>
            <button type="button">
              <TiMicrophone />
            </button>
            <button type="button">
              <IoMdSettings />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

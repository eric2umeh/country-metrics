import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import classes from './Layout.module.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main className={classes.main}>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

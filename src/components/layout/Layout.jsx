import React from 'react';
import Header from './Header';
import classes from './Layout.module.css';
import PropTypes from 'prop-types';

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

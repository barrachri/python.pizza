import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../footer';

import './reset.css';
import './theme.css';
import './typography.css';

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

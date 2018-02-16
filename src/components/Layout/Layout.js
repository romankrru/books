import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.css';

const Layout = props => (
  <div className={styles.LayoutContainer}>
    <h1 className={styles.AppNameHeading}>Books</h1>
    <div className={styles.LayoutContent}>
      {props.children}
    </div>
  </div>
);

Layout.defaultProps = {
  children: '',
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

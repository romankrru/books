import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.css';
import Header from '../Header/Header';

const Layout = props => (
  <Fragment>
    <Header />
    <div className={styles.LayoutContainer}>
      <div className={styles.LayoutContent}>
        {props.children}
      </div>
    </div>
  </Fragment>
);

Layout.defaultProps = {
  children: '',
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

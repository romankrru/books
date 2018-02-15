import React from 'react';

import styles from './Layout.css';

const Layout = props => {
  return (
    <div className={styles.LayoutContainer}>
      <h1 className={styles.AppNameHeading}>Books</h1>
      <div className={styles.LayoutContent}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
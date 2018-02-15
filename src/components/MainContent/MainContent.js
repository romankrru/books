import React from 'react';

import styles from './MainContent.css';

const MainContent = props => {
  return (
    <div className={styles.MainContent}>
      {props.children}
    </div>
  );
};

export default MainContent;
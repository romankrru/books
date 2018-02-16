import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainContent.css';

const MainContent = props => (
  <div className={styles.MainContent}>
    {props.children}
  </div>
);

MainContent.defaultProps = {
  children: '',
};

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;

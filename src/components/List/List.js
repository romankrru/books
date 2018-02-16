import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.css';

const List = props => (
  <ul className={styles.List}>
    {props.children}
  </ul>
);

List.defaultProps = {
  children: '',
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;

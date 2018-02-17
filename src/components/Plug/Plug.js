import React from 'react';
import PropTypes from 'prop-types';

import styles from './Plug.css';

const Plug = props => (
  <div className={styles.Plug}>
    {props.children}
  </div>
);

Plug.defaultProps = {
  children: '',
};

Plug.propTypes = {
  children: PropTypes.node,
};

export default Plug;

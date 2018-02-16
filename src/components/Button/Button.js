import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = (props) => {
  const attachedClasses = [styles.Button];

  if (props.fullWidth) {
    attachedClasses.push(styles.ButtonFullWidth);
  }

  return (
    <button
      className={attachedClasses.join(' ')}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  fullWidth: false,
  onClick: () => {},
  children: '',
};

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;

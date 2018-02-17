import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = (props) => {
  const attachedClasses = [styles.Button];

  if (props.fullWidth) {
    attachedClasses.push(styles.ButtonFullWidth);
  }

  switch (props.size) {
    case 'lg':
      attachedClasses.push(styles.ButtonLg);
      break;
    default:
      break;
  }

  switch (props.btnType) {
    case 'danger':
      attachedClasses.push(styles.ButtonDanger);
      break;
    default:
      break;
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
  onClick: () => { },
  children: '',
  size: '',
  btnType: '',
};

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;

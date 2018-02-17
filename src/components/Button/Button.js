import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = ({
  fullWidth,
  size,
  onClick,
  btnType,
  className,
  ...props
}) => {
  const attachedClasses = [styles.Button];

  if (className.length) {
    attachedClasses.push(className);
  }

  if (fullWidth) {
    attachedClasses.push(styles.ButtonFullWidth);
  }

  switch (size) {
    case 'lg':
      attachedClasses.push(styles.ButtonLg);
      break;
    default:
      break;
  }

  switch (btnType) {
    case 'danger':
      attachedClasses.push(styles.ButtonDanger);
      break;
    default:
      break;
  }

  return (
    <button
      className={attachedClasses.join(' ')}
      onClick={onClick}
      {...props}
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
  className: '',
};

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string,
  btnType: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

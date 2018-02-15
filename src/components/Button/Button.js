import React from 'react';

import styles from './Button.css';

const Button = props => {
  const attachedClasses = [styles.Button];

  if (props.btnType === 'secondary') {
    attachedClasses.push(styles.ButtonSecondary)
  }

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

export default Button;
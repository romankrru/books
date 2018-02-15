import React from 'react';

import styles from './TextInput.css';

const TextInput = props => {
  return (
    <label className={styles.TextInputLabel}>
      <span className={styles.TextInputLabelText}>{props.label}</span>
      <input className={styles.Input} type="text"/>
    </label>
  );
};

export default TextInput;
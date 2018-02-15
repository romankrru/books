import React from 'react';

import styles from './TextInput.css';

const TextInput = props => {
  return (
    <label className={styles.TextInputLabel}>
      <span className={styles.TextInputLabelText}>{props.label}</span>
      <input
        className={styles.Input}
        value={props.value}
        name={props.name}
        onChange={(e) => props.onChange(e.target.value, props.name)}
        type="text"
      />
    </label>
  );
};

export default TextInput;
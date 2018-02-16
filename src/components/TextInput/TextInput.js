import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.css';

const TextInput = props => (
  <label className={styles.TextInputLabel} htmlFor={props.id}>
    <span className={styles.TextInputLabelText}>{props.label}</span>
    <input
      id={props.id}
      className={styles.Input}
      value={props.value}
      name={props.name}
      onChange={e => props.onChange(e.target.value, props.name)}
      type="text"
    />
  </label>
);

TextInput.defaultProps = {
  value: '',
  label: '',
  onChange: () => {},
  name: '',
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default TextInput;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.css';

const TextInput = ({
  id,
  label,
  value,
  name,
  onChange,
  ...props
}) => (
  <label className={styles.TextInputLabel} htmlFor={id}>
    <span className={styles.TextInputLabelText}>{label}</span>
    <input
      id={id}
      className={styles.Input}
      value={value}
      name={name}
      onChange={e => onChange(e.target.value, name)}
      type="text"
      {...props}
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

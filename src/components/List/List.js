import React from 'react';

import styles from './List.css';

const List = props => {
  return (
    <ul className={styles.List}>
      {props.children}
    </ul>
  );
};

export default List;
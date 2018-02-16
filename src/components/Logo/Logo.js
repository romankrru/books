import React from 'react';

import styles from './Logo.css';
import LogoImage from '../../assets/img/icons/books-stack-of-three.svg';

const Logo = () => (
  <div className={styles.Logo}>
    <img className={styles.LogoImage} src={LogoImage} alt="Books" />
    <h1 className={styles.LogoText}>Books</h1>
  </div>
);

export default Logo;

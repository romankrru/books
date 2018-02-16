import React from 'react';

import styles from './Header.css';
import Logo from '../Logo/Logo';

const GithubLink = () => (
  <a className={styles.GithubLink} href="https://github.com/romankrru/books">
    Gihub
  </a>
);

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderInner}>
      <Logo />
      <GithubLink />
    </div>
  </header>
);

export default Header;

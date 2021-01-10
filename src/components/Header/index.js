import React from 'react';
import { ReactComponent as Logo } from '../../assets/MarvelTransparent.svg';
import styles from './styles.module.scss';
const Header = ({ color = 'transparent' }) => {
  return (
    <header
      className={styles.appHeader}
      style={{ backgroundColor: `${color}` }}
    >
      <Logo />
    </header>
  );
};

export default Header;

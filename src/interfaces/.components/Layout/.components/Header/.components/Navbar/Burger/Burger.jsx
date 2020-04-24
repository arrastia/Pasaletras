import React from 'react';

import styles from './Burger.module.scss';

export const Burger = ({ navbarState, handleNavbar }) => (
  <span className={`${styles.burger} ${navbarState ? styles.on : ''}`} onClick={() => handleNavbar()}>
    <div className={`${styles.line} ${styles.top}`} />
    <div className={`${styles.line} ${styles.middle}`} />
    <div className={`${styles.line} ${styles.bottom}`} />
  </span>
);

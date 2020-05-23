import React, { useContext } from 'react';

import tablet from 'assets/img/svg/tablet.svg';

import styles from './Footer.module.scss';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Footer = () => {
  const messages = useContext(MessagesContext);
  const fata = new Date();
  console.log('fata', fata.getFullYear());
  return (
    <footer className={styles.footerWrap}>
      {/* <img className={styles.illustration} src={tablet} alt="" /> */}
      {/* <div className={styles.footer}>
        <span className={styles.date}>@{fata.getFullYear()} Pasaletras</span>
        <span className={styles.follow}>Correo: info@pasaletras.com</span>
      </div> */}
    </footer>
  );
};

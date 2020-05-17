import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import styles from './Card.module.scss';

export const Card = ({ className, iconClassName, style, subtitle, title, toolbar }) => {
  return (
    <div className={`${styles.card} ${styles[className]}`} style={style}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={`${iconClassName ? styles[iconClassName] : styles.link}`}>
        <span className={styles.linkIcon}>{toolbar}</span>
      </div>
    </div>
  );
};

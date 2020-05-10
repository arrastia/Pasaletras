import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import styles from './Card.module.scss';

export const Card = ({ date, icon, id, obligation, subtitle, title, className, toolbar }) => {
  return (
    <div className={`${styles.card} ${styles[className]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={`${styles.link}`}>
        <span className={styles.linkIcon}>{toolbar}</span>
      </div>
    </div>
  );
};

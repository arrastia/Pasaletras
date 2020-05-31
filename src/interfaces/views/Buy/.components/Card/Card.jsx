import React from 'react';

import styles from './Card.module.scss';

export const Card = ({ className, onClick, style, subtitle, title, toolbar }) => {
  return (
    <div className={`${styles.card} ${styles[className]}`} onClick={onClick} style={style}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.link}>
        <span className={styles.linkIcon}>{toolbar}</span>
      </div>
    </div>
  );
};

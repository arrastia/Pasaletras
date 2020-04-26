import React from 'react';

import styles from './SectionLayout.module.scss';

export const SectionLayout = ({ children, className, id, subtitle, title }) => {
  return (
    <section className={`${styles.section} ${className}`} data-section={id} id={id}>
      <span className={styles.title}>{title}</span>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      {children}
    </section>
  );
};

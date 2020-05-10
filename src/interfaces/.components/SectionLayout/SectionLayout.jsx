import React, { useLayoutEffect, useRef, useState } from 'react';

import styles from './SectionLayout.module.scss';

export const SectionLayout = ({ children, className, id, subtitle, title }) => {
  const [animate, setAnimate] = useState(false);

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const getTopPosition = element => element.getBoundingClientRect().top;
    const sectionPosition = getTopPosition(sectionRef.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (sectionPosition < scrollPosition) setAnimate(true);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={`${styles.section} ${className}`} data-section={id} id={id} ref={sectionRef}>
      <span className={`${styles.title} animated ${animate ? 'fadeInLeft' : ''}`}>{title}</span>
      <h2 className={`${styles.subtitle} animated ${animate ? 'fadeInLeftBig' : ''}`}>{subtitle}</h2>
      {children}
    </section>
  );
};

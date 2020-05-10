import React, { useState, useRef } from 'react';

import { GiBackForth } from 'react-icons/gi';

import styles from './Slider.module.scss';

import { Button } from 'interfaces/.components/Button';

import { useInterval } from 'interfaces/.tools/Hooks/useInterval';
import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

export const Slider = ({ value }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  useInterval(() => {
    onChangeView();
  }, 5000);

  const breakpoints = useBreakpoint();

  const onChangeView = () => setActiveIndex(activeIndex === 0 ? 1 : 0);

  // if (!value.lenght > 0) return <Spinner />;

  return (
    <li
      className={`${styles.sliderItem} ${value[activeIndex].className}`}
      ref={sliderRef}
      style={{
        backgroundImage: `url(${value[activeIndex].photo})`,
        backgroundPosition: !breakpoints.tablet && activeIndex === 0 && '75%'
      }}>
      <div className={`${styles.card} ${value[activeIndex].classNameCard}`}>
        <h1>{value[activeIndex].title}</h1>
        <h2>{value[activeIndex].subtitle}</h2>
        <Button onClick={value[activeIndex].buttonAction} label={value[activeIndex].buttonLabel}>
          {value[activeIndex].buttonIcon}
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button onClick={onChangeView} style={{ backgroundColor: 'transparent' }}>
          <GiBackForth />
        </Button>
      </div>
    </li>
  );
};

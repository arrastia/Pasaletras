import React, { useState } from 'react';

import { GiBackForth } from 'react-icons/gi';

import styles from './Slider.module.scss';

import { Button } from 'interfaces/.components/Button';

import { useInterval } from 'interfaces/.tools/Hooks/useInterval';

export const Slider = ({ value }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    onChangeView();
  }, 5000);

  const onChangeView = () => setActiveIndex(activeIndex === 0 ? 1 : 0);

  // if (!value.lenght > 0) return <Spinner />;

  return (
    <li className={`${styles.sliderItem}`} style={{ backgroundImage: `url(${value[activeIndex].photo})` }}>
      <div className={styles.card}>
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

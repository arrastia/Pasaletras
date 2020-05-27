import React, { useEffect, useState } from 'react';

import styles from './Home.module.scss';

import book from 'assets/img/gallery/background-book.jpg';
import device from 'assets/img/gallery/background-device.jpg';
import girl from 'assets/img/gallery/background-girl.jpg';
import open from 'assets/img/gallery/background-open.jpg';

import { Slider } from './.components/Slider';
import withAutoplay from './.components/Slider/autoplay';

export const Home = () => {
  const [height, setHeight] = useState(0);

  const headerViewRef = document.getElementById('headerView');

  const AutoplaySlider = withAutoplay(Slider);

  useEffect(() => {
    const header = document.getElementById('headerView');
    setHeight(header.getBoundingClientRect().height);
  }, [headerViewRef]);

  return (
    <section id="home" className={styles.homeSection} data-section="home">
      <div className={styles.slider} style={{ top: height }}>
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={5000}>
          <div data-src={girl} />
          <div data-src={book} />
          <div data-src={device} />
          <div data-src={open} />
        </AutoplaySlider>
      </div>
    </section>
  );
};

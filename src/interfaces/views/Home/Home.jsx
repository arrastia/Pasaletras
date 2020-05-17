import React, { useContext, useEffect, useState } from 'react';

import { GiShoppingCart, GiTabletopPlayers } from 'react-icons/gi';

import styles from './Home.module.scss';

import book from 'assets/img/gallery/background-book.jpg';
import device from 'assets/img/gallery/background-device.jpg';
import girl from 'assets/img/gallery/background-girl.jpg';
import open from 'assets/img/gallery/background-open.jpg';

import { Slider } from './.components/Slider';
import withAutoplay from './.components/Slider/autoplay';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const Home = () => {
  const messages = useContext(MessagesContext);

  const [height, setHeight] = useState(0);

  const AutoplaySlider = withAutoplay(Slider);

  const showItems = [
    {
      aciveItem: false,
      className: 'fadeInDown animated',
      classNameCard: 'fadeInUp animated',
      buttonAction: () => {},
      buttonIcon: <GiTabletopPlayers />,
      buttonLabel: 'juega',
      content: <span></span>,
      id: 1,
      key: 1,
      photo: girl,
      subtitle: 'sub',
      title: 'title'
    },
    {
      aciveItem: false,
      className: 'fadeInUp animated',
      classNameCard: 'fadeInDown animated',
      buttonAction: () => {},
      buttonIcon: <GiShoppingCart />,
      buttonLabel: 'Cómpralo',
      content: <span></span>,
      id: 2,
      key: 2,
      photo: book,
      // subtitle: 'sub',
      title: 'Cómpralo'
    }
  ];

  useEffect(() => {
    const header = document.getElementById('headerView');
    setHeight(header.getBoundingClientRect().height);
  }, [document.getElementById('headerView')]);

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

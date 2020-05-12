import React from 'react';

import { GiShoppingCart, GiTabletopPlayers } from 'react-icons/gi';

import styles from './Home.module.scss';

import book from 'assets/img/fondo1.jpg';
import girl from 'assets/img/fondo2.jpg';

import { Slider } from './.components/Slider';

export const Home = () => {
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

  return (
    <section id="home" className={styles.homeSection} data-section="home">
      <div className={styles.slider}>
        <ul className={styles.ul}>
          <Slider value={showItems} />
        </ul>
      </div>
    </section>
  );
};

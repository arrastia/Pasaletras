import React from 'react';

import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

import { GiBookshelf, GiHouse, GiMailbox, GiShoppingCart, GiTabletopPlayers } from 'react-icons/gi';

import styles from './NavLinks.module.scss';

export const NavLinks = () => {
  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <NavLinksView style={linkAnimation}>
      <span className={styles.home}>
        <GiHouse /> Pasaletras
      </span>
      <span className={styles.home}>
        <GiShoppingCart /> Cómpralo
      </span>
      <span className={styles.home}>
        <GiBookshelf /> Muestras gratuitas
      </span>
      <span className={styles.home}>
        <GiTabletopPlayers /> Juego
      </span>
      <span className={styles.home}>
        <GiBookshelf /> Sobre el autor
      </span>
      <span className={styles.home}>
        <GiMailbox /> Contacta
      </span>
    </NavLinksView>
  );
};

const NavLinksView = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  padding: 0;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  & span {
    border-bottom: 1px solid transparent;
    color: var(--text);
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    margin: 1.5rem;
    text-transform: uppercase;
    transition: all 300ms linear 0s;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;

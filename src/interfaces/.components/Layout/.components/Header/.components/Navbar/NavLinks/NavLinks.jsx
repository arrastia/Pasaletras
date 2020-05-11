import React from 'react';

import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

import { GiBookshelf, GiHouse, GiMailbox, GiShoppingCart, GiTabletopPlayers } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';

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
      <span className={styles.menu}>
        <GiHouse /> <span>Pasaletras</span>
      </span>
      <span className={styles.menu}>
        <GiShoppingCart /> <span>Cómpralo</span>
      </span>
      <span className={styles.menu}>
        <GiBookshelf /> <span>Muestras gratuitas</span>
      </span>
      <span className={styles.menu}>
        <GiTabletopPlayers /> <span>Juego</span>
      </span>
      <span className={styles.menu}>
        <GiBookshelf /> <span>Sobre el autor</span>
      </span>
      <span className={styles.menu}>
        <RiMailSendLine /> <span>Contacta</span>
      </span>
    </NavLinksView>
  );
};

const NavLinksView = styled(animated.ul)`
  // margin: auto 0;
  display: flex;
  font-size: 1rem;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  > span {
    border-bottom: 1px solid transparent;
    color: var(--text);
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    margin: 0 1.5rem;
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

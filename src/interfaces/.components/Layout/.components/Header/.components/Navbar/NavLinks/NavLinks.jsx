import React, { useEffect } from 'react';

import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

import { GiBookshelf, GiHouse, GiMailbox, GiShoppingCart, GiTabletopPlayers, GiTeacher } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';

import styles from './NavLinks.module.scss';

import { DOMUtils } from 'interfaces/.tools/Utils/DOMUtils';

const links = ['homeLink', 'buyLink', 'freeLink', 'gameLink', 'authorLink', 'contactLink'];

export const NavLinks = ({ selected }) => {
  useEffect(() => {
    onAnimate(selected);
  }, [selected]);

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  const onAnimate = section => {
    DOMUtils.addClass(document.getElementById(`${section}Link`), styles.active);
    const rest = links.filter(item => item !== `${section}Link`);
    rest.forEach((item, i) => DOMUtils.removeClass(document.getElementById(item), styles.active));
  };

  const onNavSection = section => {
    const offsetTop = document.getElementById(section).offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

    onAnimate(section);
  };

  return (
    <NavLinksView style={linkAnimation}>
      <span id="homeLink" className={`${styles.menu} ${styles.active}`} onClick={() => onNavSection('home')}>
        <GiHouse /> <span>Pasaletras</span>
      </span>
      <span id="buyLink" className={styles.menu} onClick={() => onNavSection('buy')}>
        <GiShoppingCart /> <span>Cómpralo</span>
      </span>
      <span id="freeLink" className={styles.menu} onClick={() => onNavSection('free')}>
        <GiBookshelf /> <span>Muestras gratuitas</span>
      </span>
      <span id="gameLink" className={styles.menu} onClick={() => onNavSection('game')}>
        <GiTabletopPlayers /> <span>Juego</span>
      </span>
      <span id="authorLink" className={styles.menu} onClick={() => onNavSection('author')}>
        <GiTeacher /> <span>Sobre el autor</span>
      </span>
      <span id="contactLink" className={styles.menu} onClick={() => onNavSection('contact')}>
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

    // &:hover {
    //   color: #fdcb6e;
    //   border-bottom: 1px solid #fdcb6e;
    // }

    @media (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;

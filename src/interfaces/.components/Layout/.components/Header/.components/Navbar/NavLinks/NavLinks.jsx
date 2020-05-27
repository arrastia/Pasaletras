import React, { useContext, useEffect } from 'react';

import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components';

import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiHouse, GiShoppingCart, GiTeacher } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';

import styles from './NavLinks.module.scss';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

import { DOMUtils } from 'interfaces/.tools/Utils/DOMUtils';

const links = ['homeLink', 'buyLink', 'gameLink', 'authorLink', 'contactLink'];

export const NavLinks = ({ selected }) => {
  const messages = useContext(MessagesContext);

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
    rest.forEach(item => DOMUtils.removeClass(document.getElementById(item), styles.active));
  };

  const onNavSection = section => {
    const offsetTop = document.getElementById(section).offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

    onAnimate(section);
  };

  return (
    <NavLinksView style={linkAnimation}>
      <span id="homeLink" className={`${styles.menu} ${styles.active}`} onClick={() => onNavSection('home')}>
        <GiHouse /> <span>{messages.es['pasaletras']}</span>
      </span>
      <span id="buyLink" className={styles.menu} onClick={() => onNavSection('buy')}>
        <GiShoppingCart /> <span>{messages.es['buyIt']}</span>
      </span>
      <span id="gameLink" className={styles.menu} onClick={() => onNavSection('game')}>
        <FaChalkboardTeacher /> <span>{messages.es['game']}</span>
      </span>
      <span id="authorLink" className={styles.menu} onClick={() => onNavSection('author')}>
        <GiTeacher /> <span>{messages.es['aboutAuthor']}</span>
      </span>
      <span id="contactLink" className={styles.menu} onClick={() => onNavSection('contact')}>
        <RiMailSendLine /> <span>{messages.es['contactUs']}</span>
      </span>
    </NavLinksView>
  );
};

const NavLinksView = styled(animated.ul)`
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
    margin: 0 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 300ms linear 0s;

    @media (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;

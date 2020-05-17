import React, { useEffect } from 'react';

import { config, Keyframes } from 'react-spring/renderprops';

import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiBookshelf, GiHouse, GiShoppingCart, GiTeacher } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';

import styles from './CollapseMenu.module.scss';

import { useLockBodyScroll } from 'interfaces/.tools/Hooks/useLockBodyScroll';

import { DelayUtils } from 'interfaces/.tools/Utils/DelayUtils';
import { DOMUtils } from 'interfaces/.tools/Utils/DOMUtils';

const links = ['homeMenu', 'buyMenu', 'freeMenu', 'gameMenu', 'authorMenu', 'contactMenu'];

const items = [
  {
    key: 1,
    id: 'home',
    content: (
      <span id="homeMenu" className={styles.menu}>
        <GiHouse /> <span>Pasaletras</span>
      </span>
    )
  },
  {
    key: 2,
    id: 'buy',
    content: (
      <span id="buyMenu" className={styles.menu}>
        <GiShoppingCart /> <span>Cómpralo</span>
      </span>
    )
  },
  {
    key: 4,
    id: 'game',
    content: (
      <span id="gameMenu" className={styles.menu}>
        <FaChalkboardTeacher /> <span>Juego</span>
      </span>
    )
  },
  {
    key: 5,
    id: 'author',
    content: (
      <span id="authorMenu" className={styles.menu}>
        <GiTeacher /> <span>Sobre el autor</span>
      </span>
    )
  },
  {
    key: 6,
    id: 'contact',
    content: (
      <span id="contactMenu" className={styles.menu}>
        <RiMailSendLine /> <span>Contacta</span>
      </span>
    )
  }
];

const Menu = Keyframes.Spring({
  in: async next => {
    await next({ position: 'fixed', transform: 'translateX(0%)' });
  },
  out: async next => {
    await DelayUtils.delay(700);
    await next({ position: 'relative', transform: 'translateX(-100%)' });
  }
});

const MenuItems = Keyframes.Trail({
  in: async next => {
    await DelayUtils.delay(600);
    await next({ opacity: 1, transform: 'translateX(0px)' });
  },
  out: async next => {
    await next({ opacity: 0, transform: 'translateX(-40px)' });
  }
});

export const CollapseMenu = ({ brand, handleNavbar, navbarState, selected, top }) => {
  useEffect(() => {
    if (selected && navbarState) onAnimate(selected);
  }, [navbarState, selected]);

  useLockBodyScroll(navbarState);

  const onAnimate = section => {
    DOMUtils.addClass(document.getElementById(`${section}Menu`), styles.active);
    const rest = links.filter(item => item !== `${section}Menu`);
    rest.forEach((item, i) => DOMUtils.removeClass(document.getElementById(item), styles.active));
  };

  const onNavSection = section => {
    handleNavbar();
    const offsetTop = document.getElementById(section).offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  return (
    <div className={styles.menuWrap}>
      <Menu config={config.gentle} unique state={navbarState ? 'in' : 'out'}>
        {props => {
          return (
            <nav style={{ ...props, top, zIndex: 2 }}>
              <ul className={styles.wrap}>
                {brand('burger')}
                <MenuItems keys={item => item.key} items={items} state={navbarState ? 'in' : 'out'} reverse={!navbarState}>
                  {trailitem => trailprops => (
                    <li className={styles.content} onClick={() => onNavSection(trailitem.id)} style={{ ...trailprops, padding: '10px' }}>
                      {trailitem.content}
                    </li>
                  )}
                </MenuItems>
              </ul>
            </nav>
          );
        }}
      </Menu>
    </div>
  );
};

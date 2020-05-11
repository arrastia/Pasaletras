import React from 'react';

import { config, Keyframes } from 'react-spring/renderprops';

import { GiBookshelf, GiHouse, GiMailbox, GiShoppingCart, GiTabletopPlayers } from 'react-icons/gi';
import { RiMailSendLine } from 'react-icons/ri';

import styles from './CollapseMenu.module.scss';

import { useLockBodyScroll } from 'interfaces/.tools/Hooks/useLockBodyScroll';

import { DelayUtils } from 'interfaces/.tools/Utils/DelayUtils';

const items = [
  {
    key: 1,
    id: 'home',
    content: (
      <span className={styles.menu}>
        <GiHouse /> <span>Pasaletras</span>
      </span>
    )
  },
  {
    key: 2,
    id: 'buy',
    content: (
      <span className={styles.menu}>
        <GiShoppingCart /> <span>Cómpralo</span>
      </span>
    )
  },
  {
    key: 3,
    id: 'free',
    content: (
      <span className={styles.menu}>
        <GiBookshelf /> <span>Muestras gratuitas</span>
      </span>
    )
  },
  {
    key: 4,
    id: 'game',
    content: (
      <span className={styles.menu}>
        <GiTabletopPlayers /> <span>Juego</span>
      </span>
    )
  },
  {
    key: 5,
    id: 'author',
    content: (
      <span className={styles.menu}>
        <GiBookshelf /> <span>Sobre el autor</span>
      </span>
    )
  },
  {
    key: 6,
    id: 'contact',
    content: (
      <span className={styles.menu}>
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

export const CollapseMenu = ({ navbarState, handleNavbar, top, brand }) => {
  useLockBodyScroll(navbarState);

  const onNavSection = section => {
    handleNavbar();
    const offsetTop = document.getElementById(section).offsetTop;
    window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
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

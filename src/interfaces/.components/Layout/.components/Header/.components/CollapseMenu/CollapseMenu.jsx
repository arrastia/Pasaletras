import React from 'react';
import { config, Keyframes } from 'react-spring/renderprops';

import { GiBookshelf, GiHouse, GiMailbox, GiShoppingCart, GiTabletopPlayers } from 'react-icons/gi';

import styles from './CollapseMenu.module.scss';

import { useLockBodyScroll } from 'interfaces/.tools/Hooks/useLockBodyScroll';

import { DelayUtils } from 'interfaces/.tools/Utils/DelayUtils';

const items = [
  {
    key: 1,
    id: 'home',
    content: (
      <span className={styles.home}>
        <GiHouse /> Pasaletras
      </span>
    )
  },
  {
    key: 2,
    id: 'buy',
    content: (
      <span className={styles.home}>
        <GiShoppingCart /> Cómpralo
      </span>
    )
  },
  {
    key: 3,
    id: 'muestras',
    content: (
      <span className={styles.home}>
        <GiBookshelf /> Muestras gratuitas
      </span>
    )
  },
  {
    key: 4,
    id: 'juego',
    content: (
      <span className={styles.home}>
        <GiTabletopPlayers /> Juego
      </span>
    )
  },
  {
    key: 5,
    id: 'autor',
    content: (
      <span className={styles.home}>
        <GiBookshelf /> Sobre el autor
      </span>
    )
  },
  {
    key: 6,
    id: 'contacta',
    content: (
      <span className={styles.home}>
        <GiMailbox /> Contacta
      </span>
    )
  }
];

const Menu = Keyframes.Spring({
  in: async next => {
    await next({
      position: 'fixed',
      transform: 'translateX(5%)'
    });
  },
  out: async next => {
    await DelayUtils.delay(700);
    await next({
      position: 'relative',
      transform: 'translateX(-100%)'
    });
  }
});

const MenuItems = Keyframes.Trail({
  in: async next => {
    await DelayUtils.delay(600);
    await next({
      opacity: 1,
      transform: 'translateX(0px)'
    });
  },
  out: async next => {
    await next({
      opacity: 0,
      transform: 'translateX(-40px)'
    });
  }
});

export const CollapseMenu = ({ navbarState, handleNavbar, top }) => {
  useLockBodyScroll(navbarState);

  const onNavSection = section => {
    handleNavbar();
    const offsetTop = document.getElementById(section).offsetTop;
    window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
  };

  // return navbarState && DelayUtils.delay(600) ? (
  return (
    <div className={styles.menuWrap}>
      <Menu config={config.gentle} unique state={navbarState ? 'in' : 'out'}>
        {props => {
          return (
            <nav style={{ ...props, top, zIndex: 2 }}>
              <ul className={styles.wrap}>
                <MenuItems keys={item => item.key} items={items} state={navbarState ? 'in' : 'out'} reverse={!navbarState}>
                  {trailitem => trailprops => (
                    <li onClick={() => onNavSection(trailitem.id)} style={{ ...trailprops, padding: '10px' }}>
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
  // : (
  //   <Fragment></Fragment>
  // );
};

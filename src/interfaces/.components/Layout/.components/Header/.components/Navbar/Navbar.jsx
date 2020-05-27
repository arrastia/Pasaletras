import React, { Fragment } from 'react';

import styles from './Navbar.module.scss';

import { Burger } from './Burger';
import { NavLinks } from './NavLinks';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

export const Navbar = props => {
  const breakpoints = useBreakpoint();

  return (
    <div className={styles.wrap}>
      {breakpoints.tablet ? (
        <Fragment>
          {props.brand('navbar')}
          <NavLinks selected={props.selected} />
        </Fragment>
      ) : (
        <div className={styles.burgerWrap}>
          <Burger navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
        </div>
      )}
    </div>
  );
};

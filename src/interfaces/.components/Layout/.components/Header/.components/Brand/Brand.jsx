import React from 'react';

import logo from 'assets/img/svg/portada.svg';

import styles from './Brand.module.scss';

export const Brand = ({ className }) => <img className={`${styles.logo} ${styles[className]}`} src={logo} alt="logo" />;

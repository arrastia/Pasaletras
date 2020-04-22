import React from 'react';

import styles from './App.module.scss';

import logo from './logo.svg';

import { Layout } from 'interfaces/.components/Layout';

export const App = () => {
  const layout = children => <Layout>{children}</Layout>;

  return layout(
    <div className={styles.main}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

import React, { Fragment } from 'react';

import styles from './App.module.scss';

import logo from './logo.svg';
import fondo from 'assets/img/Pasaletras_mockup7.jpg';

import { Layout } from 'interfaces/.components/Layout';

import { LanguageProvider } from 'interfaces/.tools/Providers/LanguageProvider';
import { MessagesProvider } from 'interfaces/.tools/Providers/MessagesProvider';
import { Home } from 'interfaces/views/Home/Home';

export const App = () => {
  const layout = children => (
    <MessagesProvider>
      <LanguageProvider>
        <Layout>{children}</Layout>
      </LanguageProvider>
    </MessagesProvider>
  );

  return layout(
    <Fragment>
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
        <Home />
      </div>
    </Fragment>
  );
};

import React, { Fragment } from 'react';

import styles from './App.module.scss';

import { Layout } from 'interfaces/.components/Layout';

import { Author } from 'interfaces/views/Author';
import { Buy } from 'interfaces/views/Buy';
import { Free } from 'interfaces/views/Free';
import { Game } from 'interfaces/views/Game';
import { Home } from 'interfaces/views/Home';

import { LanguageProvider } from 'interfaces/.tools/Providers/LanguageProvider';
import { MessagesProvider } from 'interfaces/.tools/Providers/MessagesProvider';

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
        <Home />
        <Buy />
        <Free />
        <Game />
        <Author />
      </div>
    </Fragment>
  );
};

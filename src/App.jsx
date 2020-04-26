import React, { Fragment } from 'react';

import styles from './App.module.scss';

import { Layout } from 'interfaces/.components/Layout';

import { LanguageProvider } from 'interfaces/.tools/Providers/LanguageProvider';
import { MessagesProvider } from 'interfaces/.tools/Providers/MessagesProvider';
import { Home } from 'interfaces/views/Home';
import { Buy } from 'interfaces/views/Buy';

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
      </div>
    </Fragment>
  );
};

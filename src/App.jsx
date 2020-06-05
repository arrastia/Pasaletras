import React, { Fragment } from 'react';

import styles from './App.module.scss';

import { Layout } from 'interfaces/.components/Layout';

import { Author } from 'interfaces/views/Author';
import { Buy } from 'interfaces/views/Buy';
import { Contact } from 'interfaces/views/Contact';
import { Game } from 'interfaces/views/Game';
import { Home } from 'interfaces/views/Home';

import { BreakpointProvider } from 'interfaces/.tools/Providers/BreakpointProvider';
import { MessagesProvider } from 'interfaces/.tools/Providers/MessagesProvider';

export const App = () => {
  console.log(`%cHire me! https://arrastia.me/`, 'color: #61DAFB; zoom: 0.5; font-size: 1rem;');

  const layout = children => (
    <BreakpointProvider queries={queries}>
      <MessagesProvider>
        <Layout>{children}</Layout>
      </MessagesProvider>
    </BreakpointProvider>
  );

  const queries = { mobile: '(min-width: 415px)', tablet: '(min-width: 769px)', pc: '(min-width: 1025px)' };

  return layout(
    <Fragment>
      <Home />
      <div className={styles.main}>
        <Buy />
        <Game />
        <Author />
        <Contact />
      </div>
    </Fragment>
  );
};

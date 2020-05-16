import React, { Fragment } from 'react';

import styles from './App.module.scss';

import { Layout } from 'interfaces/.components/Layout';

import { Author } from 'interfaces/views/Author';
import { Buy } from 'interfaces/views/Buy';
import { Contact } from 'interfaces/views/Contact';
import { Free } from 'interfaces/views/Free';
import { Game } from 'interfaces/views/Game';
import { Home } from 'interfaces/views/Home';

import { BreakpointProvider } from 'interfaces/.tools/Providers/BreakpointProvider';
import { MessagesProvider } from 'interfaces/.tools/Providers/MessagesProvider';

export const App = () => {
  const layout = children => (
    <BreakpointProvider queries={queries}>
      <MessagesProvider>
        <Layout>{children}</Layout>
      </MessagesProvider>
    </BreakpointProvider>
  );

  const queries = { mobile: '(min-width: 414px)', tablet: '(min-width: 720px)', pc: '(min-width: 1024px)' };

  return layout(
    <Fragment>
      <Home />
      <div className={styles.main}>
        <Buy />
        <Free />
        <Game />
        <Author />
        <Contact />
      </div>
    </Fragment>
  );
};

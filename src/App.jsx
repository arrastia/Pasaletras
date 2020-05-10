import React from 'react';

import styles from './App.module.scss';

import { Layout } from 'interfaces/.components/Layout';

import { Author } from 'interfaces/views/Author';
import { Buy } from 'interfaces/views/Buy';
import { Contact } from 'interfaces/views/Contact';
import { Free } from 'interfaces/views/Free';
import { Game } from 'interfaces/views/Game';
import { Home } from 'interfaces/views/Home';

import { BreakpointProvider } from 'interfaces/.tools/Providers/BreakpointProvider';
import { LanguageProvider } from 'interfaces/.tools/Providers/LanguageProvider';
import { MessagesProvider } from 'interfaces/.tools/Providers/MessagesProvider';

export const App = () => {
  const layout = children => (
    <BreakpointProvider queries={queries}>
      <MessagesProvider>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </MessagesProvider>
    </BreakpointProvider>
  );

  const queries = { mobile: '(min-width: 414px)', tablet: '(min-width: 720px)', pc: '(min-width: 1024px)' };

  return layout(
    <div className={styles.main}>
      <Home />
      <Buy />
      <Free />
      <Game />
      <Author />
      <Contact />
    </div>
  );
};

import React, { useContext, useEffect, useReducer, useState } from 'react';

import styles from './Game.module.scss';

import { AccordionView } from './.components/AccordionView';
import { MagazineView } from './.components/MagazineView';
import { Pasaletras } from './.components/Pasaletras';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

import { gameReducer } from './.tools/Reducers/gameReducer';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

export const Game = () => {
  const messages = useContext(MessagesContext);

  const [isVisible, setIsVisible] = useState({});

  const [gameState, gameDispatch] = useReducer(gameReducer, { data: [], isVisible, isAnimate: false });

  const breakpoints = useBreakpoint();

  useEffect(() => {
    onLoadData();
  }, []);

  useEffect(() => {
    onLoadAnimation();
  }, [breakpoints]);

  const onLoadAnimation = () => gameDispatch({ type: 'IS_ANIMATED', payload: breakpoints.tablet });

  const onLoadData = () => {
    const data = [];
    pagina.forEach(item => data.push({ [item.id]: item }));
    setIsVisible(
      pagina.forEach(item => {
        isVisible[item.id] = false;
      })
    );
    gameDispatch({ type: 'INITIAL_LOAD', payload: { data } });
  };

  const onToggle = id => gameDispatch({ type: 'TOGGLE', payload: id });

  const renderLayout = children => (
    <SectionLayout id="game" title={messages.es['game']} subtitle={messages.es['startPlaying']}>
      {children}
    </SectionLayout>
  );

  const renderPasaletras = id => (
    <div className={styles.pasaletras}>
      <Pasaletras refresh={gameState.isVisible[id]} color={'var(--a1)'} isAnimate={gameState.isAnimate} />
    </div>
  );

  const pasaletras = {
    a1: [
      { title: `${messages.es['page']} 10`, text: renderPasaletras(10), id: 10, bgColor: 'var(--a1)' },
      { title: `${messages.es['page']} 11`, text: renderPasaletras(11), id: 11, bgColor: 'var(--a1)' },
      { title: `${messages.es['page']} 12`, text: renderPasaletras(12), id: 12, bgColor: 'var(--a1)' },
      { title: `${messages.es['page']} 13`, text: renderPasaletras(13), id: 13, bgColor: 'var(--a1)' },
      { title: `${messages.es['page']} 14`, text: renderPasaletras(14), id: 14, bgColor: 'var(--a1)' },
      { title: `${messages.es['page']} 15`, text: renderPasaletras(15), id: 15, bgColor: 'var(--a1)' }
    ],
    a2: [
      { title: `${messages.es['page']} 18`, text: renderPasaletras(18), id: 18, bgColor: 'var(--a2)' },
      { title: `${messages.es['page']} 19`, text: renderPasaletras(19), id: 19, bgColor: 'var(--a2)' },
      { title: `${messages.es['page']} 20`, text: renderPasaletras(20), id: 20, bgColor: 'var(--a2)' },
      { title: `${messages.es['page']} 21`, text: renderPasaletras(21), id: 21, bgColor: 'var(--a2)' },
      { title: `${messages.es['page']} 22`, text: renderPasaletras(22), id: 22, bgColor: 'var(--a2)' },
      { title: `${messages.es['page']} 23`, text: renderPasaletras(23), id: 23, bgColor: 'var(--a2)' }
    ]
  };

  const pagina = [
    { title: `${messages.es['page']} 1`, text: renderPasaletras(777), id: 777, bgColor: 'var(--a1)' },
    { title: `${messages.es['page']} 2`, text: renderPasaletras(888), id: 888, bgColor: 'var(--a1)' },
    { title: `${messages.es['page']} 3`, text: renderPasaletras(999), id: 999, bgColor: 'var(--a1)' },
    { title: `${messages.es['page']} 1`, text: renderPasaletras(111), id: 111, bgColor: 'var(--a1)' },
    { title: `${messages.es['page']} 2`, text: renderPasaletras(222), id: 222, bgColor: 'var(--a1)' },
    { title: `${messages.es['page']} 3`, text: renderPasaletras(333), id: 333, bgColor: 'var(--a1)' }
  ];

  return renderLayout(
    breakpoints.tablet ? (
      <MagazineView gameState={gameState} pagina={pasaletras} onToggle={onToggle} />
    ) : (
      <AccordionView gameState={gameState} pagina={pasaletras} onToggle={onToggle} />
    )
  );
};

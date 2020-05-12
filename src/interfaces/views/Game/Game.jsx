import React, { Fragment, useEffect, useReducer, useState } from 'react';

import styles from './Game.module.scss';

import { AccordionView } from './.components/AccordionView';
import { MagazineView } from './.components/MagazineView';
import { Pasaletras } from './.components/Pasaletras';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { gameReducer } from './.tools/Reducers/gameReducer';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

export const Game = () => {
  const [isVisible, setIsVisible] = useState({});

  const [gameState, gameDispatch] = useReducer(gameReducer, { data: [], isVisible, isAnimate: false });
  console.log('gameState', gameState);

  const breakpoints = useBreakpoint();

  useEffect(() => {
    onLoadData();
  }, []);

  useEffect(() => {
    onLoadAnimation();
  }, [breakpoints]);

  const layout = children => (
    <SectionLayout id="game" title="Juego" subtitle="Comienza a jugar">
      {children}
    </SectionLayout>
  );

  const onLoadAnimation = () => gameDispatch({ type: 'IS_ANIMATED', payload: breakpoints.tablet ? true : false });

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

  const renderPasaletras = id => (
    <div className={styles.pasaletras}>
      <Pasaletras refresh={gameState.isVisible[id]} color={'var(--a1)'} isAnimate={gameState.isAnimate} />
    </div>
  );

  const pasaletras = {
    a1: [
      { title: 'Página 10', text: renderPasaletras(10), id: 10, bgColor: 'var(--a1)' },
      { title: 'Página 11', text: renderPasaletras(11), id: 11, bgColor: 'var(--a1)' },
      { title: 'Página 12', text: renderPasaletras(12), id: 12, bgColor: 'var(--a1)' },
      { title: 'Página 13', text: renderPasaletras(13), id: 13, bgColor: 'var(--a1)' },
      { title: 'Página 14', text: renderPasaletras(14), id: 14, bgColor: 'var(--a1)' },
      { title: 'Página 15', text: renderPasaletras(15), id: 15, bgColor: 'var(--a1)' }
    ],
    a2: [
      { title: 'Página 18', text: renderPasaletras(18), id: 18, bgColor: 'var(--a2)' },
      { title: 'Página 19', text: renderPasaletras(19), id: 19, bgColor: 'var(--a2)' },
      { title: 'Página 20', text: renderPasaletras(20), id: 20, bgColor: 'var(--a2)' },
      { title: 'Página 21', text: renderPasaletras(21), id: 21, bgColor: 'var(--a2)' },
      { title: 'Página 22', text: renderPasaletras(22), id: 22, bgColor: 'var(--a2)' },
      { title: 'Página 23', text: renderPasaletras(23), id: 23, bgColor: 'var(--a2)' }
    ]
  };

  const pagina = [
    { title: 'Pagina 1', text: renderPasaletras(777), id: 777, bgColor: 'var(--a1)' },
    { title: 'Pagina 2', text: renderPasaletras(888), id: 888, bgColor: 'var(--a1)' },
    { title: 'Pagina 3', text: renderPasaletras(999), id: 999, bgColor: 'var(--a1)' },
    { title: 'Pagina 1', text: renderPasaletras(111), id: 111, bgColor: 'var(--a1)' },
    { title: 'Pagina 2', text: renderPasaletras(222), id: 222, bgColor: 'var(--a1)' },
    { title: 'Pagina 3', text: renderPasaletras(333), id: 333, bgColor: 'var(--a1)' }
  ];

  return layout(
    breakpoints.tablet ? (
      <MagazineView gameState={gameState} pagina={pasaletras} onToggle={onToggle} />
    ) : (
      <AccordionView gameState={gameState} pagina={pasaletras} onToggle={onToggle} />
    )
  );
};

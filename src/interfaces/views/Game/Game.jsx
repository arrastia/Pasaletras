import React, { useEffect, useReducer, useState } from 'react';

import styles from './Game.module.scss';

import { Accordion } from './.components/Accordion';
import { Pasaletras } from './.components/Pasaletras';
import { SectionLayout } from 'interfaces/.components/SectionLayout';
import { TabPanel } from './.components/TabView/_components/TabPanel';
import { TabView } from './.components/TabView';

import { gameReducer } from './.tools/Reducers/gameReducer';

export const Game = () => {
  const [activeView, setActiveView] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const [gameState, gameDispatch] = useReducer(gameReducer, { data: [], isVisible });

  useEffect(() => {
    onLoadData();
  }, []);

  const layout = children => (
    <SectionLayout id="game" title="game" subtitle="JUEGA CONNOSOTROS">
      {children}
    </SectionLayout>
  );

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

  const renderBrand = () => <span className={styles.brand}>Página 1</span>;

  const renderPasaletras = id => (
    <div className={styles.pasaletras}>
      <Pasaletras refresh={gameState.isVisible[id]} color={'var(--a1)'} />
    </div>
  );

  const pagina = [
    { title: 'Pagina 1', text: renderPasaletras(777, 'var(--a1)'), id: 777, bgColor: 'var(--a1)' },
    { title: 'Pagina 2', text: renderPasaletras(888, 'var(--a1)'), id: 888, bgColor: 'var(--a1)' }
  ];

  const pagina2 = [
    { title: 'Pagina 3', text: renderPasaletras(), id: 777 },
    { title: 'Pagina 4', text: renderPasaletras(), id: 777 }
  ];

  return layout(
    <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
      <TabPanel header="Nivel A1">
        {pagina.map(item => (
          <Accordion
            bgColor="var(--a1)"
            content={item}
            id={item.id}
            isOpen={gameState.isVisible[item.id]}
            key={item.id}
            onOpen={onToggle}
          />
        ))}
      </TabPanel>
      <TabPanel header="Nivel A2">
        {pagina.map(item => (
          <Accordion
            bgColor="var(--a2)"
            content={item}
            id={item.id}
            isOpen={gameState.isVisible[item.id]}
            key={item.id}
            onOpen={onToggle}
          />
        ))}
      </TabPanel>
      <TabPanel header="Nivel B1">
        {pagina.map(item => (
          <Accordion
            bgColor="var(--b1)"
            content={item}
            id={item.id}
            isOpen={gameState.isVisible[item.id]}
            key={item.id}
            onOpen={onToggle}
          />
        ))}
      </TabPanel>
      <TabPanel header="Nivel B2">
        {pagina.map(item => (
          <Accordion
            bgColor="var(--b2)"
            content={item}
            id={item.id}
            isOpen={gameState.isVisible[item.id]}
            key={item.id}
            onOpen={onToggle}
          />
        ))}
      </TabPanel>
      <TabPanel header="Nivel C1">Content V</TabPanel>
      <TabPanel header="Nivel C2">Content VI</TabPanel>
    </TabView>
  );
};

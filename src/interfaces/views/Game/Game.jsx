import React, { useEffect, useReducer, useState } from 'react';

import styles from './Game.module.scss';

import { Accordion } from './.components/Accordion';
import { Pasaletras } from './.components/Pasaletras';
import { SectionLayout } from 'interfaces/.components/SectionLayout';
import { TabPanel } from './.components/TabView/_components/TabPanel';
import { TabView } from './.components/TabView';

// import { AccordionTab } from './.components/Accordion/.components/AccordionTab';

import { gameReducer } from './.tools/Reducers/gameReducer';

export const Game = () => {
  const [activeView, setActiveView] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isVisible, setIsVisible] = useState({});

  const [gameState, gameDispatch] = useReducer(gameReducer, {
    data: [],
    isVisible
  });

  useEffect(() => {
    onLoadData();
  }, []);

  const onLoadData = () => {
    const data = [];
    pagina.forEach((item, i) => data.push({ [item.id]: item }));
    setIsVisible(
      pagina.forEach(item => {
        isVisible[item.id] = false;
      })
    );
    gameDispatch({ type: 'INITIAL_LOAD', payload: { data } });
  };

  const onToggle = id => gameDispatch({ type: 'TOGGLE', payload: id });

  const layout = children => (
    <SectionLayout id="game" title="game" subtitle="JUEGA CONNOSOTROS">
      {children}
    </SectionLayout>
  );

  const renderBrand = () => <span className={styles.brand}>Página 1</span>;

  const renderPasaletras = id => (
    <div className={styles.pasaletras}>
      <Pasaletras refresh={gameState.isVisible[id]} />
    </div>
  );

  const pagina = [
    { title: 'Pagina 1', text: renderPasaletras(777), id: 777 },
    { title: 'Pagina 2', text: renderPasaletras(888), id: 888 }
  ];

  const pagina2 = [
    { title: 'Pagina 3', text: renderPasaletras(), id: 777 },
    { title: 'Pagina 4', text: renderPasaletras(), id: 777 }
  ];

  return layout(
    <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
      <TabPanel header="Nivel A1">
        {pagina.map((item, i) => {
          return <Accordion key={item.id} id={item.id} content={item} isOpen={gameState.isVisible[item.id]} onOpen={onToggle} />;
        })}
      </TabPanel>
      <TabPanel header="Nivel A2"></TabPanel>
      <TabPanel header="Nivel B1">
        {/* {accordionContent.map((item, id) => (
          <Accordion key={id} id={id} content={item} />
        ))} */}
      </TabPanel>
      <TabPanel header="Nivel B2">Content IV</TabPanel>
      <TabPanel header="Nivel C1">Content V</TabPanel>
      <TabPanel header="Nivel C2">Content VI</TabPanel>
    </TabView>
  );
};

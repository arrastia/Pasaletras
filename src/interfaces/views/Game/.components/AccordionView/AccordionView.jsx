import React, { useState } from 'react';

import styles from './AccordionView.module.scss';

import { Accordion } from '../Accordion';
import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

export const AccordionView = ({ gameState, onToggle, pagina }) => {
  const [activeView, setActiveView] = useState(0);

  return (
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

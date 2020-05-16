import React, { useContext, useState } from 'react';

import styles from './AccordionView.module.scss';

import { Accordion } from '../Accordion';
import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const AccordionView = ({ gameState, onToggle, pagina }) => {
  const messages = useContext(MessagesContext);

  const [activeView, setActiveView] = useState(0);

  return (
    <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
      <TabPanel header={`${messages.es['level']} ${messages.es['a1']}`}>
        {pagina.a1.map(item => (
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
      <TabPanel header={`${messages.es['level']} ${messages.es['a2']}`}>
        {pagina.a2.map(item => (
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
      {/* <TabPanel header= {`${messages.es['level']} ${messages.es['B1']}`}>
        {pagina.a1.map(item => (
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
      <TabPanel header= {`${messages.es['level']} ${messages.es['B2']}`}>
        {pagina.a1.map(item => (
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
      <TabPanel header= {`${messages.es['level']} ${messages.es['C1']}`}>Content V</TabPanel>
      <TabPanel header= {`${messages.es['level']} ${messages.es['C2']}`}>Content VI</TabPanel> */}
    </TabView>
  );
};

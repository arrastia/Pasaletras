import React, { useContext, useState } from 'react';

import styles from './AccordionView.module.scss';

import { Accordion } from '../Accordion';
import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const AccordionView = ({ gameState, onToggle, pagina }) => {
  const messages = useContext(MessagesContext);

  const [activeView, setActiveView] = useState(0);

  const renderTabPanels = () => {
    const data = [];
    for (const key in pagina) {
      data.push(
        <TabPanel header={messages.es[key]} color={'var(--a1)'} id={key}>
          {pagina[key].map(item => {
            console.log('item', item);
            return (
              <Accordion
                bgColor={item.bgColor}
                content={item}
                id={item.id}
                isOpen={gameState.isVisible[item.id]}
                key={item.id}
                onOpen={onToggle}
              />
            );
          })}
        </TabPanel>
      );
    }
    return data;
  };

  return (
    <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
      {renderTabPanels()}
    </TabView>
  );
};

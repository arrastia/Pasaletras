import React, { useContext, useState } from 'react';

import { Accordion } from './.components/Accordion';
import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const AccordionView = ({ gameState, onToggle, pagina }) => {
  const messages = useContext(MessagesContext);

  const [activeView, setActiveView] = useState(0);

  const tabStyles = key => ({ color: `var(--${key})`, borderBottom: `0.2rem solid var(--${key})` });

  const renderTabPanels = () => {
    const data = [];
    for (const key in pagina) {
      const index = Object.keys(pagina).indexOf(key);
      data.push(
        <TabPanel header={messages.es[key]} headerStyle={index === activeView ? tabStyles(key) : {}} id={key} key={key}>
          {pagina[key].map(item => (
            <Accordion content={item} id={item.id} isOpen={gameState.isVisible[item.id]} key={item.id} onOpen={onToggle} />
          ))}
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

import React, { useContext, useState, Fragment } from 'react';

import styles from './MagazineView.module.scss';

import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const MagazineView = ({ gameState, onToggle, pagina }) => {
  const messages = useContext(MessagesContext);

  const [activeView, setActiveView] = useState(0);

  const renderBrand = (bgColor, page) => (
    <span className={styles.brand} style={{ background: bgColor }}>
      {page}
    </span>
  );

  const renderTabPanels = () => {
    const data = [];
    for (const key in pagina) {
      data.push(
        <TabPanel header={messages.es[key]} color={'var(--a1)'} id={key}>
          <div className={styles.wrap}>
            {pagina[key].map(item => (
              <div key={item.id} className={styles.pasaletras} onClick={() => onToggle(777)}>
                <span className={styles.ball}>{item.text}</span>
                {renderBrand(item.bgColor, item.title)}
              </div>
            ))}
          </div>
        </TabPanel>
      );
    }
    return data;
  };

  return (
    <Fragment>
      <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
        {renderTabPanels()}
      </TabView>
    </Fragment>
  );
};

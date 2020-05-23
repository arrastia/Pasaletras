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
      const index = Object.keys(pagina).indexOf(key);
      data.push(
        <TabPanel header={messages.es[key]} headerStyle={tabStyles(index, key)} id={key}>
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

  const tabStyles = (index, key) => {
    const isSelected = index === activeView;
    return {
      color: isSelected ? `var(--${key})` : '',
      borderBottom: isSelected ? `0.2rem solid var(--${key})` : '',
      margin: '0 1.5rem'
    };
  };

  return (
    <Fragment>
      <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
        {renderTabPanels()}
      </TabView>
    </Fragment>
  );
};

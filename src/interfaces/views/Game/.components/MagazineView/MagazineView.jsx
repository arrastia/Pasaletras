import React, { useContext, useState, Fragment } from 'react';

import { FiExternalLink } from 'react-icons/fi';

import styles from './MagazineView.module.scss';

import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

export const MagazineView = ({ gameState, handleRedirect, onToggle, pagina }) => {
  const messages = useContext(MessagesContext);

  const [activeView, setActiveView] = useState(0);

  const renderBrand = (bgColor, page, redirectId) => (
    <span className={styles.brand} style={{ background: bgColor }}>
      {page}
      <span className={styles.link} onClick={() => handleRedirect(redirectId)}>
        <FiExternalLink />
      </span>
    </span>
  );

  const renderTabPanels = () => {
    const data = [];
    for (const key in pagina) {
      const index = Object.keys(pagina).indexOf(key);
      data.push(
        <TabPanel header={messages.es[key]} headerStyle={tabStyles(index, key)} id={key}>
          <div className={styles.wrap} style={wrapStyles(pagina[key])}>
            {pagina[key].map(item => (
              <div key={item.id} className={styles.pasaletras} onClick={() => onToggle(777)}>
                <span className={styles.ball}>{item.text}</span>
                {renderBrand(item.bgColor, item.title, item.redirect)}
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

  const wrapStyles = item => ({
    gridTemplateColumns: `repeat(${item.length > 3 ? 3 : 2}, 1fr)`,
    height: item.length > 3 ? '1000px' : '500px'
  });

  return (
    <Fragment>
      <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
        {renderTabPanels()}
      </TabView>
    </Fragment>
  );
};

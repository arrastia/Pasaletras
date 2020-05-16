import React, { useContext, useState } from 'react';

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

  return (
    <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
      <TabPanel
        header={`${messages.es['level']} ${messages.es['a1']}`}
        color={'var(--a1)'}
        headerStyle={{ color: activeView === 0 ? 'var(--white)' : '', background: activeView === 0 ? 'var(--a1)' : '' }}>
        <div className={styles.wrap}>
          {pagina.a1.map(item => (
            <div key={item.id} className={styles.pasaletras} onClick={() => onToggle(777)}>
              <span className={styles.ball}>{item.text}</span>
              {renderBrand(item.bgColor, item.title)}
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel
        header={`${messages.es['level']} ${messages.es['a2']}`}
        headerStyle={{ color: activeView === 1 ? 'var(--white)' : '', background: activeView === 1 ? 'var(--a2)' : '' }}>
        <div className={styles.wrap}>
          {pagina.a2.map(item => (
            <div key={item.id} className={styles.pasaletras} onClick={() => onToggle(777)}>
              <span className={styles.ball}>{item.text}</span>
              {renderBrand(item.bgColor, item.title)}
            </div>
          ))}
        </div>
      </TabPanel>
      {/* <TabPanel header= {`${messages.es['level']} ${messages.es['B1']}`}></TabPanel>
      <TabPanel header= {`${messages.es['level']} ${messages.es['B2']}`}></TabPanel>
      <TabPanel header= {`${messages.es['level']} ${messages.es['C1']}`}>Content V</TabPanel>
      <TabPanel header= {`${messages.es['level']} ${messages.es['C2']}`}>Content VI</TabPanel> */}
    </TabView>
  );
};

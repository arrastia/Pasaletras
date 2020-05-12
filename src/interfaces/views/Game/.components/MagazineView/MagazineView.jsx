import React, { useState } from 'react';

import styles from './MagazineView.module.scss';

import { TabPanel } from '../TabView/_components/TabPanel';
import { TabView } from '../TabView';

export const MagazineView = ({ gameState, onToggle, pagina }) => {
  console.log('gameState', gameState);
  const [activeView, setActiveView] = useState(0);

  const renderBrand = () => <span className={styles.brand}>Página 1</span>;

  return (
    <TabView activeIndex={activeView} onTabChange={event => setActiveView(event.index)}>
      <TabPanel header="Nivel A1">
        <div className={styles.wrap}>
          {pagina.map(item => (
            <div key={item.id} className={styles.pasaletras} onClick={() => onToggle(777)}>
              <span className={styles.ball}>{item.text}</span>
              {renderBrand()}
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel header="Nivel A2"></TabPanel>
      <TabPanel header="Nivel B1"></TabPanel>
      <TabPanel header="Nivel B2"></TabPanel>
      <TabPanel header="Nivel C1">Content V</TabPanel>
      <TabPanel header="Nivel C2">Content VI</TabPanel>
    </TabView>
  );
};

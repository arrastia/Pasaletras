/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useReducer, useState } from 'react';

import styles from './Game.module.scss';

import { pasaletrasConfig } from './.config';
import { webConfig } from 'config/www';

import { AccordionView } from './.components/AccordionView';
import { MagazineView } from './.components/MagazineView';
import { Pasaletras } from './.components/Pasaletras';
import { SectionLayout } from 'interfaces/.components/SectionLayout';

import { MessagesContext } from 'interfaces/.tools/Contexts/MessagesContext';

import { gameReducer } from './.tools/Reducers/gameReducer';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

import { GameUtils } from './.tools/Utils/GameUtils';
import { ReactUtils } from 'interfaces/.tools/Utils/ReactUtils';

export const Game = () => {
  const messages = useContext(MessagesContext);

  const [isVisible, setIsVisible] = useState({});

  const [gameState, gameDispatch] = useReducer(gameReducer, { data: [], isVisible, isAnimate: false, realData: {} });

  const breakpoints = useBreakpoint();

  useEffect(() => {
    onLoadData();
  }, []);

  useEffect(() => {
    onLoadAnimation();
  }, [breakpoints]);

  const handleRedirect = pageId => window.open(ReactUtils.getUrl(webConfig.baseURL, { pageId }));

  const onLoadAnimation = () => gameDispatch({ type: 'IS_ANIMATED', payload: breakpoints.tablet });

  const onLoadData = () => {
    const data = [];
    const pasaletrasKeys = Object.keys(pasaletras);
    for (let index = 0; index < pasaletrasKeys.length; index++) {
      const letras = pasaletrasKeys[index];
      pasaletras[letras].map(item => {
        data.push({ [item.id]: item });
        setIsVisible((isVisible[item.id] = false));
      });
    }

    gameDispatch({ type: 'INITIAL_LOAD', payload: { data, realData: pasaletras } });
  };

  const onToggle = id => gameDispatch({ type: 'TOGGLE', payload: id });

  const renderLayout = children => (
    <SectionLayout id="game" title={messages.es['game']} subtitle={messages.es['startPlaying']}>
      {children}
    </SectionLayout>
  );

  const renderPasaletras = (id, bgColor, redirectId) => (
    <div className={styles.pasaletras}>
      <Pasaletras
        color={bgColor}
        handleRedirect={() => handleRedirect(redirectId)}
        isAnimate={gameState.isAnimate}
        refresh={gameState.isVisible[id]}
      />
    </div>
  );

  const pasaletras = GameUtils.loadData(pasaletrasConfig, messages.es, renderPasaletras);

  return renderLayout(
    breakpoints.tablet ? (
      <MagazineView handleRedirect={handleRedirect} onToggle={onToggle} pagina={pasaletras} />
    ) : (
      <AccordionView gameState={gameState} handleRedirect={handleRedirect} onToggle={onToggle} pagina={pasaletras} />
    )
  );
};

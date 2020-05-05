import React, { useEffect, useRef, useState } from 'react';

// import styles from './Pasaletras.module.scss';
import './Pasaletras.scss';

import { Letra } from './.components/Letra';

export const Pasaletras = ({ refresh }) => {
  const [active, setActive] = useState(false); // refresh ?

  const containerRef = useRef(null);
  const selectorsRef = useRef(null);

  useEffect(() => {
    if (refresh) {
      setActive(true);
      window.addEventListener('load', () => {
        selectorsRef.current.style.transform = 'rotate(360deg)';
        const delay = 0.2;
        let duration = delay * abc.length;
        selectorsRef.current.style.transition = 'transform ' + duration + 's' + ' ease-in-out';
        setTimeout(() => {
          setActive(true);
          // if (selectorsRef.current.style) {
          selectorsRef.current.style.transform = 'none';
          selectorsRef.current.style.transition = 'none';
          // }
        }, duration * 1000);
      });
    } else () => setActive(false);
  }, [refresh]);

  const togglePickers = () => setActive(!active);

  const abc = [
    { word: 'a', bg: '#16a085' },
    { word: 'b', bg: '#61dafb' },
    { word: 'c', bg: '#e65c00' },
    { word: 'd', bg: '#00467f' },
    { word: 'e', bg: '#1f4037' },
    { word: 'f', bg: '#00467f' },
    { word: 'g', bg: '#e65c00' },
    { word: 'h', bg: '#1f4037' },
    { word: 'i', bg: '#16a085' },
    { word: 'j', bg: '#61dafb' },
    { word: 'k', bg: '#61dafb' },
    { word: 'l', bg: '#61dafb' },
    { word: 'm', bg: '#61dafb' },
    { word: 'n', bg: '#61dafb' },
    { word: 'o', bg: '#61dafb' },
    { word: 'p', bg: '#61dafb' },
    { word: 'q', bg: '#61dafb' },
    { word: 'r', bg: '#61dafb' },
    { word: 's', bg: '#61dafb' },
    { word: 't', bg: '#61dafb' },
    { word: 'u', bg: '#61dafb' },
    { word: 'v', bg: '#61dafb' },
    { word: 'w', bg: '#61dafb' },
    { word: 'x', bg: '#61dafb' },
    { word: 'y', bg: '#61dafb' },
    { word: 'z', bg: '#61dafb' }
  ];

  const len = abc.length;
  const degIncrement = 360 / len;
  const pickers = [];
  const radius = 180;
  const pickerAnimationDelay = 0.1;
  let i = 0;
  let delay;
  for (i = 0; i < len; i += 1) {
    const degrees = i * degIncrement;
    const rad = (degrees * Math.PI) / 180;
    delay = pickerAnimationDelay * i;
    let coordinateObject = {};
    let y = -radius * Math.cos(-rad);
    let x = -radius * Math.sin(-rad);
    coordinateObject.x = x;
    coordinateObject.y = y;

    pickers.push(
      <Letra
        transformCoordinates={coordinateObject}
        pickerIsActive={active}
        // pickerClicked={this.setBackgroundColor}
        pickerColor={abc[i]}
        delay={delay}
      />
    );
  }

  return (
    <div /* style={{ backgroundColor: '#61dafb', height: '3000' }}  */ className="wrap" ref={containerRef}>
      {/* <div className="play">
        <div className={'button' + (active === true ? ' active' : '')} onClick={() => togglePickers()}>
          PLAY
        </div>
      </div> */}
      <div className="selectorWrap">
        <div ref={selectorsRef} className="selectors">
          {pickers}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';

import { FaChalkboardTeacher } from 'react-icons/fa';

import { alphabet } from '../../.config';

// import styles from './Pasaletras.module.scss';
import './Pasaletras.scss';

import { Button } from 'interfaces/.components/Button';
import { Letra } from './.components/Letra';

export const Pasaletras = ({ color, handleRedirect, isAnimate, refresh }) => {
  const [active, setActive] = useState(false); // refresh ?

  const containerRef = useRef(null);
  const selectorsRef = useRef(null);

  useEffect(() => {
    if (refresh) {
      setActive(true);
      window.addEventListener('load', () => {
        selectorsRef.current.style.transform = 'rotate(360deg)';
        const delay = 0.2;
        let duration = delay * alphabet.length;
        selectorsRef.current.style.transition = 'transform ' + duration + 's' + ' ease-in-out';
        setTimeout(() => {
          setActive(true);
          selectorsRef.current.style.transform = 'none';
          selectorsRef.current.style.transition = 'none';
        }, duration * 1000);
      });
    } else () => setActive(false);
  }, [refresh]);

  useEffect(() => {
    isAnimateView();
  }, [isAnimate]);

  const isAnimateView = () => setActive(isAnimate);

  const togglePickers = () => setActive(!active);

  const len = alphabet.length;
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
        key={i}
        transformCoordinates={coordinateObject}
        pickerIsActive={active}
        pickerClicked={handleRedirect}
        pickerColor={alphabet[i]}
        delay={delay}
        color={color}
      />
    );
  }

  const buttonStyles = { background: color, borderRadius: '50%', color: 'var(--bg)', height: '4rem', opacity: 1, width: '4rem', zIndex: 2 };

  return (
    <div /* style={{ backgroundColor: '#61dafb', height: '3000' }}  */ className="wrap" ref={containerRef}>
      <div className="play">
        <Button style={buttonStyles} onClick={handleRedirect}>
          <FaChalkboardTeacher />
        </Button>
      </div>
      <div className="selectorWrap">
        <div ref={selectorsRef} className="selectors">
          {pickers}
        </div>
      </div>
    </div>
  );
};

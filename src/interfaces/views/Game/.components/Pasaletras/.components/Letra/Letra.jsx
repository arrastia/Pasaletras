import React from 'react';

import styles from './Letra.module.scss';

export const Letra = ({ delay, pickerClicked, pickerColor, pickerIsActive, transformCoordinates }) => {
  return (
    <span
      style={
        pickerIsActive
          ? {
              backgroundColor: 'var(--pasapalabra)',
              transform: 'translate(' + transformCoordinates.x + 'px, ' + transformCoordinates.y + 'px)',
              transitionDelay: delay + 's',
              color: 'var(--white)',
              padding: '0.25rem'
            }
          : {
              // backgroundColor: pickerColor.bg,
              transform: 'translate(0px,0px)',
              transitionDelay: delay + 's'
            }
      }
      className="selector"
      // className={styles.selector}
      onClick={pickerClicked}>
      {pickerColor}
    </span>
  );
};

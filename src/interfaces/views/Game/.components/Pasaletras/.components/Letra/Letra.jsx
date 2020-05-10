import React from 'react';

import styles from './Letra.module.scss';

export const Letra = ({ transformCoordinates, pickerIsActive, pickerClicked, pickerColor, delay, color }) => {
  const onPickerClicked = () => pickerClicked(pickerColor.bg);

  return (
    <span
      style={
        pickerIsActive
          ? {
              // backgroundColor: pickerColor.bg,
              backgroundColor: 'transparent',
              transform: 'translate(' + transformCoordinates.x + 'px, ' + transformCoordinates.y + 'px)',
              transitionDelay: delay + 's',
              border: `0.1rem solid ${color}`
            }
          : {
              backgroundColor: pickerColor.bg,
              transform: 'translate(0px,0px)',
              transitionDelay: delay + 's',
              border: `10px solid ${color}`
            }
      }
      className="selector"
      // className={styles.selector}
      // onClick={() => onPickerClicked()}
    >
      {pickerColor.word}
    </span>
  );
};

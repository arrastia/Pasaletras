import React from 'react';

import styles from './Letra.module.scss';

export const Letra = ({ transformCoordinates, pickerIsActive, pickerClicked, pickerColor, delay }) => {
  const onPickerClicked = () => pickerClicked(pickerColor.bg);

  return (
    <span
      style={
        pickerIsActive
          ? {
              backgroundColor: pickerColor.bg,
              transform: 'translate(' + transformCoordinates.x + 'px, ' + transformCoordinates.y + 'px)',
              transitionDelay: delay + 's'
            }
          : { backgroundColor: pickerColor.bg, transform: 'translate(0px,0px)', transitionDelay: delay + 's' }
      }
      className="selector"
      // className={styles.selector}
      // onClick={() => onPickerClicked()}
    >
      {pickerColor.word}
    </span>
  );
};

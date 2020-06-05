import React from 'react';

export const Letra = ({ delay, pickerClicked, pickerColor, pickerIsActive, transformCoordinates }) => (
  <span
    className="selector"
    onClick={pickerClicked}
    style={
      pickerIsActive
        ? {
            backgroundColor: 'var(--pasapalabra)',
            color: 'var(--white)',
            padding: '0.25rem',
            transform: 'translate(' + transformCoordinates.x + 'px, ' + transformCoordinates.y + 'px)',
            transitionDelay: delay + 's'
          }
        : { transform: 'translate(0px,0px)', transitionDelay: delay + 's' }
    }>
    {pickerColor}
  </span>
);

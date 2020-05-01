import React from 'react';

import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

export const NavLinks = () => {
  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <NavLinksView style={linkAnimation}>
      <a href="/">Home</a>
      <a href="/">Cómpralo</a>
      <a href="/">Muestras gratuitas</a>
      <a href="/">Audios</a>
      <a href="/">Sobre el autor</a>
      <a href="/">Contacta</a>
    </NavLinksView>
  );
};

const NavLinksView = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: var(--text);
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

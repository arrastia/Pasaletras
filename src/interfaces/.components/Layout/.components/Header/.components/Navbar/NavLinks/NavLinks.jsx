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

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0;
  }

  & a {
    border-bottom: 1px solid transparent;
    color: var(--text);
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    margin: 1.5rem;
    text-transform: uppercase;
    transition: all 300ms linear 0s;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;

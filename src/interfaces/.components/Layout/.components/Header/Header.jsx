import React, { useEffect, useRef, useState } from 'react';

import { useSpring, animated } from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';

import { MdWbSunny, MdBrightness3 } from 'react-icons/md';

import { Button } from 'interfaces/.components/Button';
import { CollapseMenu } from './.components/CollapseMenu';
import { Navbar } from './.components/Navbar';

import { useDarkMode } from 'interfaces/.tools/Hooks/useDarkMode';
import { useOnClickOutside } from 'interfaces/.tools/Hooks/useOnClickOutside';

export const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const headerViewRef = useRef(null);
  const menuRef = useRef(null);

  const [darkMode, setDarkMode] = useDarkMode();

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  const barAnimation = useSpring({ from: { transform: 'translate3d(0, -10rem, 0)' }, transform: 'translate3d(0, 0, 0)' });

  useEffect(() => {
    window.onscroll = () => handleOpacity();
  }, []);

  useEffect(() => {
    if (headerViewRef.current) setHeaderHeight(headerViewRef.current.getBoundingClientRect().height);
  }, [headerViewRef.current]);

  const handleOpacity = () => {
    if (document.documentElement.scrollTop > 50) setOpacity(0.5);
    else setOpacity(0);
  };

  const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const theme = { main: opacity };

  return (
    <div ref={menuRef}>
      <ThemeProvider theme={theme}>
        <HeaderView ref={headerViewRef} style={barAnimation}>
          <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdWbSunny /> : <MdBrightness3 />}</Button>
          <Navbar navbarState={isMenuOpen} handleNavbar={onToggleMenu} />
        </HeaderView>
      </ThemeProvider>
      <CollapseMenu navbarState={isMenuOpen} handleNavbar={onToggleMenu} top={headerHeight} />
    </div>
  );
};

const HeaderView = styled(animated.nav)`
  align-items: center;
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  &::before {
    background: var(--bg);
    content: '';
    height: 100%;
    left: 0;
    opacity: ${props => props.theme.main};
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    transition: opacity 0.5s ease-in-out;
  }
`;

HeaderView.defaultProps = {
  theme: {
    opactity: 1
  }
};

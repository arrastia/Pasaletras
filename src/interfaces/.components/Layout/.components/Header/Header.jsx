import React, { useRef, useState, useEffect } from 'react';

import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { CollapseMenu } from './.components/CollapseMenu';
import { Navbar } from './.components/Navbar';

import { MdWbSunny, MdBrightness3 } from 'react-icons/md';

import { Button } from 'interfaces/.components/Button';

import { useDarkMode } from 'interfaces/.tools/Hooks/useDarkMode';
import { useOnClickOutside } from 'interfaces/.tools/Hooks/useOnClickOutside';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);

  const headerViewRef = useRef(null);
  const menuRef = useRef(null);

  const [darkMode, setDarkMode] = useDarkMode();

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  useEffect(() => {
    if (headerViewRef.current) setHeaderHeight(headerViewRef.current.getBoundingClientRect().height);
  }, [headerViewRef.current]);

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  });

  const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div ref={menuRef}>
      <HeaderView ref={headerViewRef} style={barAnimation}>
        <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <MdWbSunny /> : <MdBrightness3 />}</Button>
        <Navbar navbarState={isMenuOpen} handleNavbar={onToggleMenu} />
      </HeaderView>
      <CollapseMenu navbarState={isMenuOpen} handleNavbar={onToggleMenu} top={headerHeight} />
    </div>
  );
};

const HeaderView = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--bg);
  opacity: 0.5;
  z-index: 2;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

import React, { Fragment, useEffect, useRef, useState } from 'react';

import { useSpring, animated } from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';

import { MdWbSunny, MdBrightness3 } from 'react-icons/md';
import { FiArrowUpCircle } from 'react-icons/fi';

import styles from './Header.module.scss';

import { Button } from 'interfaces/.components/Button';
import { CollapseMenu } from './.components/CollapseMenu';
import { Navbar } from './.components/Navbar';

import { useDarkMode } from 'interfaces/.tools/Hooks/useDarkMode';
import { useOnClickOutside } from 'interfaces/.tools/Hooks/useOnClickOutside';
import { Brand } from './.components/Brand/Brand';

const links = ['home', 'buy', 'game', 'author', 'contact'];

export const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0.7);
  const [selectedView, setSelectedView] = useState(null);

  const headerViewRef = useRef(null);
  const menuRef = useRef(null);

  const [darkMode, setDarkMode] = useDarkMode();

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  const barAnimation = useSpring({ from: { transform: 'translate3d(0, -10rem, 0)' }, transform: 'translate3d(0, 0, 0)' });

  useEffect(() => {
    window.onscroll = () => handleOpacity();
  }, []);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerViewRef.current]);

  const getDimensions = section => {
    const { height } = section.getBoundingClientRect();
    const offsetTop = section.offsetTop;
    const offsetBottom = offsetTop + height;

    return { height, offsetTop, offsetBottom };
  };

  const handleOpacity = () => {
    if (document.documentElement.scrollTop > 50) setOpacity(1);
    else setOpacity(0.7);
  };

  const handleScroll = () => {
    if (headerViewRef.current) {
      const height = headerViewRef.current.getBoundingClientRect().height;
      setHeaderHeight(height);

      const scrollPosition = window.scrollY + height;

      const selected = links.find(section => {
        if (section) {
          const test = document.getElementById(section);
          const { offsetBottom, offsetTop } = getDimensions(test);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected) setSelectedView(selected);
    }
  };

  const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const theme = { main: opacity };

  const renderBrand = className => (
    <span className={styles.brand}>
      <Brand className={className} />
    </span>
  );

  const onTop = () => {
    const offsetTop = document.getElementById('root').offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };

  return (
    <span ref={menuRef}>
      <ThemeProvider theme={theme}>
        <HeaderView id={'headerView'} ref={headerViewRef} style={barAnimation}>
          <Navbar navbarState={isMenuOpen} handleNavbar={onToggleMenu} brand={renderBrand} selected={selectedView} />
          <Button onClick={() => setDarkMode(!darkMode)} style={{ backgroundColor: 'transparent' }}>
            {darkMode ? <MdWbSunny /> : <MdBrightness3 />}
          </Button>
        </HeaderView>
      </ThemeProvider>
      <CollapseMenu navbarState={isMenuOpen} handleNavbar={onToggleMenu} top={headerHeight} brand={renderBrand} selected={selectedView} />
      {document.documentElement.scrollTop > 50 ? (
        <div className={styles.up}>
          <Button onClick={() => onTop()}>
            <FiArrowUpCircle />
          </Button>
        </div>
      ) : (
        <Fragment />
      )}
    </span>
  );
};

const HeaderView = styled(animated.nav)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: calc(100% - 2rem);
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
    box-shadow: var(--card-item-box-shadow);
  }

  @media (max-width: 768px) {
  }
`;

HeaderView.defaultProps = { theme: { opactity: 1 } };

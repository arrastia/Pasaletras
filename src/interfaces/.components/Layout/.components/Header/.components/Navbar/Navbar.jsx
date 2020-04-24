import React from 'react';
import styled from 'styled-components';

import { Burger } from './Burger';
import { NavLinks } from './NavLinks';

export const Navbar = props => {
  return (
    <FlexContainer>
      <NavLinks />
      <BurgerWrapper>
        <Burger navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
      </BurgerWrapper>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  height: 5rem;
  justify-content: space-between;
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  width: 60px;

  @media (min-width: 769px) {
    display: none;
  }
`;

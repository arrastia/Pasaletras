import React, { Fragment } from 'react';

import styles from './Navbar.module.scss';

import { Burger } from './Burger';
import { NavLinks } from './NavLinks';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

export const Navbar = props => {
  const breakpoints = useBreakpoint();

  // var clickMenu = function () {
  //   $('#navbar a:not([class="external"])').click(function (event) {
  //     var section = $(this).data("nav-section"),
  //       navbar = $("#navbar");

  //     if ($('[data-section="' + section + '"]').length) {
  //       $("html, body").animate(
  //         {
  //           scrollTop: $('[data-section="' + section + '"]').offset().top - 55,
  //         },
  //         500
  //       );
  //     }

  //     if (navbar.is(":visible")) {
  //       navbar.removeClass("in");
  //       navbar.attr("aria-expanded", "false");
  //       $(".js-nav-button").removeClass("active");
  //     }

  //     event.preventDefault();
  //     return false;
  //   });
  // };

  return (
    <div className={styles.wrap}>
      {breakpoints.tablet ? (
        <Fragment>
          {props.brand('navbar')}
          <NavLinks />
        </Fragment>
      ) : (
        <div className={styles.burgerWrap}>
          <Burger navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
        </div>
      )}
    </div>
  );
};

// import React from 'react';
// import styled from 'styled-components';

// import { Burger } from './Burger';
// import { NavLinks } from './NavLinks';

// export const Navbar = props => {
//   return (
//     <FlexContainer>
//       <NavLinks />
//       <BurgerWrapper>
//         <Burger navbarState={props.navbarState} handleNavbar={props.handleNavbar} />
//       </BurgerWrapper>
//     </FlexContainer>
//   );
// };

// const FlexContainer = styled.div`
//   display: flex;
//   height: 5rem;
//   justify-content: space-between;
// `;

// const BurgerWrapper = styled.div`
//   margin: auto 0;
//   width: 60px;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

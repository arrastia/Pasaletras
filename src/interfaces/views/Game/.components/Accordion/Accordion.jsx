import React, { Fragment, useEffect, useRef, useState } from 'react';

import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

import { AiFillCaretDown } from 'react-icons/ai';

export const Accordion = ({ bgColor, content, id, isOpen, onOpen }) => {
  const [contentMaxHeight, setContentMaxHeight] = useState(0);

  const ref = useRef();

  useEffect(() => {
    calcContentMaxHeight();
    window.addEventListener('resize', () => calcContentMaxHeight());
    return () => window.removeEventListener('resize', calcContentMaxHeight());
  }, [ref, contentMaxHeight]);

  const { scY, y, ...props } = useSpring({
    config: { duration: 300 },
    maxHeight: isOpen ? `400px` : '0px',
    opacity: isOpen ? 1 : 0,
    scY: isOpen ? -1 : 1
  });

  const calcContentMaxHeight = () => ref && ref.current && setContentMaxHeight(ref.current.scrollHeight);

  return (
    <Fragment>
      <AccordionHeading onClick={() => onOpen(id)} /* zIndex={1} */ /*  style={{ backgroundColor: bgColor }} */>
        {content.title}
        <AnimatedBox style={{ transform: scY.interpolate(scY => `scaleY(${scY})`) }} pl={2}>
          <AiFillCaretDown />
        </AnimatedBox>
      </AccordionHeading>
      <AnimatedBox ref={ref} style={{ overflow: 'hidden', ...props, height: '400px' }} /* zIndex={0} */>
        {content.text}
      </AnimatedBox>
    </Fragment>
  );
};

const AccordionHeading = styled.div`
  background-color: var(--bg);
  border-radius: 15px;
  box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.1);
  color: var(--text);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 1rem;
`;

const AnimatedBox = styled(animated.div)``;

AccordionHeading.defaultProps = {
  alignItems: 'center',
  backgroundColor: 'bg300',
  color: 'text100',
  fontSize: 2,
  fontWeight: 2,
  justifyContent: 'space-between',
  mb: 1,
  p: 1
};

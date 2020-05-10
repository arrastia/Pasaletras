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
    maxHeight: isOpen ? `500px` : '0px',
    opacity: isOpen ? 1 : 0,
    scY: isOpen ? -1 : 1
  });

  const calcContentMaxHeight = () => ref && setContentMaxHeight(ref.current.scrollHeight);

  return (
    <Fragment>
      <AccordionHeading onClick={() => onOpen(id)} zIndex={1} style={{ backgroundColor: bgColor }}>
        {content.title}
        <AnimatedBox style={{ transform: scY.interpolate(scY => `scaleY(${scY})`) }} pl={2}>
          <AiFillCaretDown />
        </AnimatedBox>
      </AccordionHeading>
      <AnimatedBox ref={ref} style={{ overflow: 'hidden', ...props, height: '500px' }} zIndex={0}>
        {content.text}
      </AnimatedBox>
    </Fragment>
  );
};

const AccordionHeading = styled.div`
  background-color: blueviolet;
  border-bottom: 1px solid var(--white);
  color: var(--white);
  cursor: pointer;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
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

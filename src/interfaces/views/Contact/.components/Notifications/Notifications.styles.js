import { animated } from 'react-spring';
import styled from 'styled-components';

export const Main = styled('div')`
  align-items: center;
  color: #676767;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Container = styled('div')`
  align-items: ${props => (props.position === 'center' ? 'center' : `flex-${props.position || 'end'}`)};
  bottom: ${props => (props.top ? 'unset' : '30px')};
  display: flex;
  flex-direction: ${props => (props.top ? 'column-reverse' : 'column')};
  left: 30px;
  margin: 0 auto;
  pointer-events: none;
  position: fixed;
  right: 30px;
  top: ${props => (props.top ? '30px' : 'unset')};
  width: 0 auto;
  z-index: 1000;

  @media (max-width: 680px) {
    align-items: center;
  }
`;

export const Message = styled(animated.div)`
  box-sizing: border-box;
  margin-bottom: ${props => (props.top ? '1rem' : '0')};
  margin-top: ${props => (props.top ? '0' : '1rem')};
  overflow: hidden;
  position: relative;
  width: 20ch;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Content = styled('div')`
  background: #445159;
  border-radius: 3px;
  color: white;
  display: grid;
  font-size: 1em;
  grid-gap: 10px;
  grid-template-columns: ${props => (props.canClose === false ? '1fr' : '1fr auto')};
  height: auto;
  opacity: 0.9;
  overflow: hidden;
  padding: 0 1rem 0.5rem 1rem;

  p {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    svg {
      color: ${props => `var(--${props.type.toLowerCase()})`};
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;

export const Button = styled('button')`
  align-self: flex-start;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: flex;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 0.5rem 0;
  pointer-events: all;

  :hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Life = styled(animated.div)`
  background: var(--twin-color);
  bottom: ${props => (props.top ? '10px' : '0')};
  height: 5px;
  left: 0px;
  position: absolute;
  width: auto;
`;

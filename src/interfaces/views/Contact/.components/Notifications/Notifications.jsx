import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FiCheckCircle, FiInfo, FiX, FiXCircle } from 'react-icons/fi';
import { useTransition } from 'react-spring';

import { Button, Container, Content, Life, Message } from './Notifications.styles.js';

let id = 0;

export const Notifications = ({ children, config, timeout }) => {
  const [cancelMap] = useState(() => new WeakMap());
  const [items, setItems] = useState([]);
  const [refMap] = useState(() => new WeakMap());

  const icons = { SUCCESS: <FiCheckCircle />, INFO: <FiInfo />, ERROR: <FiXCircle /> };

  useEffect(
    () =>
      void children(notification =>
        setItems(state => [...state, { key: id++, msg: notification.msg, timeout: notification.timeout, type: notification.type }])
      ),
    []
  );

  const transitions = useTransition(items, item => item.key, {
    from: { opacity: 0, height: 0, life: '100%' },
    enter: item => async next => await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({ life: '0%' });
      await next({ opacity: 0 });
      await next({ height: 0 });
    },
    onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
    config: (item, state) => (state === 'leave' ? [{ duration: item.timeout || timeout }, config, config] : config)
  });

  return (
    <Container top={'0'}>
      {transitions.map(({ key, item, props: { life, ...style } }) => (
        <Message key={key} style={style}>
          <Content ref={ref => ref && refMap.set(item, ref)} type={item.type}>
            <Life style={{ right: life }} />
            <p>
              {icons[item.type]}
              {item.msg}
            </p>
            <Button
              onClick={event => {
                event.stopPropagation();
                cancelMap.has(item) && cancelMap.get(item)();
              }}>
              <FiX size={18} />
            </Button>
          </Content>
        </Message>
      ))}
    </Container>
  );
};

Notifications.propTypes = {
  children: PropTypes.func,
  config: PropTypes.object,
  timeout: PropTypes.number
};

Notifications.defaultProps = {
  children: () => {},
  config: { tension: 125, friction: 20, precision: 0.1 },
  timeout: 3000
};

import React, { Fragment, useEffect, useRef, useState } from 'react';

import isNil from 'lodash/isNil';

import styles from './Tab.module.css';

export const Tab = ({
  className,
  disabled = false,
  divScrollTabsRef,
  header,
  headerStyle,
  id,
  index,
  isNavigationHidden,
  onTabHeaderClick,
  scrollTo,
  selected
}) => {
  const [titleHeader, setTitleHeader] = useState(header);

  const tabRef = useRef();

  useEffect(() => {
    setTitleHeader(titleHeader !== '' && titleHeader === header ? titleHeader : header !== '' ? header : titleHeader);
    if (document.getElementsByClassName('tabInput').length > 0) document.getElementsByClassName('tabInput')[0].focus();
  }, []);

  return (
    <Fragment>
      <div
        style={{
          display: 'none',
          left:
            !isNil(tabRef.current) && !isNil(divScrollTabsRef)
              ? `${tabRef.current.offsetLeft - divScrollTabsRef.scrollLeft - 18}px`
              : '0px',
          position: 'absolute',
          top: !isNil(tabRef.current) ? `${tabRef.current.offsetTop - 15}px` : '100px',
          zIndex: 9999
        }}></div>
      <div
        style={{
          display: 'none',
          left:
            !isNil(tabRef.current) && !isNil(divScrollTabsRef)
              ? `${tabRef.current.offsetLeft - divScrollTabsRef.scrollLeft - 18}px`
              : '0px',
          position: 'absolute',
          top: !isNil(tabRef.current) ? `${tabRef.current.offsetTop + tabRef.current.clientHeight - 4}px` : '100px',
          zIndex: 9999
        }}></div>
      <li
        className={`${className} p-tabview-nav-li`}
        role="presentation"
        style={{ ...headerStyle, pointerEvents: 'fill' }}
        ref={tabRef}
        // style={{ background: 'pink' }}
        tabIndex={index}>
        <a
          aria-selected={selected}
          className={styles.p_tabview_noDesign}
          id={id}
          onClick={e => {
            if (!disabled) {
              onTabHeaderClick(e);
              scrollTo(tabRef.current.offsetLeft - 80, 0);
            }
          }}
          role="tab"
          style={{
            pointerEvents: 'fill',
            display: 'inline-block',
            height: isNavigationHidden ? '2.6rem' : '2.7rem' /* background: 'yellow' */
          }}
          tabIndex={index}>
          <span className="p-tabview-title" /* style={{ background: 'blue' }} */>{!isNil(titleHeader) ? titleHeader : header}</span>
        </a>
      </li>
    </Fragment>
  );
};

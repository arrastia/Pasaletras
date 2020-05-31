import React, { Fragment, useEffect, useRef, useState } from 'react';

import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

import styles from './Tab.module.scss';

export const Tab = ({ className, disabled = false, header, headerStyle, id, index, onTabHeaderClick, scrollTo, selected }) => {
  const [titleHeader, setTitleHeader] = useState(header);

  const tabRef = useRef();

  useEffect(() => {
    setTitleHeader(!isEmpty(titleHeader) && titleHeader === header ? titleHeader : !isEmpty(header) ? header : titleHeader);
    if (!isEmpty(document.getElementsByClassName('tabInput'))) document.getElementsByClassName('tabInput')[0].focus();
  }, []);

  const onTabClick = event => {
    if (!disabled) {
      onTabHeaderClick(event);
      scrollTo(tabRef.current.offsetLeft - 80, 0);
    }
  };

  return (
    <Fragment>
      <li className={`${styles[className]} ${styles.tabItem}`} ref={tabRef} role="presentation" style={{ ...headerStyle }} tabIndex={index}>
        <a aria-selected={selected} className={styles.tab} id={id} onClick={event => onTabClick(event)} role="tab" tabIndex={index}>
          {!isNil(titleHeader) ? titleHeader : header}
        </a>
      </li>
    </Fragment>
  );
};

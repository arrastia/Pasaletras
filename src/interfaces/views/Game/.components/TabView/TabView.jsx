import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import isNil from 'lodash/isNil';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './TabView.scss';
import styles from './TabView.module.scss';

import { Button } from 'interfaces/.components/Button';
import { Tab } from './_components/Tab';

import { useBreakpoint } from 'interfaces/.tools/Hooks/useBreakpoint';

export const TabView = ({ activeIndex, children, className, id, onTabChange, onTabClick, renderActiveOnly, style, totalTabs }) => {
  const [activeIdx, setActiveIdx] = useState(activeIndex);
  const [idx] = useState(id);
  const [isNavigationHidden, setIsNavigationHidden] = useState(true);

  const divTabsRef = useRef();
  const ulTabsRef = useRef();

  const breakpoints = useBreakpoint();

  const classNamed = classNames('p-tabview p-component p-tabview-top', className);

  useEffect(() => {
    setTimeout(() => {
      if (breakpoints.tablet) {
        if (!isNil(ulTabsRef.current) && !isNil(divTabsRef.current)) {
          if (ulTabsRef.current.clientWidth > divTabsRef.current.clientWidth) setIsNavigationHidden(false);
          else setIsNavigationHidden(true);
        }
      }
    }, 100);
  }, [children]);

  useEffect(() => {
    setActiveIdx(activeIndex);
  }, [activeIndex]);

  const onTabHeaderClick = (event, tab, index) => {
    if (!tab.props.disabled) {
      if (!isUndefined(onTabClick) && !isNull(onTabClick)) onTabClick({ originalEvent: event, index: index, header: tab.props.header });
      if (!isNil(onTabChange)) onTabChange({ originalEvent: event, index: index });
      else {
        if (!isNil(onTabClick)) onTabClick({ originalEvent: event, index: index, header: tab.props.header });
      }
      if (isUndefined(onTabChange) || isNull(onTabChange)) setActiveIdx(index);
    }
    event.preventDefault();
  };

  const createContent = (tab, index) => (!renderActiveOnly ? tab.props.children : isSelected(index) && tab.props.children);

  const isSelected = index => activeIdx === index;

  const renderTabHeader = (tab, index) => {
    const selected = isSelected(index);
    const className = classNames(tab.props.headerClassName, 'p-unselectable-text', {
      'p-tabview-selected p-highlight': selected,
      'p-disabled': tab.props.disabled
    });
    const id = `${idx}_header_${index}`;
    return (
      <Tab
        children={tab.props.children}
        className={className}
        disabled={tab.props.disabled}
        divScrollTabsRef={divTabsRef.current}
        header={tab.props.header}
        headerStyle={tab.props.headerStyle}
        id={id}
        index={index}
        isNavigationHidden={isNavigationHidden}
        key={id}
        onTabHeaderClick={event => onTabHeaderClick(event, tab, index)}
        scrollTo={scrollTo}
        selected={selected}
      />
    );
  };

  const renderTabHeaders = () => React.Children.map(children, (tab, index) => renderTabHeader(tab, index));

  const renderNavigator = () => {
    const headers = renderTabHeaders();
    const buttonStyles = { borderRadius: '50%', display: isNavigationHidden ? 'none' : '' };
    return (
      <div className={styles.headersWrapper}>
        <Button
          onClick={() => scrollTo(divTabsRef.current.scrollLeft - divTabsRef.current.clientWidth * 0.25, 0)}
          onDoubleClick={() => scrollTo(0, 0)}
          style={buttonStyles}>
          <BsArrowLeftShort />
        </Button>
        <div className={styles.scrollTab} ref={divTabsRef} style={{ marginBottom: totalTabs === 1 ? '-5px' : '-1px' }}>
          <ul className="p-tabview-nav p-reset" role="tablist" style={{ display: 'inline-flex' }} ref={ulTabsRef}>
            {headers}
          </ul>
        </div>
        <Button
          onClick={() => scrollTo(divTabsRef.current.scrollLeft + divTabsRef.current.clientWidth * 0.25, 0)}
          onDoubleClick={() => scrollTo(ulTabsRef.current.clientWidth + 100, 0)}
          style={buttonStyles}>
          <BsArrowRightShort />
        </Button>
      </div>
    );
  };

  const renderContent = () => {
    const contents = React.Children.map(children, (tab, index) => {
      if (!renderActiveOnly || isSelected(index)) {
        return createContent(tab, index);
      }
    });
    return <div className="p-tabview-panels">{contents}</div>;
  };

  const scrollTo = (xCoordinate, yCoordinate) => {
    divTabsRef.current.scrollTo(xCoordinate, yCoordinate);
    setTimeout(() => {
      if (!isUndefined(ulTabsRef.current) && !isNull(ulTabsRef.current)) {
        if (ulTabsRef.current.clientWidth > divTabsRef.current.clientWidth) {
          if (isNavigationHidden) setIsNavigationHidden(true);
        } else {
          if (!isNavigationHidden) setIsNavigationHidden(true);
        }
      }
    }, 100);
  };

  return (
    <div id={id} className={classNamed} style={style}>
      {renderNavigator()}
      {renderContent()}
    </div>
  );
};

TabView.propTypes = {
  activeIndex: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  onTabChange: PropTypes.func,
  onTabClick: PropTypes.func,
  renderActiveOnly: PropTypes.bool,
  style: PropTypes.object
};

TabView.defaultProps = {
  activeIndex: -1,
  children: null,
  className: null,
  id: null,
  onTabChange: null,
  onTabClick: null,
  renderActiveOnly: true,
  style: null,
  totalTabs: null
};

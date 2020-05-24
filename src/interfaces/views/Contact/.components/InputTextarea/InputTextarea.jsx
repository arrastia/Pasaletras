import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { DOMUtils } from 'interfaces/.tools/Utils/DOMUtils';
import { InputTextUtils } from '../InputText/.tools/Utils/InputTextUtils';

export const InputTextarea = ({ keyfilter, onInputEvent, onKeyPress, validateOnly, ...rest }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (rest.autoResize) resize();
  }, []);

  const onKeyUp = e => {
    if (rest.autoResize) resize();
    if (rest.onKeyUp) rest.onKeyUp(e);
  };

  const onInput = e => {
    if (rest.autoResize) resize();
    if (onInputEvent) onInputEvent(e);
    if (rest.onChange) {
      if (e.target.value.length > 0) DOMUtils.addClass(e.target, 'p-filled');
      else DOMUtils.removeClass(e.target, 'p-filled');
    }
  };

  const onFocus = event => {
    if (rest.autoResize) resize();
    if (rest.onFocus) rest.onFocus(event);
  };

  const onBlur = event => {
    if (rest.autoResize) resize();
    if (rest.onBlur) rest.onBlur(event);
  };

  const resize = () => {
    let cachedScrollHeight = {};

    if (DOMUtils.isVisible(textareaRef.current)) {
      if (!cachedScrollHeight) {
        cachedScrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.overflow = 'hidden';
      }

      if (cachedScrollHeight !== textareaRef.current.scrollHeight) {
        textareaRef.current.style.height = '';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';

        if (parseFloat(textareaRef.current.style.height) >= parseFloat(textareaRef.current.style.maxHeight)) {
          textareaRef.current.style.overflowY = 'scroll';
          textareaRef.current.style.height = textareaRef.current.style.maxHeight;
        } else textareaRef.current.style.overflow = 'hidden';

        cachedScrollHeight = textareaRef.current.scrollHeight;
      }
    }
  };

  const className = classNames('p-inputtext p-inputtextarea p-component', rest.className, {
    'p-disabled': rest.disabled,
    'p-filled':
      (rest.value != null && rest.value.toString().length > 0) || (rest.defaultValue != null && rest.defaultValue.toString().length > 0),
    'p-inputtextarea-resizable': rest.autoResize
  });

  let textareaProps = InputTextUtils.findDiffKeys(rest, InputTextarea.defaultProps);

  return (
    <textarea
      {...textareaProps}
      className={className}
      ref={textareaRef}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      onInput={onInput}></textarea>
  );
};

InputTextarea.propTypes = {
  autoResize: PropTypes.bool,
  onInput: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipOptions: PropTypes.object
};

InputTextarea.defaultProps = {
  autoResize: false,
  onInput: null,
  tooltip: null,
  tooltipOptions: null
};

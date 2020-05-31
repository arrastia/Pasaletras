import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './InputText.scss';

import { DOMUtils } from 'interfaces/.tools/Utils/DOMUtils';
import { InputUtils } from 'interfaces/views/Contact/.tools/Utils/InputUtils';

export const InputText = forwardRef(({ keyfilter, onInput, onKeyPress, validateOnly, ...rest }, ref) => {
  const onPressKey = event => {
    if (onKeyPress) onKeyPress(event);
    if (keyfilter) InputUtils.onKeyPress(event, keyfilter, validateOnly);
  };

  const onInputClick = event => {
    let validatePattern = true;
    if (keyfilter && validateOnly) validatePattern = InputUtils.onValidate(event, keyfilter);
    if (onInput) onInput(event, validatePattern);

    if (rest.onChange) {
      if (event.target.value.length > 0) DOMUtils.addClass(event.target, 'p-filled');
      else DOMUtils.removeClass(event.target, 'p-filled');
    }
  };

  const classNameList = classNames('p-inputtext p-component', rest.className, {
    disabled: rest.disabled,
    'p-filled': (rest.value && rest.value.toString().length > 0) || (rest.defaultValue && rest.defaultValue.toString().length > 0)
  });

  let inputProps = InputUtils.findDiffKeys(rest, InputText.defaultProps);

  return <input ref={ref} {...inputProps} className={classNameList} onInput={onInputClick} onKeyPress={onPressKey} />;
});

InputText.propTypes = {
  keyfilter: PropTypes.any,
  onInput: PropTypes.func,
  onKeyPress: PropTypes.func,
  tooltip: PropTypes.string,
  tooltipOptions: PropTypes.object,
  validateOnly: PropTypes.bool
};

InputText.defaultProps = {
  keyfilter: null,
  onInput: null,
  onKeyPress: null,
  tooltip: null,
  tooltipOptions: null,
  validateOnly: false
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../../utils/is_Empty';
import Textarea from 'react-textarea-autosize';

import StyledTextarea from './Styled_Textarea';

const TextArea = ({ name, label, value, onChange, onFocus, error }) => {
  const [row, setRow] = useState(1);
  const err = isEmpty(error) ? 0 : 1;
  const val = isEmpty(value) ? 0 : 1;

  const onFocusTextarea = e => {
    if(row === 1) setRow(3);
    onFocus(e);
    setTimeout(() => document.querySelector('.contact-wrapper').scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),300);
  }

  const onFocusOut = () => isEmpty(value) ? setRow(1) : null;

  return (
    <StyledTextarea err={err} val={val}>
      <div>
        <Textarea 
          className={classnames('area', {'validate' : error})}
          name={name} 
          value={value}
          minRows={row} 
          onChange={e => onChange(e)} 
          onFocus={e => onFocusTextarea(e)}
          onBlur={() => onFocusOut()}
        />
        <span className={classnames('badge', { 'over': value.length > 500 })}>{value.length}</span>
        <label className={classnames('label', { 'shrink': !isEmpty(value) || !isEmpty(error) })} >
          {error ? error : label}
        </label>
      </div>
    </StyledTextarea>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TextArea;
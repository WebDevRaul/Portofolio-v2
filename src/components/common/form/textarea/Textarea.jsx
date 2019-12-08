import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../../utils/is_Empty';
import Textarea from 'react-textarea-autosize';

import StyledTextarea from './Styled_Textarea';

const TextArea = ({ name, label, value, focus, onChange, onFocus, error }) => {
  const [state, setState] = useState({ row: 1, shrink: 0 });
  const { row, shrink } = state;
  const err = isEmpty(error) ? 0 : 1;

  const onFocusTextarea = () => {
    if(row === 1) setState({ row: 3, shrink: 1 });
  }

  return (
    <StyledTextarea err={err}>
      <div onFocus={() => console.log('focus')}>
        <Textarea 
          className={classnames('area', {'validate' : error})}
          name={name} 
          value={value}
          minRows={row} 
          onChange={e => onChange(e)} 
          onFocus={onFocusTextarea}
        />
        <span className={classnames('badge', {'d-none': !shrink, 'over': value.length > 500 })}>{value.length}</span>
        <label className={classnames('label', { 'shrink': !isEmpty(value) || !isEmpty(error) || focus })} >
          {error ? error : label}
        </label>
      </div>
    </StyledTextarea>
  )
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  focus: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default TextArea;
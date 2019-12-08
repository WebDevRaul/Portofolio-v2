import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../../utils/is_Empty';

import StyledInput from './Styled_Input';

const Input = ({ name, label, value, focus, onChange, onFocus, type, error }) => {  
  const err = isEmpty(error) ? 0 : 1;
  
  return (
    <StyledInput err={err}>
      <input 
        className='form-input'
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='off'
        required
      />
      <label className={classnames('label', { 'shrink': !isEmpty(value) || !isEmpty(error) || focus })} >
        {error ? error : label}
      </label>
    </StyledInput>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string
}

export default Input;
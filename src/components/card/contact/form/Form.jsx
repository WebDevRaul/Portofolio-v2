import React, { useState } from 'react';
import Input from '../../../common/form/input/Input';
import StyledForm from './Styled_Form';

const Form = () => {
  const [state, setState] = useState({ name: '', email: '', text: '' });
  const [error, setError] = useState({ name: '', email: '', text: '' });
  const { name, email, text } = state;

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {}; 

  const onSubmit = e => {
    e.preventDefault();
  }

  return (
    <StyledForm>
      <form noValidate onSubmit={onSubmit}>
        <div className='data'>
          <Input
            name='name'
            label='Name'
            value={name}
            focus={false}
            onChange={onChange}
            onFocus={onFocus}
            error={error.name}
            type='text'
          />
          <Input
            name='email'
            label='Email'
            value={email}
            focus={false}
            onChange={onChange}
            onFocus={onFocus}
            error={error.email}
            type='email'
          />
        </div>
      </form>
    </StyledForm>
  )
}

export default Form;
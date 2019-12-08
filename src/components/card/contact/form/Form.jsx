import React, { useState } from 'react';
import Input from '../../../common/form/input/Input';
import TextArea from '../../../common/form/textarea/Textarea';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import validateForm from './utils/validate';

import StyledForm from './Styled_Form';

const Form = () => {
  const [state, setState] = useState({ name: '', email: '', text: '' });
  const [error, setError] = useState({ name: '', email: '', text: '' });
  const { name, email, text } = state;

  const onChange = e => setState({ ...state, [e.target.name]: e.target.value });
  const onFocus = e => {
    if(name || email || text !== undefined) {
      const field = Object.keys(error).filter(i => i === e.target.name )[0];
      setError({ ...error, [field]: '' });
    }
  }; 

  const onSubmit = e => {
    e.preventDefault();
    const { errors, isValid } = validateForm(state);
    if(!isValid) return setError({ ...error, ...errors });
    console.log('proceed')
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
        <TextArea 
          name='text'
          label='Your message here'
          value={text}
          focus={false}
          onChange={onChange}
          onFocus={onFocus}
          error={error.text}
        />
        <button className='btn' type='submit'>Send Message <KeyboardCapslockIcon /></button>
      </form>
    </StyledForm>
  )
}

export default Form;
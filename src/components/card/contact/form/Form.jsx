import React, { useState } from 'react';
import Input from '../../../common/form/input/Input';
import TextArea from '../../../common/form/textarea/Textarea';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import validateForm from './utils/validate';

import StyledForm from './Styled_Form';
import Title from '../../../common/title/Title';

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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ "form-name": "contact", ...state })
      // body: encode({ "form-name": "contact", ...state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  }

  return (
    <StyledForm>
      <Title text='Contact Form' />
      <form noValidate onSubmit={onSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
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
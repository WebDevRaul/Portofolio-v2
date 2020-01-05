import React from 'react';
import PropTypes from 'prop-types';
import Map from './map/Map';
import Info from './info/Info';
import Form from './form/Form';
import Wrapper from '../wrapper/Wrapper';

const Contact = ({ slide, openMessage }) => {
  return(
    <Wrapper slide={slide} isClass='contact-wrapper'>
      <i className='contact-i' />
      <Map />
      <Info />
      <Form openMessage={openMessage} />
    </Wrapper>
  )
}

Contact.propTypes = {
  slide: PropTypes.bool.isRequired,
  openMessage: PropTypes.func.isRequired
}

export default Contact;
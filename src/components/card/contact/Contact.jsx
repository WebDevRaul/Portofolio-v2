import React from 'react';
import PropTypes from 'prop-types';
import Map from './map/Map';
import Info from './info/Info';
import Form from './form/Form';
import Wrapper from '../wrapper/Wrapper';

const Contact = ({ slide }) => {
  return(
    <Wrapper slide={slide} isClass='contact'>
      <i className='contact' style={{ position: 'absolute', top: '-70px' }} />
      <Map />
      <Info />
      <Form />
    </Wrapper>
  )
}

Contact.propTypes = {
  slide: PropTypes.bool.isRequired
}

export default Contact;
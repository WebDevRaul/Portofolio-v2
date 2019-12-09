import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Map from './map/Map';
import Info from './info/Info';
import Form from './form/Form';

import StyledContact from './Styled_Contact';

const Contact = ({ contact }) => {
  return (
    <StyledContact>
      <div className={classnames('contact', {'slideInRight zIndex': contact, 'slideOutRight': !contact})}>
        <i className='top' />
        <Map />
        <Info />
        <Form />
        <i className='bottom' />
      </div>
    </StyledContact>
  )
}

Contact.propTypes = {
  contact: PropTypes.bool.isRequired
}

export default Contact;
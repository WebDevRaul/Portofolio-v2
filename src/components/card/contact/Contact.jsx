import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledContact from './Styled_Contact';

const Contact = ({ contact }) => {
  return (
    <StyledContact>
      <div className={classnames('contact', {'slideInRight': contact, 'slideOutRight': !contact})}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum explicabo, amet quisquam quibusdam pariatur eum facere ut reprehenderit delectus!
      </div>
    </StyledContact>
  )
}

Contact.propTypes = {
  contact: PropTypes.bool.isRequired
}

export default Contact;
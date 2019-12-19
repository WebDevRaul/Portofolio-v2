import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Wrapper from '../../wrapper/Wrapper';
import DoneIcon from '@material-ui/icons/Done';

import StyledMessage from './Styled_Message';

const Message = ({ onClose, slide }) => (
  <StyledMessage>
    <Wrapper slide={slide} isClass='wrapper-message'>
      <div className='close-message'>
        <span onClick={onClose}><CloseIcon /></span>
      </div>
      <div className='message'>
        <div className='logo'><DoneIcon /></div>
        <h1>Thank you</h1>
        <p>Your message has been successfully sent.</p>
      </div>
    </Wrapper>
  </StyledMessage>
)

Message.propTypes = {
  onClose: PropTypes.func.isRequired,
  slide: PropTypes.bool.isRequired
}

export default Message;
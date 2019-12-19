import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Wrapper from '../../wrapper/Wrapper';

import StyledMessage from './Styled_Message';

const Message = ({ onClose, slide }) => (
  <StyledMessage>
    <Wrapper slide={slide} isClass='wrapper-message'>
      <div className='close-message'>
        <span onClick={onClose}><CloseIcon /></span>
      </div>
      <div className='message'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt fugiat maiores non minima ab recusandae culpa qui rem tenetur beatae?
      </div>
    </Wrapper>
  </StyledMessage>
)

Message.propTypes = {
  onClose: PropTypes.func.isRequired,
  slide: PropTypes.bool.isRequired
}

export default Message;
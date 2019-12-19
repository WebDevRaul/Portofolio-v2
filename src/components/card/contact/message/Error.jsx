import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Wrapper from '../../wrapper/Wrapper';

import StyledMessage from './Styled_Message';

const Error = ({ onClose, slide }) => (
  <StyledMessage>
    <Wrapper slide={slide} isClass='wrapper-message'>
      <div className='close-message'>
        <span onClick={onClose}><CloseIcon /></span>
      </div>
      <div className='message'>
        <div className='logo error'><CloseIcon /></div>
        <h3>Ooops</h3>
        <p>Something went wrong on our end.</p>
        <p>Please go back and try again.</p>
      </div>
    </Wrapper>
  </StyledMessage>
)

Error.propTypes = {
  onClose: PropTypes.func.isRequired,
  slide: PropTypes.bool.isRequired
}

export default Error;
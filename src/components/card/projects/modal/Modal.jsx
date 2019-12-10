import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";
import CloseIcon from '@material-ui/icons/Close';

import StyledModal from './Styled_Modal';
import Wrapper from '../../wrapper/Wrapper';

const Modal = ({ image, title, slide, onClose }) => {
  return (
    <StyledModal>
      <Wrapper slide={slide}>
        <div className='modal'>
          <div onClick={onClose}><CloseIcon /></div>
          <Img fixed={image} />
        </div>
      </Wrapper>
    </StyledModal>
  )
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Modal;
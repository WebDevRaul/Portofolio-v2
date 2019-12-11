import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";
import CloseIcon from '@material-ui/icons/Close';
import BackgroundImage from 'gatsby-background-image'

import StyledModal from './Styled_Modal';
import Wrapper from '../../wrapper/Wrapper';

const Modal = ({ image, title, slide, onClose }) => {
  return (
    <StyledModal>
      <Wrapper slide={slide}>
        <div className='modal'>
          <i className='modal-top' />
          <div className='image'>
            <BackgroundImage fluid={image}>
              <div className='background-container' style={{ height: '300px' }} />
            </BackgroundImage>
          </div>
          <div className='close-modal' onClick={onClose}><CloseIcon /></div>
          <i className='modal-bottom' />
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
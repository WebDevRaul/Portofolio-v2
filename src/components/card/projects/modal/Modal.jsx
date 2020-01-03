import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../wrapper/Wrapper';
import CloseIcon from '@material-ui/icons/Close';
import BackgroundImage from 'gatsby-background-image'
import Title from '../../../common/title/Title';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import CustomButton from '../../../common/button/Custom_Button';

import StyledModal from './Styled_Modal';

const Modal = ({ slide, onClose, image, title, description, p1, p2, address }) => {
  return (
    <StyledModal>
      <Wrapper slide={slide} isClass='wrapper-modal'>
        <div className='close-modal'>
          <span onClick={onClose}><CloseIcon /></span>
        </div>
        <div className='project-modal'>
          <BackgroundImage fluid={image}>
            <div className='background-container' style={{ height: '300px' }} />
          </BackgroundImage>
          <Title text={title} />
          <p className='description'>{description}</p>
          <p>{p1}</p>
          <p>{p2}</p>
          <div className='address'>
            <a href={address} target='_blank' rel="noopener noreferrer">
              <CustomButton text='View Project' isLogo={<KeyboardCapslockIcon />} />
            </a>
          </div>
        </div>
        <>
        </>
      </Wrapper>
    </StyledModal>
  )
}

Modal.propTypes = {
  slide: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

export default Modal;
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";
import CloseIcon from '@material-ui/icons/Close';

import StyledModal from './Styled_Modal';

const Modal = ({ image, title, close, onClose }) => {
  const onClick = () => {}
  return (
    <StyledModal>
      <div className={classnames('modal', {'slideInRight': !close, 'slideOutRight': close})}>
        <div onClick={onClose}><CloseIcon /></div>
        <div className='photo' onClick={onClick}>
          <Img fixed={image} />
        </div>
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;
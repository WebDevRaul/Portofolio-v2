import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo/Photo';
import Modal from '../modal/Modal';

const Box = ({ image, title, show, setShow }) => {
  const [modal, setModal] = useState(false);
  const [close, setClose] = useState(false);
  const rest = { image, title };

  const onOpen = () => {
    setClose(false);
    setTimeout(() => setShow(!show), 1900);
    setModal(rest)
  };

  const onClose = () => {
    setShow(!show);
    setClose(true);
    setTimeout(() => setModal(!modal), 1900);
  }

  return (
    <div className='col-5 m-auto'>
      <div className='project-box'>
        <Photo image={image} onClick={onOpen} />
        <h5>{title}</h5>
      </div>
      { modal && <Modal {...rest} onClose={onClose} close={close} /> }
    </div>
  )
}

Box.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}

export default Box

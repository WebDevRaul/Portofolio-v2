import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo/Photo';
import Modal from '../modal/Modal';

const Box = ({ image, title, description, p1, p2, p3, address }) => {
  const [modal, setModal] = useState(false);
  const [slide, setSlide] = useState(true);
  const rest = { image, title, description, p1, p2, p3, address }

  const onOpen = () => {
    setSlide(true);
    setModal(true);
  }

  const onClose = () => {
    setSlide(false);
    setTimeout(() => setModal(true))
  }

  return (
    <>
      <div className='col-5 m-auto'>
        <div className='project-box'>
          <Photo image={image} onClick={onOpen} />
          <h5>{title}</h5>
        </div>
      </div>
      { modal && <Modal {...rest} onClose={onClose} slide={slide} /> }
    </>
  )
}

Box.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Box

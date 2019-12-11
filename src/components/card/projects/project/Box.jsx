import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo/Photo';
import Modal from '../modal/Modal';


const Box = ({ close, image, title, description, p1, p2, p3, address }) => {
  const [modal, setModal] = useState(false);
  const [slide, setSlide] = useState(true);
  const rest = { image, title, description, p1, p2, p3, address }

  // Update Modal CDU
  useEffect(() => {
    if(!close) setTimeout(() => setModal(false),1000);
    if(!close) document.querySelector('.cover-scroll').classList.remove('d-block');
  },[close])

  const onOpen = () => {
    setSlide(true);
    setModal(true);
    setTimeout(() => document.querySelector('.cover-scroll').classList.add('d-block'), 1800);
  }
  
  const onClose = () => {
    setTimeout(() => document.querySelector('.wrapper-modal').scrollTo({top: 0, behavior: 'smooth'}),1600);
    setSlide(false);
    document.querySelector('.cover-scroll').classList.remove('d-block');
    setModal(true);
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  p3: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}

export default Box

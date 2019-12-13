import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo/Photo';
import Modal from '../modal/Modal';


const Box = ({ image, title, description, p1, p2, p3, address }) => {
  const [state, setState] = useState({ modal: false, slide: false });
  const { modal, slide } = state;
  const rest = { image, title, description, p1, p2, p3, address }

  useEffect(() => {
    if(!slide) setTimeout(() => setState({ ...state, modal: false }),1600);
  },[slide])

  const onOpen = () => setState({ slide: true, modal: true });
  const onClose = () => setState({ ...state, slide: false });

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

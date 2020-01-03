import React from 'react';
import PropTypes from 'prop-types';
import Photo from './photo/Photo';


const Box = ({ image, title, description, p1, p2, address, onOpen }) => {
  const rest = { image, title, description, p1, p2, address };
  return (
    <>
      <div className='col-6 p-2'>
        <div className='project-box'>
          <Photo image={image} onClick={() => onOpen(rest)} />
          <h5>{title}</h5>
        </div>
      </div>
    </>
  )
}

Box.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired
}

export default Box

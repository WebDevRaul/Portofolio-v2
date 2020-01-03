import React from 'react';
import PropTypes from 'prop-types';
import Photo from './photo/Photo';


const Box = ({ image, title, description, p, frontEnd, backEnd, address, onOpen }) => {
  const rest = { image, title, description, p, frontEnd, backEnd, address };
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
  p: PropTypes.string.isRequired,
  frontEnd: PropTypes.arrayOf(PropTypes.object),
  backEnd: PropTypes.arrayOf(PropTypes.object),
  address: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired
}

export default Box

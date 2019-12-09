import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const Box = ({ image, title }) => {
  return (
    <div className='col-5 m-auto'>
      <div className='project-box'>
        <Photo image={image} />
        <h5>{title}</h5>
      </div>
    </div>
  )
}

Box.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Box

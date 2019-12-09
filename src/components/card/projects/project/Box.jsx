import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

const Box = ({ image, title }) => {
  return (
    <div className='col-6'>
      <div className='project-box'>
        <Img fixed={image} />
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

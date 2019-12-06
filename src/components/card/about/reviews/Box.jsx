import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

const Box = ({ text, image, name }) => {
  return(
    <div className='box'>
      <h5>{text}</h5>
      <div className='photo'>
        <Img fluid={image} />
      </div>
      <p>{name}</p>
    </div>
  )
}

Box.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default Box;
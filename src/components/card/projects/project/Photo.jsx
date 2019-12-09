import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

import StyledPhoto from './Styled_Photo';

const Photo = ({ image }) => {
  return (
    <StyledPhoto>
      <div className='photo'>
        <i className='top-left' />
        <i className='top-right' />
        <Img fixed={image} />
        <i className='bottom-left' />
        <i className='bottom-right' />
      </div>
    </StyledPhoto>
  )
}

Photo.propTypes = {
  image: PropTypes.object.isRequired
}

export default Photo;
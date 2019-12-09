import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";

import StyledPhoto from './Styled_Photo';

const Photo = ({ image, onClick }) => {
  return (
    <StyledPhoto>
      <div className='photo'>
        <i className='top-left' />
        <i className='top-right' />
        <div onClick={onClick}>
          <Img fixed={image} />
        </div>
        <i className='bottom-left' />
        <i className='bottom-right' />
      </div>
    </StyledPhoto>
  )
}

Photo.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Photo;
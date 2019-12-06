import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";

const Box = ({ text, image, name }) => {
  const lenght = text.length > 108 ? true : false;
  return(
    <div className='box'>
      <i className='review-top' />
      <h5 className={classnames('d-flex', {'align-items-center': !lenght, 'padding-top': lenght})}>{text}</h5>
      <i className='review-bottom' />
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
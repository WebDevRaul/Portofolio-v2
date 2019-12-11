import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import ToRight from '../../../../common/content/To_Right';
import FromTop from '../../../../common/content/From_Top';
import ToLeft from '../../../../common/content/To_Left';
import FromBottom from '../../../../common/content/From_Bottom';

const Photo = ({ image, onClick }) => {
  return (
    <div className='position-relative w-100'>
      <ToRight width={25} isClass='' />
      <ToLeft width={25} isClass='right top' />
      <FromTop height={25} isClass='left' />
      <FromTop height={25} isClass='right p-top' />
      <div className='photo'>
        <div onClick={onClick}>
          <Img fluid={image} />
        </div>
      </div>
      <ToRight width={25} isClass='bottom' />
      <ToLeft width={25} isClass='right bottom' />
      <FromBottom height={25} isClass='left p-bottom' />
      <FromBottom height={25} isClass='n-right bottom' />
    </div>
  )
}

Photo.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Photo;
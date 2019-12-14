import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';

const Box = ({ text, image, name, animate, left, right }) => {
  const [state, setState] = useState(false);

  // Update state CDU
  useEffect(() => {
    setState(!state);
    // eslint-disable-next-line
  },[animate, image]);

  const mobileS = typeof window !== 'undefined' && window.innerWidth > 375 ? true : false;
  console.log(mobileS)
  const length = text.length > 155 ? true : false;

  return(
    <div className='box'>
      <div className='position-relative w-100'>
        <ToRight width={25} isClass='' />
        <ToLeft width={25} isClass='right top' />
        <div className={classnames({
          'slideInLeftShort': (state && left), 'slideOutRightShort': (!state && left),
          'slideInRightShort': (state && right), 'slideOutLefttShort': (!state && right)
        })}>
          <h5 className={classnames('d-flex', {'align-items-center': !length, 'padding-top': length})}>{text}</h5>
        </div>
        <ToRight width={25} isClass='bottom' />
        <ToLeft width={25} isClass='bottom right' />
      </div>
      <div className={classnames('mt-4',{'fadeIn': state, 'fadeOut': !state })}>
        <div className='photo'>
          <Img fluid={image} />
        </div>
        <p className='text-center'>{name}</p>
      </div>
    </div>
  )
}

Box.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
  left: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired
}

export default Box;
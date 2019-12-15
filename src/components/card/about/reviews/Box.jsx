import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';

const Box = ({ text, image, name, animate, left, right }) => {
  const [state, setState] = useState({ slide: false, scroll: false });
  const { slide, scroll } = state;

  // Update state CDU
  useEffect(() => {
    const el = document.querySelector('.check-scroll');
    const length = el.scrollHeight > el.clientHeight ? true : false;
    setState({ ...state, slide: !slide, scroll: length });
    // eslint-disable-next-line
  },[animate, image]);


  return(
    <div className='box'>
      <div className='position-relative w-100'>
        <ToRight width={35} isClass='' />
        <ToLeft width={35} isClass='right p-top' />
        <div className={classnames({
          'slideInLeftShort': (slide && left), 'slideOutRightShort': (!slide && left),
          'slideInRightShort': (slide && right), 'slideOutLefttShort': (!slide && right)
        })}>
          <h5 className={classnames('check-scroll d-flex', {'align-items-center': !scroll, 'padding': scroll})}>{text}</h5>
        </div>
        <ToRight width={35} isClass='bottom' />
        <ToLeft width={35} isClass='bottom right' />
      </div>
      <div className={classnames('mt-4',{'fadeIn': slide, 'fadeOut': !slide })}>
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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from "gatsby-image";

const Box = ({ text, image, name, animate, left, right }) => {
  const [state, setState] = useState(false);

  // Update state CDU
  useEffect(() => {
    setState(!state);
    // eslint-disable-next-line
  },[animate, image]);

  const lenght = text.length  > 99 ? true : false;

  return(
    <div className='box'>
      <div className={classnames({
        'slideInLeftShort': (state && left), 'slideOutRightShort': (!state && left),
        'slideInRightShort': (state && right), 'slideOutLefttShort': (!state && right)
        })}>
        <h5 className={classnames('d-flex', {'align-items-center': !lenght, 'padding-top': lenght})}>{text}</h5>
      </div>
      <div className={classnames('text-center', {'fadeIn': state, 'fadeOut': !state })}>
        <div className='photo'>
          <Img fluid={image} />
        </div>
        <p>{name}</p>
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
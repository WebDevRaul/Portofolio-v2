import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ logo, text }) => (
  <div className='box'>
    <span>{logo}</span>
    <p>{text}</p>
  </div>
)

Box.propTypes = {
  logo: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Box;
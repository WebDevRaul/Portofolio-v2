import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ from, to, title, description }) => (
  <div className='box'>
    <span className='year'>{from} - {to}</span>
    <p className='title'>{title}</p>
    <p className='description'>{description}</p>
  </div>
)

Box.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Box;
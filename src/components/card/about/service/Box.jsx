import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, logo, title, text }) => (
  <div className='box'>
    {children}
    <div className='logo'>
      <span>{logo}</span>
    </div>
    <h5>{title}</h5>
    <p>{text}</p>
  </div>
)

Box.propTypes = {
  children: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Box;
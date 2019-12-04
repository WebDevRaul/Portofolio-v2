import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ logo, title, text }) => (
  <div className='box'>
    <div className='logo'>
      <span className='material-icons'>{logo}</span>
    </div>
    <h5>{title}</h5>
    <p>{text}</p>
  </div>
)

Box.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Box;
import React from 'react';
import PropTypes from 'prop-types';

const Li = ({ text, path }) => (
  <li>
    <a href={path} target='_blank' rel="noopener noreferrer" >
      <span className='material-icons'>{text}</span>
    </a>
  </li>
)

Li.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Li;
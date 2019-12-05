import React from 'react';
import PropTypes from 'prop-types';

const Li = ({ text, path }) => (
  <li className='ml-2 mr-2'>
    <a href={path} target='_blank' rel="noopener noreferrer" >
    {text}
    </a>
  </li>
)

Li.propTypes = {
  text: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
}

export default Li;
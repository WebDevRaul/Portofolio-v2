import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const ToLeft = ({ isClass, width }) => (
  <i className={`to-left ${isClass}`} style={{ width: `${width}%` }} />
)

ToLeft.propTypes = {
  width: PropTypes.number.isRequired,
  isClass: PropTypes.string.isRequired
}

export default ToLeft;
import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const ToRight = ({ isClass, width }) => (
  <i className={`to-right ${isClass}`} style={{ width: `${width}%` }} />
)

ToRight.propTypes = {
  width: PropTypes.number.isRequired,
  isClass: PropTypes.string.isRequired
}

export default ToRight;
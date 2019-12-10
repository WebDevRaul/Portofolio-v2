import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const FromBottom = ({ isClass, height }) => (
  <i className={`from-bottom ${isClass}`} style={{ height: `${height}%` }} />
)

FromBottom.propTypes = {
  height: PropTypes.number.isRequired,
  isClass: PropTypes.string.isRequired
}

export default FromBottom;
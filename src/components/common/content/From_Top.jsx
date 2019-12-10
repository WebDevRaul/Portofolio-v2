import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const FromTop = ({ isClass, height }) => (
  <i className={`from-top ${isClass}`} style={{ height: `${height}%` }} />
)

FromTop.propTypes = {
  height: PropTypes.number.isRequired,
  isClass: PropTypes.string.isRequired
}

export default FromTop;
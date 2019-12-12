import React from 'react';
import PropTypes from 'prop-types';

import './progres.css';

const Circle = ({ width }) => (
  <div className='circle'>
    <svg>
      <circle cx='35' cy='35' r='35' />
      <circle cx='35' cy='35' r='35' style={{ strokeDashoffset: `calc(215 - (215 * ${width}) / 100)` }}/>
    </svg>
  </div>
)

Circle.propTypes = {
  text: PropTypes.string.isRequired
}

export default Circle;
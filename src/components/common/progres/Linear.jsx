import React from 'react';
import PropTypes from 'prop-types';

import './progres.css';

const Linear = ({ width }) => (
  <div className='progres-linear'>
    <i className='inner-linear' style={{ width: `${width}%` }} />
  </div>
)

Linear.propTypes = {
  width: PropTypes.number.isRequired
}

export default Linear;
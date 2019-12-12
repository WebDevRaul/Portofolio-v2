import React from 'react';
import PropTypes from 'prop-types';
import Linear from '../../../common/progres/Linear';

const BoxLinear = ({ width, title }) => (
  <div className='box-linear'>
    <p>{title}</p>
    <Linear width={width} />
  </div>
)

BoxLinear.propTypes = {
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default BoxLinear;
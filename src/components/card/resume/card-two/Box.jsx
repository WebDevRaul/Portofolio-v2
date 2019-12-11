import React from 'react';
import PropTypes from 'prop-types';
import Linear from '../../../common/progres/Linear';

const Box = ({ width, title }) => (
  <div className='box'>
    <p>{title}</p>
    <Linear width={width} />
  </div>
)

Box.propTypes = {

}

export default Box;
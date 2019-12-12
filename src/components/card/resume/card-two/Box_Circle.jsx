import React from 'react';
import PropTypes from 'prop-types';
import Circle from '../../../common/progres/Circle';


const BoxCircle = ({ width, text }) => (
  <div className='box-circle'>
    <div className='text'>
      <p>{text}</p>
      <p>Design</p>
    </div>
    <Circle width={width} />
  </div>
)

BoxCircle.propTypes = {
  width: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default BoxCircle;
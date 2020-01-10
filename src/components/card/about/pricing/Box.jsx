import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Box = ({ icon, option, price, basic }) => (
  <div className='box'>
    <div className='logo'>
      <span className='material-icons'>{icon}</span>
    </div>
    <h5>{option}</h5>
    <div className='hour'>
      <h5>Negotiable</h5>
      {/* <span>£</span>
      <h1>{price}</h1>
      <p>hour</p> */}
    </div>
    <h5>Web Development</h5>
    <h5>Web Support</h5>
    <h5>Web Review</h5>
    <h5 className={classnames('', {'basic': basic})}>Web Design</h5>
    <h5 className={classnames('', {'basic': basic})}>UX/UI Experience</h5>
  </div>
)

Box.propTypes = {
  icon: PropTypes.object.isRequired,
  option: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  basic: PropTypes.bool
}

export default Box;
import React from 'react';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Buttons = ({ onNext, onPrev }) => (
  <div className='buttons'>
    <div onClick={onNext}><NavigateNextIcon /></div>
    <div onClick={onPrev}><NavigateNextIcon /></div>
  </div>
)

Buttons.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
}

export default Buttons;
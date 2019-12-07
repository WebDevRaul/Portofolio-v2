import React from 'react';
import PropTypes from 'prop-types';

import StyledCustomButton from './Styled_Custom_Button'

const CustomButton = ({ text, onClick, isLogo, isLoading, type }) => (
  <StyledCustomButton>
    <button 
      className='btn'
      type={type} 
      onClick={onClick}
    >
      <>
        { isLoading 
          ? <>spinner</> 
          : <><p className='mb-0'>{text}</p> { isLogo && <span>{isLogo}</span> }</>
        }
      </>
    </button>
  </StyledCustomButton>
);

CustomButton.defaultProps = {
  type: 'button'
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isLogo: PropTypes.object,
  isLoading: PropTypes.bool,
  type: PropTypes.string
};

export default CustomButton;
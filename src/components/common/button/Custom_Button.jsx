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
          : <>{text} { isLogo && <span className='material-icons'>{isLogo}</span> }</>
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
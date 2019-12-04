import React from 'react';
import StyledFooter from './Styled_Footer';
import CustomButton from '../../common/button/Custom_Button';

const Footer = () => {
  const onDownload = () => {};
  return (
    <StyledFooter>
      <div className='right'>
        <CustomButton text='download cv' onClick={onDownload} isLogo='get_app' />
      </div>
      <div className='middle' />
      <div className='left'>
        <CustomButton text='contact me' onClick={onDownload} isLogo='keyboard_capslock' />
      </div>
    </StyledFooter>
  )
}

export default Footer;
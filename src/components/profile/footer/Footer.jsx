import React from 'react';
import CustomButton from '../../common/button/Custom_Button';
import GetApp from '@material-ui/icons/GetApp';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';

import StyledFooter from './Styled_Footer';

const Footer = () => {
  const onDownload = () => {};
  return (
    <StyledFooter>
      <div className='right'>
        <CustomButton text='download cv' onClick={onDownload} isLogo={<GetApp />} />
      </div>
      <div className='middle' />
      <div className='left'>
        <CustomButton text='contact me' onClick={onDownload} isLogo={<KeyboardCapslockIcon />} />
      </div>
    </StyledFooter>
  )
}

export default Footer;
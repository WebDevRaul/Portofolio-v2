import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../common/button/Custom_Button';
import GetApp from '@material-ui/icons/GetApp';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
import pdf from './CV.pdf';

import StyledFooter from './Styled_Footer';

const Footer = ({ onRedirect }) => {
  const onClick = () => {
    onRedirect();
    document.querySelector('.contact-i').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <StyledFooter>
      <div className='footer'>
        <div className='right'>
          <a href={pdf} download={pdf}>
            <CustomButton text='download cv' onClick={() => {}} isLogo={<GetApp />} />
          </a>
        </div>
        <div className='middle' />
        <div className='left'>
          <CustomButton text='contact me' onClick={onClick} isLogo={<KeyboardCapslockIcon />} />
        </div>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  onRedirect: PropTypes.func.isRequired
}

export default Footer;
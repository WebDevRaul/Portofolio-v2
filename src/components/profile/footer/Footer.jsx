import React from 'react';
import StyledFooter from './Styled_Footer';

const Footer = () => (
  <StyledFooter>
    <div>
      <p>download cv <span className="material-icons">get_app</span></p>
    </div>
    <i></i>
    <div>
      <p>contact me <span className="material-icons" style={{transform: 'rotate(90deg)'}}>keyboard_capslock</span></p>
    </div>
  </StyledFooter>
)

export default Footer;
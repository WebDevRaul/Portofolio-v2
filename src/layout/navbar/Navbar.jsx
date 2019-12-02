import React from 'react';
import StyledNavbar from './Styled_Navbar';
import Li from './Li';

const Navbar = () => (
  <StyledNavbar>
    <ul>
      <Li text='About' icon='person' />
      <Li text='Resume' icon='list_alt' />
      <Li text='Works' icon='build' />
      <Li text='Contact' icon='recent_actors' />
    </ul>
  </StyledNavbar>
)

export default Navbar;
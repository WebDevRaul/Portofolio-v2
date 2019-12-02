import React from 'react';
import StyledNavbar from './Styled_Navbar';

const Navbar = () => (
  <StyledNavbar>
    <div>
      <ul>
        <li>About <span className="material-icons">perm_identity_outline</span></li>
        <li>Resume  <span className="material-icons">list_alt</span></li>
        <li>Works  <span className="material-icons">build</span></li>
        <li>Contact <span>@</span></li>
      </ul>
    </div>
  </StyledNavbar>
)

export default Navbar;
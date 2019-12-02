import React from 'react';

import Footer from './footer/Footer';
import Links from './links/Links';

import StyledProfile from './Styled_Profile';

const Profile = () => {
  return (
    <StyledProfile>
      <div className='profile'>
        <div>img</div>
        <h3>Savin Raul Calin</h3>
        <h5>Web Developer</h5>
        <Links />
        <Footer />
      </div>
    </StyledProfile>
  )
}

export default Profile;
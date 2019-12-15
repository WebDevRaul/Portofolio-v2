import React from 'react';

import Background from './background/Background';
import Photo from './photo/Photo';
import Links from './links/Links';
import Footer from './footer/Footer';

import StyledProfile from './Styled_Profile';

const Profile = () => {
  return (
    <StyledProfile>
      <div className='profile'>
        <Background />
        <div style={{ height: 'calc((100vh / 2) - 50px)' }}>
          <Photo />
          <h3>Savin Raul Calin</h3>
          <h5>Web Developer</h5>
          <Links />
          <Footer />
        </div>
      </div>
    </StyledProfile>
  )
}

export default Profile;
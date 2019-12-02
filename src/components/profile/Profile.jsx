import React from 'react';
import StyledProfile from './Styled_Profile';
import Footer from './footer/Footer';

const Profile = () => {
  return (
    <StyledProfile>
      <div className='profile'>
        <div>img</div>
        <h4>Savin Raul Calin</h4>
        <p>Web Developer</p>
        <div>Links</div>
        <Footer />
      </div>
    </StyledProfile>
  )
}

export default Profile;
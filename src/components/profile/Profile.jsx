import React from 'react';
import PropTypes from 'prop-types';

import Background from './background/Background';
import Photo from './photo/Photo';
import Links from './links/Links';
import Footer from './footer/Footer';

import StyledProfile from './Styled_Profile';

const Profile = ({ onRedirect }) => {
  return (
    <StyledProfile>
      <i className='placeholder' />
      <div className='profile'>
        <Background />
        <Photo />
        <h3>Savin Raul Calin</h3>
        <h5>Web Developer</h5>
        <Links />
        <Footer onRedirect={onRedirect} />
      </div>
    </StyledProfile>
  )
}

Profile.propTypes = {
  onRedirect: PropTypes.func.isRequired
}

export default Profile;
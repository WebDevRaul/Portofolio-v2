import React, { useState } from 'react';

import Navbar from '../../layout/navbar/Navbar';
import Card from '../card/Card';
import Profile from '../profile/Profile';

import StyledWrapper from './Styled_Wrapper';

const Wrapper = () => {
  const [state, setState] = useState({ about: true, resume: false, projects: false, contact: false });
  const { contact } = state;

  const onRedirect = () => !contact && setState({ about: false, resume: false, projects: false, contact: true });

  return (
    <StyledWrapper>
      <div className='mobile-view-top'>
        <Navbar state={state} setState={setState} />
        <Profile onRedirect={onRedirect} />
      </div>
      <div className='mobile-view-bottom'>
        <i className='placeholder' />
        <Card { ...state } />
      </div>
    </StyledWrapper>
  )
}

export default Wrapper;
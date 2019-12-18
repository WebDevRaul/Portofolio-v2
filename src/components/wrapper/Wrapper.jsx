import React, { useState } from 'react';

import Navbar from '../../layout/navbar/Navbar';
import Card from '../card/Card';
import Profile from '../profile/Profile';

import StyledWrapper from './Styled_Wrapper';

const Wrapper = () => {
  const [state, setState] = useState({ about: true, resume: false, projects: false, contact: false });

  return (
    <StyledWrapper>
      <div className='mobile-view-top'>
        <Navbar state={state} setState={setState} />
        <Profile />
      </div>
      <div className='mobile-view-bottom'>
        <i className='placeholder' />
        <Card { ...state } />
      </div>
    </StyledWrapper>
  )
}

export default Wrapper;
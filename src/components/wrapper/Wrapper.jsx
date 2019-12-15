import React, { useState } from 'react';

import Navbar from '../../layout/navbar/Navbar';
import Card from '../card/Card';
import Profile from '../profile/Profile';

import StyledWrapper from './Styled_Wrapper';

const Wrapper = () => {
  const [state, setState] = useState({ about: true, resume: false, projects: false, contact: false });

  return (
    <StyledWrapper>
      <div className='row no-gutters'>
        <div className='col-12 col-lg-5'>
          <div className='mobile-view-top'>
            <Navbar state={state} setState={setState} />
            <Profile />
          </div>
        </div>
        <div className='col-12 col-lg-7'>
          <div className='mobile-view-card'>
            <i className='placeholder' />
            <Card { ...state } />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Wrapper;
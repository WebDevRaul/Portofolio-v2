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
        <div className='col-12 col-lg-6 m-auto'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-2 ml-auto'>
              <Navbar state={state} setState={setState} />
            </div>
            <div className='col-11 col-sm-10 m-auto ml-sm-0'>
              <Profile />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6'>
          <Card {...state} />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Wrapper;
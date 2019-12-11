import React, { useState } from 'react';

import Navbar from '../../layout/navbar/Navbar';
import Card from '../card/Card';
import Profile from '../profile/Profile';

const Wrapper = () => {
  const [state, setState] = useState({ about: false, resume: true, projects: false, contact: false });

  return (
    <div className='row no-gutters'>
      <div className='col-12 col-lg-5'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-12 col-md-8 col-lg-12 m-auto'>
              <div className='d-sm-flex m-auto' style={{ maxWidth: '480px' }}>
                <Navbar state={state} setState={setState} />
                <Profile />
              </div>
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-7'>
        <Card {...state} />
      </div>
    </div>
  )
}

export default Wrapper;
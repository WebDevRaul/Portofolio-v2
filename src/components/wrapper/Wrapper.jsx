import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../layout/navbar/Navbar';
import Card from '../card/Card';
import Profile from '../profile/Profile';

import StyledWrapper from './Styled_Wrapper';

const Wrapper = () => {
  return (
    <StyledWrapper>
      <div className='row no-gutters'>
        <div className='col-12 col-lg-6 m-auto'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-2 ml-auto'>
              <Navbar />
            </div>
            <div className='col-11 col-sm-8 m-auto ml-sm-0'>
              <Profile />
            </div>
          </div>
        </div>
        <div className='col-11 col-lg-6'>
          <Card />
        </div>
      </div>
    </StyledWrapper>
  )
}

Wrapper.propTypes = {

}

export default Wrapper;
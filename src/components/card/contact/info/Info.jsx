import React from 'react';
import Li from './Li';
import StyledInfo from './Styled_Info';

const Info = () => (
  <StyledInfo>
    <div className='info'>
      <div className='first'>
        <Li span='Address . . . . . . .' p='Reading, UK' />
        <Li span='Email . . . . . . .' p='texterror401@gmail.com' />
      </div>
      <div className='second'>
        <Li span='Phone . . . . . . .' p='+44 789 544 0744' />
        <Li span='Freelance . . . . . . .' p='Available' />
      </div>
    </div>
  </StyledInfo>
)

export default Info

import React from 'react';

import Title from '../../../common/title/Title';
import Li from './Li';
import Text from './Text';
import StyledAboutMe from './Styled_About_Me';

const AboutMe = () => (
  <StyledAboutMe>
    <div className='about-me'>
      <Title text='About Me' />
      <div className='row no-gutters p-4'>
        <div className='col-6 p-1'>
          <Text />
        </div>
        <div className='col-6 p-1'>
          <Li span='Age . . . . . ' p='36' />
          <Li span='Country . . . . . ' p='Moldova' />
          <Li span='Address . . . . . ' p='Chisinau, MD' />
          <Li span='Freelance . . . . . ' p='Available' />
        </div>
      </div>
    </div>
  </StyledAboutMe>
)

export default AboutMe;
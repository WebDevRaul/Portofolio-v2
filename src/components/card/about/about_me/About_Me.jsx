import React from 'react';

import Title from '../../../common/title/Title';
import Li from './Li';
import Text from './Text';
import StyledAboutMe from './Styled_About_Me';

const AboutMe = () => (
  <StyledAboutMe>
    <div className='about-me'>
      <Title text='About Me' />
      <div className='row no-gutters'>
        <div className='col-6'>
          <Text />
        </div>
        <div className='col-6'>
          <Li span='Age . . . . . . . .' p='36' />
          <Li span='Country . . . . . .' p='Moldova' />
          <Li span='Address . . . . . .' p='Chisinau, MDA' />
          <Li span='Freelance . . . .' p='Available' />
        </div>
      </div>
    </div>
  </StyledAboutMe>
)

export default AboutMe;
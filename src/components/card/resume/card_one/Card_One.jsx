import React from 'react';
import Title from '../../../common/title/Title';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import FromTop from '../../../common/content/From_Top';
import Experience from './Experience';
import Education from './Education';

import StyledCardOne from './Styled_Card_One';

const CardOne = () => (
  <StyledCardOne>
    <Title text='Resume' />
    <div className='card-one'>
      <div className='row no-gutters'>
        <div className='col-6'>
          <ToLeft width={100} isClass='' />
          <FromTop height={100} isClass='right' />
          <Experience />
        </div>
        <div className='col-6'>
          <ToRight width={100} isClass='' />
          <Education />
        </div>
      </div>
    </div>
  </StyledCardOne>
)

export default CardOne;
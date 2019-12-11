import React from 'react';
import Title from '../../../common/title/Title';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import FromBottom from '../../../common/content/From_Bottom';
import Languages from './Languages';
import Design from './Design';

import StyledCardTwo from './Styled_Card_Two'

const CardTwo = () => (
  <StyledCardTwo>
    <Title text='My Skills' />
    <div className='card-two'>
      <div className='row no-gutters'>
        <div className='col-6'>
          <ToRight width={100} isClass='' />
          <FromBottom height={100} isClass='right' />
          <Design />
        </div>
        <div className='col-6'>
          <ToLeft width={100} isClass='' />
          <Languages/>
        </div>
      </div>
    </div>
  </StyledCardTwo>
)

export default CardTwo;
import React from 'react';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import FromTop from '../../../common/content/From_Top';
import Coding from './Coding';
import Knowledge from './Knowledge';

import StyledCardTree from './Styled_Card_Tree';

const CardTree = () => (
  <StyledCardTree>
    <div className='card-tree'>
      <div className='row no-gutters'>
        <div className='col-6'>
          <ToRight width={50} isClass='right' />
          <ToLeft width={50} isClass='left' />
          <FromTop height={100} isClass='right' />
          <Coding />
        </div>
        <div className='col-6'>
          <ToRight width={50} isClass='right' />
          <ToLeft width={50} isClass='left' />
          <Knowledge />
        </div>
      </div>
    </div>
  </StyledCardTree>
)

export default CardTree;
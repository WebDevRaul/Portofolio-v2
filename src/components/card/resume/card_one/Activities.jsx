import React from 'react';
import ExploreIcon from '@material-ui/icons/Explore';
import ToRight from '../../../common/content/To_Right';
import Box from './Box';

const Activities = () => (
  <div className='activities'>
    <h5><ExploreIcon /> Activities</h5>
    <ToRight width={100} isClass='left' />
    <Box
      from='2018'
      to='Present'
      title='Coding meetups'
      description='freeCodeCamp - Reading, UK.'
    />
  </div>
)

export default Activities;
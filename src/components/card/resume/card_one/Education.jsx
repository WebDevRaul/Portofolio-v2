import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import ToRight from '../../../common/content/To_Right';
import Box from './Box';

const Education = () => (
  <div className='education'>
    <h5><SchoolIcon /> Education</h5>
    <ToRight width={100} isClass='left' />
    <Box
      from='2017'
      to='2018'
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, reiciendis quidem nihil suscipit recusandae eum!'
    />
    <ToRight width={100} isClass='' />
    <Box
      from='2017'
      to='2018'
      title='Lorem ipsum'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perferendis id ipsa exercitationem ad assumenda error laboriosam et. Eligendi, corrupti?'
    />
  </div>
)

export default Education;
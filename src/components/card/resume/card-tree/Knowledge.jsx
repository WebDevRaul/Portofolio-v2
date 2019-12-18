import React from 'react';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import BarChartIcon from '@material-ui/icons/BarChart';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';

const Knowledge = () => (
  <div className='knowledge'>
    <h5><BarChartIcon /> Knowledge</h5>
    <ToRight width={50} isClass='right' />
    <ToLeft width={50} isClass='left' />
    <div className='box'>
      <div><CheckIcon /> <p>Website hosting</p></div>
      <div><CheckIcon /> <p>Modern and mobile-ready</p></div>
      <div><CheckIcon /> <p>Graphics and animations</p></div>
      <div><AddIcon/> <p>And more<strong> . . . . </strong></p></div>
    </div>
  </div>
)

export default Knowledge;
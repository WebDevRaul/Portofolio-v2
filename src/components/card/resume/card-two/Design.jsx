import React from 'react';
import BoxCircle from './Box_Circle';
import ToRight from '../../../common/content/To_Right';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const Design = () => (
  <div className='design'>
    <h5><ImportantDevicesIcon /> Design</h5>
    <ToRight width={100} isClass='' />
    <div className='row no-gutters'>
      <div className='col-12 col-sm-6 web'>
        <BoxCircle text='Web' width={65} />
      </div>
      <div className='col-12 col-sm-6 graphic'>
        <BoxCircle text='Graphic' width={65} />
      </div>
    </div>
  </div>
)

export default Design;
import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ToLeft from '../../../common/content/To_Left';
import BoxLinear from './Box_Linear';

const Languages = () => (
  <div className='languages'>
    <h5><LanguageIcon /> Languages</h5>
    <ToLeft width={100} isClass='' />
    <div className='box'>
      <BoxLinear title='Romanian' width={95} />
      <BoxLinear title='English' width={85} />
      <BoxLinear title='Polish' width={20} />
    </div>
  </div>
)

Languages.propTypes = {

}

export default Languages;
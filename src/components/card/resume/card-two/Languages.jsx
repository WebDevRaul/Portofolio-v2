import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ToLeft from '../../../common/content/To_Left';

const Languages = () => (
  <div className='languages'>
    <h5><LanguageIcon /> Languages</h5>
    <ToLeft width={100} isClass='' />
  </div>
)

Languages.propTypes = {

}

export default Languages;
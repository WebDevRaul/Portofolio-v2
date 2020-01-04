import React, { useState } from 'react';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const Mode = () => {
  const [mode, setMode] = useState(false);

  const onClick = () => {
    setMode(!mode);
    const theme = mode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <li>
      <div onClick={onClick}>
        { mode ? <Brightness1Icon /> : <Brightness3Icon /> }
        <span>Mode</span>   
      </div> 
  </li>
  )
}

Mode.propTypes = {

}

export default Mode;
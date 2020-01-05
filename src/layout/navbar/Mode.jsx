import React, { useState } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const Mode = () => {
  const [mode, setMode] = useState(false);

  const onClick = () => {
    setMode(!mode);
    const theme = mode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <li>
      <div onClick={onClick}>
        { mode ? <WbSunnyIcon /> : <Brightness3Icon /> }
        <span>Mode</span>   
      </div> 
  </li>
  )
}

Mode.propTypes = {

}

export default Mode;
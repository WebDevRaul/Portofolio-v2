import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../../../../config/key';
import Title from '../../../common/title/Title';
import RoomIcon from '@material-ui/icons/Room';

import StyledMap from './Styled_Map';
import ToRight from '../../../common/content/To_Right';

const Map = () => {
  return(
    <StyledMap>
      <Title text='Get in Touch' />
      <ToRight width={100} isClass='' />
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={{ lat:47.0247, lng:28.8326 }}
          defaultZoom={5}
        >
          <div className='marker' lat={47.0247} lng={28.8326}>
            <RoomIcon />
          </div>
        </GoogleMapReact>
      </div>
    </StyledMap>
  )
}

export default Map;
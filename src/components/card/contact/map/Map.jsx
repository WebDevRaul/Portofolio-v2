import React from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { GOOGLE_MAP_API_KEY } from '../../../../config/key';

import StyledMap from './Styled_Map';

const Map = () => {
  return(
    <StyledMap>
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={{ lat:47.0247, lng:28.8326 }}
          defaultZoom={8}
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
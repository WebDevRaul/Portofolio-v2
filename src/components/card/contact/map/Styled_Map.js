import styled from 'styled-components';

const StyledMap = styled.div`
  .map {
    width: 100%;
    height: 250px;
    .marker {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
    }
  }
`

export default StyledMap;
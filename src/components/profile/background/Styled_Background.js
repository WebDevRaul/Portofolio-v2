import styled from 'styled-components';
import { Grey, Border } from '../../../layout/index.scss';

const StyledBckground = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  border-radius: ${Border};
  overflow: hidden;
  z-index: -10;
  .wrapper {
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    .background {
      display: block;
      width: 100%;
      height: 280px;
      ::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: -80px;
        left: -40px;
        transform: rotate(10deg);
        background: ${Grey};
      }
      ::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: -80px;
        right: -40px;
        transform: rotate(-10deg);
        background: ${Grey};
      }
    }
  }
`

export default StyledBckground;
import styled from 'styled-components';
import { Primary, LightWhite, DarkWhite, Border, ToLeft, ToRight, FromTop, FromBottom } from '../../../../layout/index.scss';

const StyledServices = styled.div`
  margin-bottom: 30px;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    min-height: 200px;
    padding: 10px;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      margin: 15px;
      transform: rotate(45deg);
      border-radius: ${Border};
      color: ${LightWhite};
      background-color: ${Primary};
      span {
        transform: rotate(-45deg);
      }
    }
    h5 {
      color: ${LightWhite};
    }
    p {
      color: ${DarkWhite};
    }
  }
  .first {
    .box {
      position: relative;
      :nth-child(1) {
        ::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: ${ToRight};
        }
        ::before {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 100%;
          left: 100%;
          top: 0;
          background: ${FromBottom};
        }
      }
      :nth-child(2) {
        margin: 1px;
      }
    }
  }
  .second {
    .box {
      position: relative;
      :nth-last-child(1) {
        ::after {
          content: '';
          display: block;
          position: absolute;
          top: -1px;
          width: 100%;
          height: 1px;
          background: ${ToLeft};
        }
        ::before {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 100%;
          right: 100%;
          top: 0;
          background: ${FromTop};
        }
      }
    }
  }
`

export default StyledServices;
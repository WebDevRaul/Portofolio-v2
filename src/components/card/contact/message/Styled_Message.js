import styled from 'styled-components';
import { bootstrap } from '../../../../utils/responsive';

const StyledMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 50;
  > section {
    height: 100%
  }
  .wrapper-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-top, .content-bottom {
      display: none;
    }
    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        padding: 10px;
        border: 1px solid var(--primary);
        border-radius: 50px;
        color: var(--primary);
        margin-bottom: 16px;
        svg {
          font-size: 4em;
        }
      }
      .error {
        border-color: var(--red);
        color: var(--red);
      }
    }
  }
  .close-message {
    position: absolute;
    top: 10px;
    right: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 50;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      background: var(--grey);
      svg {
        cursor: pointer;
        color: var(--primary);
      }
    }
  }
  @media ${bootstrap.lg} {
    .close-message {
      right: 10px;
    }
  }
`

export default StyledMessage;
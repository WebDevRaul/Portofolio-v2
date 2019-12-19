import styled from 'styled-components';

const StyledMessage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 50;
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
          font-size: 5em;
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
`

export default StyledMessage;
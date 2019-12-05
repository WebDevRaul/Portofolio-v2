import styled from 'styled-components';

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
      border-radius: var(--border);
      color: var(--lightWhite);
      background-color: var(--primary);
      span {
        transform: rotate(-45deg);
      }
    }
    h5 {
      color: var(--lightWhite);
    }
    p {
      color: var(--darkWhite);
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
          background: var(--bgToRight);
        }
        ::before {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 100%;
          left: 100%;
          top: 0;
          background: var(--bgFromBottom);
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
          background: var(--bgToLeft);
        }
        ::before {
          content: '';
          display: block;
          position: absolute;
          width: 1px;
          height: 100%;
          right: 100%;
          top: 0;
          background: var(--bgFromTop);
        }
      }
    }
  }
`

export default StyledServices;
import styled from 'styled-components';
import { bootstrap } from '../../../utils/responsive';

const StyledFooter = styled.div`
  width: 100%;
  .footer {
    display: flex;
    width: 100%;
    .left {
      .btn {
        span {
          transform: rotate(90deg);
        }
      }
    }
    .right, .left {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      .btn {
        margin: 8px 0;
        display: flex;
        align-items: center;
        p {
          font-size: .6em;
        }
      }
    }
    .right, .left, .middle {
      ::after {
        content: '';
        display: block;
        position: absolute;
      }
    }
    .right, .left {
      ::after {
        width: 100%;
        height: 1px;
      }
    }
    .right {
      ::after {
        background: var(--bgToRight);
      }
    }
    .left {
      ::after {
        background: var(--bgToLeft);
      }
    }
    .middle {
      ::after {
        width: 1px;
        height: 54px;
        background: var(--bgFromTop);
      }
    }
  }
  @media ${bootstrap.lg} {
    .footer {
      .left, .right {
        .btn {
          p {
            font-size: .9em;
          }
        }
      }
      .middle {
        ::after {
          height: 47px;
        }
      }
    }
  }
`

export default StyledFooter;
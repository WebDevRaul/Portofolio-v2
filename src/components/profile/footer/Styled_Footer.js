import styled from 'styled-components';
import { portrait, bootstrap } from '../../../utils/responsive';

const StyledFooter = styled.div`
  width: 100%;
  .footer {
    display: flex;
    width: 100%;
    padding: 1px;
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
        margin: 15px 0;
        display: flex;
        align-items: center;
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
        height: 68px;
        background: var(--bgFromTop);
      }
    }
  }
  @media ${bootstrap.lg} {
    .footer {
      .left, .right {
        .btn {
          margin: 8px 0;
          display: flex;
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
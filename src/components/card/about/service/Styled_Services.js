import styled from 'styled-components';
import { portrait, bootstrap } from '../../../../utils/responsive';

const StyledServices = styled.div`
  margin-bottom: 30px;
  .services {
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      min-height: 210px;
      height: 100%;
      padding: 10px;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        margin: 20px 15px;
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
        margin-bottom: 0px;
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
      }
    }
    .second {
      .box {
        position: relative;
        :nth-child(1) {
          margin-right: 2px;
        }
        :nth-last-child(1) {
          ::after {
            content: '';
            display: block;
            position: absolute;
            top: -1px;
            width: 100%;
            height: 1px;
            background: var(--bgToLeft);
            margin-right: 1px;
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
  }
  @media ${bootstrap.lg} {
    .services {
      .box {
        p {
          padding: 0 30px;
        }
      }
    }
  }
  @media ${portrait.tablet} {
    .services {
      .first, .second {
        .box {
          p {
            padding: 0 15px;
          }
          .logo {
            padding: 14px;
          }
        }
      }
    }
  }
  @media ${bootstrap.sm} {
    .services {
      .first, .second {
        .box {
          .logo {
            padding: 10px;
          }
        }
      }
    }
  }
  @media ${portrait.mobileL} {
    .services {
      .first, .second {
        .box {
          min-height: 180px;
          .logo {
            padding: 8px;
          }
        }
      }
    }
  }
  @media ${portrait.mobileM} {
    .services {
      .first, .second {
        .box {
          min-height: 150px;
          .logo {
            padding: 7px;
          }
        }
      }
    }
  }
`

export default StyledServices;
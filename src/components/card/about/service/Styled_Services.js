import styled from 'styled-components';
import { portrait, bootstrap } from '../../../../utils/responsive';

const StyledServices = styled.div`
  margin-bottom: 30px;
  .services {
    .box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      min-height: 260px;
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
        text-align: center
      }
      p {
        color: var(--darkWhite);
        margin-bottom: 0px;
        padding: 0 20px;
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
          min-height: 165px;
          .logo {
            padding: 7px;
          }
        }
      }
    }
  }
`

export default StyledServices;
import styled from 'styled-components';
import { portrait } from '../../../../utils/responsive';

const StyledPricing = styled.div`
  margin-bottom: 30px;
  position: relative;
  .wrapper {
    position: relative;
    .pricing {
      display: flex;
      justify-content: space-around;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 10px;
        :nth-child(1) {
          .logo {
            transform: rotateY(180deg);
          }
        }
        .logo, .hour, h5 {
          margin-bottom: 25px;
        }
        .logo {
          color: var(--primary);
        }
        h5 {
          :nth-last-child(1) {
            margin-bottom: 0px;
          }
        }
        h1, p {
          margin-bottom: 0px;
        }
        .hour {
          display: flex;
          align-items: baseline;
          h1 {
            margin-right: 5px;
          }
          span {
            margin: 5px;
            margin-bottom: auto;
            font-size: 1.2em;
          }
          p {
            color: var(--darkWhite);
          }
        }
        h5 {
          font-size: 1.2em;
        }
        .basic {
          text-decoration: line-through;
          opacity: 0.5;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin: 16px 0;
  }

  .top-right, .top-left, .bottom-right, .bottom-left {
    ::after, ::before {
      content: '';
      display: block;
      position: absolute;
    }
    ::before {
      width: 1px;
    }
  }
  .top-right, .bottom-right {
    ::after {
      width: 25%;
      height: 1px;
    }
    ::before {
      height: 25%;
    }
  }
  .top-right {
    ::after {
      left: 1px;
      background: var(--bgToLeft);
    }
    ::before {
      background: var(--bgFromTop);
    }
  }
  .bottom-right {
    ::after {
      left: 1px;
      background: var(--bgToLeft);
    }
    ::before {
      bottom: -1px;
      background: var(--bgFromBottom);
    }
  }

  .top-left, .bottom-left {
    ::after {
      width: 25%;
      height: 1px;
    }
    ::before {
      height: 25%;
      right: 0;
    }
  }
  .top-left {
    ::after {
      right: 1px;
      background: var(--bgToRight);
    }
    ::before {
      background: var(--bgFromTop);
    }
  }
  .bottom-left {
    ::after {
      right: 1px;
      background: var(--bgToRight);
    }
    ::before {
      bottom: -1px;
      background: var(--bgFromBottom);
    }
  }
  @media ${portrait.laptopL} {

  }
  @media ${portrait.laptop} {

  }
  @media ${portrait.tablet} {

  }
  @media ${portrait.mobileL} {

  }
  @media ${portrait.mobileM} {
    .wrapper {
      margin: 0 5px;
      .pricing {
        .box {
          padding: 10px !important;
          h5 {
            margin-bottom: 10px !important;
          }
        }
        .logo {
          svg {
            font-size: 2.5em;
          }
        }
      }
    }
  }
`

export default StyledPricing;
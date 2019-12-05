import styled from 'styled-components';
import { Primary, DarkWhite, ToRight, ToLeft, FromTop, FromBottom } from '../../../../layout/index.scss';

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
          color: ${Primary};
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
            color: ${DarkWhite};
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
      z-index: 20;
    }
    ::before {
      width: 1px;
      z-index: 20;
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
      background: ${ToLeft};
    }
    ::before {
      background: ${FromTop};
    }
  }
  .bottom-right {
    ::after {
      left: 1px;
      background: ${ToLeft};
    }
    ::before {
      bottom: -1px;
      background: ${FromBottom};
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
      background: ${ToRight};
    }
    ::before {
      background: ${FromTop};
    }
  }
  .bottom-left {
    ::after {
      right: 1px;
      background: ${ToRight};
    }
    ::before {
      bottom: -1px;
      background: ${FromBottom};
    }
  }
`

export default StyledPricing;
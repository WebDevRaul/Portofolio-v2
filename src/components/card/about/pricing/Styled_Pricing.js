import styled from 'styled-components';
import { bootstrap } from '../../../../utils/responsive';

const StyledPricing = styled.div`
  margin-bottom: 30px;
  position: relative;
  .pricing-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
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
          svg {
            font-size: 2.7em;
          }
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

  @media ${bootstrap.sm} {
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
import styled from 'styled-components';
import { bootstrap } from '../../../../utils/responsive';

const StyledCardTree = styled.div`
  .card-tree {
    padding-bottom: 30px;
    .coding, .knowledge {
      padding: 10px 0;
      h5 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        svg {
          padding-bottom: 2px;
          margin-right: 5px;
          color: var(--primary);
        }
      }
    }
    .coding {
      .box {
        padding: 18px 18px 0 0;
        .logo {
          margin: 0 5px;
          .outer-logo {
            position: relative;
            height: 50px;
            width: 100%;
            padding: 8px;
            margin: 3px 0;
            .inner-logo {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              background: rgb(225, 225, 225);
              border-radius: var(--border);
            }
          }
          p {
            font-size: .8em;
            text-align: center;
            margin-bottom: 0px;
            text-transform: uppercase;
            letter-spacing: var(--spacing);
          }
        }
      }
    }
    .knowledge {
      .box {
        padding: 18px 0 0 18px;
        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          p {
            width: 100%;
            text-transform: uppercase;
            margin-bottom: 0px;
            text-align: start;
          }
          svg {
            color: var(--primary);
            margin-right: 10px;
            padding-bottom: 1px;
          }
        }
      }
    }
  }
  @media ${bootstrap.lg} {
    padding: 0 10px;
    .card-tree {
      .coding {
        .box {
          padding: 18px 5px 0 0;
          .logo {
            .outer-logo {
              padding: 8px 0;
            }
          }
        }
      }
    }
  }
`

export default StyledCardTree;
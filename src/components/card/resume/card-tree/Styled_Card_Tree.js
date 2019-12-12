import styled from 'styled-components';

const StyledCardTree = styled.div`
  .card-two {
    margin-bottom: 30px;
    .coding, .knowledge {
      padding: 10px 0;
      h5 {
        display: flex;
        justify-content: center;
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
          margin: 0 10px 10px 0;
          .outer-logo {
            position: relative;
            height: 50px;
            width: 100%;
            padding: 8px;
            .inner-logo {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              background: var(--lightWhite);
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
        p {
          text-transform: uppercase;
          svg {
            color: var(--primary);
            padding-bottom: 4px;
          }
        }
      }
    }
  }
`

export default StyledCardTree;
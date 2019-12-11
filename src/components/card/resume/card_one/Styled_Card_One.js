import styled from 'styled-components';

const StyledCardOne = styled.div`
  h5 {
    padding-left: 0px;
  }
  .card-one {
    .experience, .education {
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
      .box {
        padding: 18px 0;
        .year {
          padding: 2px 4px;
          border: 1px solid rgba(255, 255, 255, .4);
          border-radius: var(--border);
          color: var(--secondary);
        }
        p {
          margin-bottom: 0;
          margin-top: 16px;
        }
        .title {
          font-size: 1.3em;
        }
        .description {
          color: var(--darkWhite);
        }
      }
    }
    .experience {
      .box {
        padding-right: 18px;
      }
    }
    .education {
      .box {
        padding-left: 18px;
      }
    }
  }
`

export default StyledCardOne;
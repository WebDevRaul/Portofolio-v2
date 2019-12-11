import styled from 'styled-components';

const StyledCardTwo = styled.div`
  h5 {
      padding-left: 0px;
    }
  .card-two {
    margin-bottom: 30px;
    .languages, .design {
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
        padding: 18px 0 0 0;
      }
    }
    .design {
      .box {
        padding-right: 18px;
      }
    }
    .languages {
      .box {
        padding-left: 18px;
      }
    }
  }
`

export default StyledCardTwo;
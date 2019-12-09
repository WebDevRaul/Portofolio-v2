import styled from 'styled-components';

const StyledInfo = styled.div`
  .info {
    margin-bottom: 30px;
    .first, .second {
      display: flex;
      justify-content: space-between;
      .list {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        padding: 10px;
        margin: 5px 0;
        p {
          text-align: end;
        }
        .left, .right {
          content: '';
          position: absolute;
          height: 1px;
          width: 50%;
          bottom: 0;
        }
        .left {
          background: var(--bgToRight);
          left: 0;
        }
        .right {
          background: var(--bgToLeft);
          right: 0;
        }
      }
    }
  }
`
export default StyledInfo;
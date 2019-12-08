import styled from 'styled-components';

const StyledInfo = styled.div`
  .info {
    .first, .second {
      display: flex;
      justify-content: space-between;
      .list {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        padding: 15px 0;
        margin: 5px 0;
        :nth-child(1) {
          padding-right: 10px;
        }
        :nth-last-child(1) {
          padding-left: 10px;
        }
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
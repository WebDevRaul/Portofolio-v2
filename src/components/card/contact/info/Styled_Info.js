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
        padding: 10px 5px 15px 10px;
        margin: 5px 0;
        :nth-child(2) {
          padding-left: 5px;
          padding-right: 10px;
        }
        p {
          width: 50%;
          text-align: end;
          padding-left: 10px;
          word-break: break-word;
        }
      }
    }
  }
`
export default StyledInfo;
import styled from 'styled-components';

const StyledFunFact = styled.div`
  margin-bottom: 30px;
  .fun {
    position: relative;
    display: flex;
    .box{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px 10px;
      width: 100%;
      span {
        margin-bottom: 10px;
        color: var(--primary);
      }
    }
  }
`

export default StyledFunFact;
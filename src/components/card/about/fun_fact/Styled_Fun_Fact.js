import styled from 'styled-components';
import { Primary, Border } from '../../../../layout/index.scss';

const StyledFunFact = styled.div`
  .fun {
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, .2);
    .box{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      padding: 20px 10px;
      :nth-child(1), :nth-child(2), :nth-child(3) {
        border-right: 1px solid rgba(255, 255, 255, .2);
      }
      span {
        margin-bottom: 10px;
        color: ${Primary};
      }
    }
  }
`

export default StyledFunFact;
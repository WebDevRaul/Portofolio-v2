import styled from 'styled-components';
import { Primary, ToLeft, ToRight, FromTop } from '../../../../layout/index.scss';

const StyledFunFact = styled.div`
  margin-bottom: 30px;
  .fun {
    position: relative;
    display: flex;
    justify-content: space-between;
    .box{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px 10px;
      margin: 2px;
      span {
        margin-bottom: 10px;
        color: ${Primary};
      }
    }
    .top-left, .top-right, .first, .second, .third {
      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
      }
    }
    .top-left, .top-right {
      ::after {
        width: 50%;
        height: 1px;
      } 
    }
    .top-left {
      ::after {
        background: ${ToRight};
      }
    }
    .top-right {
      ::after {
        background: ${ToLeft};
        right: 0;
      }
    }
    .first, .second, .third {
      ::after {
        width: 1px;
        height: 100%;
        background: ${FromTop};
      }
    }
  }
`

export default StyledFunFact;
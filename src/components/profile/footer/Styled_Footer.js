import styled from 'styled-components';
import { Secondary, Spacing, ToRight, ToLeft, FromTop } from '../../../layout/index.scss';

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  .right, .left {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    .btn {
      margin: 15px 0;
      display: flex;
      align-items: center;
    }
  }
  .right, .left, .middle {
    ::after {
      content: '';
      display: block;
      position: absolute;
    }
  }
  .right, .left {
    ::after {
      width: 100%;
      height: 1px;
    }
  }
  .right {
    ::after {
      background: ${ToRight};
    }
  }
  .left {
    ::after {
      background: ${ToLeft};
    }
  }
  .middle {
    ::after {
      width: 1px;
      height: 68px;
      background: ${FromTop};
    }
  }
`

export default StyledFooter;
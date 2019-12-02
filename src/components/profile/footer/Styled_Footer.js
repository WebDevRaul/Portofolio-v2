import styled from 'styled-components';
import { Secondary, Spacing, ToRight, ToLeft, FromTop, Transition } from '../../../layout/index.scss';

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  div {
    width: 100%;
    text-align: center;
    :nth-child(1) {
      ::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: ${ToRight};
      }
    }
    :nth-child(3) {
      ::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: ${ToLeft};
      }
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      padding: 10px 0;
      margin: 10px;
      font-weight: 600;
      letter-spacing: ${Spacing};
      transition: ${Transition};
      :hover {
        color: ${Secondary};
        cursor: pointer;
      }
    }
  }
  i {
    ::before {
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 100%;
      background: ${FromTop};
    }
  }
`

export default StyledFooter;
import styled from 'styled-components';
import { Secondary, Spacing, ToRight, ToLeft } from '../../../layout/index.scss';

const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  div {
    width: 100%;
    text-align: center;
    :nth-child(1) {
      border-right: 1px solid rgba(250, 250, 250, .2);
      ::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: ${ToRight};
      }
    }
    :nth-child(2) {
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
      :hover {
        color: ${Secondary};
        cursor: pointer;
      }
    }
  }
`

export default StyledFooter;
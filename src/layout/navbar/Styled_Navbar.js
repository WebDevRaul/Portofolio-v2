import styled from 'styled-components';
import { Secondary, Grey, Border } from '../index.scss';

const StyledNavbar = styled.nav`
  ul {
    max-width: 70px;
    background-color: ${Grey};
    border-radius: ${Border};
    margin: 15px 5px 0 auto;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: .9em;
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background: radial-gradient(ellipse at right, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
      }
      &:nth-last-child(1) {
        &::after {
          background: none;
        }
      }
      div {
        width: 100%;
        padding: 14px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
          cursor: pointer;
          color: ${Secondary};
        }
        span {
          font-size: .8em;
          padding-top: 2px;
        }
        .material-icons {
          font-size: 1.7em;
        }
      }
    }
  }
`

export default StyledNavbar;